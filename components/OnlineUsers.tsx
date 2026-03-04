"use client"

import { useEffect, useState } from "react"
import { database } from "@/lib/firebase"
import {
  ref,
  set,
  onDisconnect,
  onValue,
  remove,
  push,
  serverTimestamp,
} from "firebase/database"

export default function OnlineUsers() {
  const [count, setCount] = useState(0)
  const [animatedCount, setAnimatedCount] = useState(0)

  useEffect(() => {
    const usersRef = ref(database, "onlineUsers")
    const userRef = push(usersRef)

    set(userRef, {
      online: true,
      timestamp: serverTimestamp(),
    })

    onDisconnect(userRef).remove()

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      const total = data ? Object.keys(data).length : 0
      setCount(total)
    })

    return () => {
      remove(userRef)
      unsubscribe()
    }
  }, [])

  // animação suave do número
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCount((prev) => {
        if (prev < count) return prev + 1
        if (prev > count) return prev - 1
        return prev
      })
    }, 50)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="fixed bottom-3 right-4 z-50">
      <div className="flex items-center justify-center
                bg-white/10
                backdrop-blur-2xl
                border border-white/20
                shadow-lg px-3 py-1.5
                 rounded-xl text-xs 
                 transition-all duration-300
                  hover:scale-105 gap-2">

        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>

        <div className="text-sm font-medium tracking-wide">
          <span className="font-bold text-lg">
            {animatedCount}
          </span>{" "}
          {animatedCount === 1 ? "Pessoa online" : "Pessoas online"}
        </div>
      </div>
    </div>
  )
}
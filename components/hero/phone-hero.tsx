"use client"

import { motion } from "framer-motion"
import { Heart, Send } from "lucide-react"
import { useEffect, useState } from "react"

export function Phone() {
  const [time, setTime] = useState("")

    useEffect(() => {
      const updateTime = () => {
        const now = new Date()
        const h = now.getHours().toString().padStart(2, "0")
        const m = now.getMinutes().toString().padStart(2, "0")
        setTime(`${h}:${m}`)
      }
      updateTime()
      const i = setInterval(updateTime, 1000)
      return () => clearInterval(i)
    }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-1 mx-auto w-65 md:w-70"
    >

      <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900">
        <div className="relative aspect-9/19.5 w-full bg-neutral-950">
          <div className="flex items-center justify-between px-6 pt-4">
            <span className="text-[10px] font-semibold text-neutral-100">{time}</span>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-4.5 rounded-sm border border-neutral-500 bg-neutral-100/80" />
            </div>
          </div>

          <div className="px-3 pt-3">
            <div className="mb-3 flex gap-1">
              <div className="h-0.5 flex-1 rounded-full bg-neutral-100" />
              <div className="h-0.5 flex-1 rounded-full bg-neutral-100/30" />
              <div className="h-0.5 flex-1 rounded-full bg-neutral-100/30" />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-linear-to-br from-green-400 to-green-600 ring-2 ring-green-300/50">
                <img
                  src="/Paulo.jpeg"
                  alt="avatar"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-neutral-100">Paulo.Victor</p>
              </div>
            </div>
          </div>

          <div className="mx-3 mt-3 flex flex-1 items-center justify-center rounded-xl bg-linear-to-br from-neutral-800 to-neutral-900 p-8">
            <div className="text-center">
              <p className="text-lg font-bold text-neutral-100">{'{ }'}</p>
              <p className="mt-1 text-[10px] text-neutral-400">Full Stack Developer</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex items-center gap-2 px-3">
            <div className="flex-1 rounded-full border border-neutral-700 px-3 py-1.5">
              <span className="text-[10px] text-neutral-500">Enviar mensagem...</span>
            </div>
            <Heart className="h-4 w-4 text-neutral-100" />
            <Send className="h-4 w-4 text-neutral-100" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}


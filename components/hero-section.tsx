"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GitCommit, GitPullRequest } from "lucide-react"
import { useEffect, useState } from "react"

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [value])

  return <span>{count}</span>
}

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center px-6">
      <h1 className="absolute top-1/2 -translate-y-1/2 text-[200px] md:text-[230px] font-black text-blue-600 tracking-tight select-none">
        FULLSTACK
      </h1>
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <h2 className="flex gap-48 text-4xl md:text-7xl font-black italic tracking-[0.15em] absolute top-1/4 -translate-y-1/2">
          <span className="">
            Paulo
          </span>
          <span className="not-italic font-black tracking-[0.15em]">
            Victor
          </span>
        </h2>
        <div className="relative w-70 md:w-95 mb-6">
          <Image src="/images/6cf05b6ff6c054e7454b1969e87231c6-removebg-preview.png" alt="Profile" width={500} height={500} className="grayscale object-contain" />
        </div>
      </div>
      <div className="absolute bottom-10 left-10 text-sm text-gray-600 text-left max-w-55 hidden md:block">
        <p>
          Specialized in web design, UX/UI, Webflow, and front-end development.
        </p>
      </div>
      <div className="absolute bottom-10 right-10 text-sm text-gray-600 text-right max-w-55 hidden md:block">
        <p>
          Build a credible, conversion-focused website that shows your ideal client exactly how you can help them.
        </p>
      </div>

      {/* Floating Card 1 */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-[15%] top-[30%]"
      >
        <div className="w-56 h-32 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between transform rotate-[-8deg] hover:rotate-0 transition duration-500">
          <div className="flex items-center gap-3 text-[#60519b]">
            <GitCommit size={20} />
            <span className="text-sm uppercase tracking-widest">
              Commits
            </span>
          </div>
          <div className="text-3xl font-bold text-white">
            <Counter value={1248} />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2 */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-[15%] bottom-[25%]"
      >
        <div className="w-56 h-32 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between transform rotate-[8deg] hover:rotate-0 transition duration-500">
          <div className="flex items-center gap-3">
            <GitPullRequest size={20} />
            <span className="text-sm uppercase tracking-widest">
              Pull Requests
            </span>
          </div>
          <div className="text-3xl font-bold text-white">
            <Counter value={312} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
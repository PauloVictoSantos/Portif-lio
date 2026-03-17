"use client"

import { motion } from "framer-motion"
import { useMemo, useState, useEffect } from "react"

/* Seeded pseudo-random number generator (deterministic) */
function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

/* --- Clouds background --- */
function Clouds() {
  const clouds = useMemo(
    () => [
      { width: 100, height: 60, top: "15%", duration: 3, delay: 0 },
      { width: 150, height: 80, top: "35%", duration: 4.5, delay: -1 },
      { width: 80, height: 50, top: "22%", duration: 5.5, delay: -2.5 },
      { width: 110, height: 70, top: "68%", duration: 4, delay: -0.5 },
      { width: 160, height: 55, top: "78%", duration: 3.5, delay: -1.8 },
      { width: 70, height: 45, top: "50%", duration: 6, delay: -3 },
      { width: 130, height: 65, top: "10%", duration: 5, delay: -4 },
    ],
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: c.width,
            height: c.height,
            top: c.top,
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 0 40px 20px rgba(255,255,255,0.03)",
          }}
          initial={{ x: "110vw" }}
          animate={{ x: "-200px" }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            ease: "linear",
            delay: c.delay,
          }}
        >
          {/* Cloud bump top-left */}
          <div
            className="absolute rounded-full"
            style={{
              width: "60%",
              height: "60%",
              top: "-30%",
              left: "10%",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          {/* Cloud bump top-right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "40%",
              height: "40%",
              top: "-20%",
              left: "50%",
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

/* --- Long speed lines (fazers) --- */
function LongFazers() {
  const fazers = useMemo(
    () => [
      { top: "20%", duration: 0.6, delay: -5, height: 2 },
      { top: "40%", duration: 0.8, delay: -1, height: 2 },
      { top: "60%", duration: 0.6, delay: 0, height: 2 },
      { top: "80%", duration: 0.5, delay: -3, height: 2 },
      { top: "30%", duration: 0.7, delay: -2, height: 1.5 },
      { top: "50%", duration: 0.55, delay: -4, height: 1.5 },
      { top: "70%", duration: 0.65, delay: -1.5, height: 1 },
      { top: "15%", duration: 0.9, delay: -0.8, height: 1 },
    ],
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {fazers.map((f, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            height: f.height,
            width: "20%",
            top: f.top,
            background:
              "linear-gradient(to left, rgba(255,255,255,0.6), rgba(255,255,255,0))",
          }}
          initial={{ left: "200%" }}
          animate={{ left: "-200%", opacity: [1, 1, 0] }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            ease: "linear",
            delay: f.delay,
          }}
        />
      ))}
    </div>
  )
}

/* --- Rocket / Spaceship --- */
function Rocket() {
  return (
    <motion.div
      className="relative"
      style={{ zIndex: 2 }}
      animate={{
        x: [2, -1, -2, 1, 1, -1, -1, 3, -2, 2, 1],
        y: [1, -3, 0, 2, -1, 3, 1, 1, -1, 1, -2],
        rotate: [0, -1, 1, 0, 1, -1, 0, -1, 1, 0, -1],
      }}
      transition={{
        duration: 0.4,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Exhaust trail (the red bar behind) */}
      <span
        className="absolute rounded-r-lg"
        style={{
          height: 5,
          width: 35,
          background: "#f51313",
          top: -19,
          left: 60,
          borderRadius: "2px 10px 1px 0",
          boxShadow: "0 0 12px 2px rgba(245,19,19,0.4)",
        }}
      >
        {/* Small white trail sparks */}
        <motion.span
          className="absolute"
          style={{ width: 30, height: 1, background: "#fff", left: 0, top: 0 }}
          animate={{ left: [-0, -80], opacity: [1, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute"
          style={{ width: 30, height: 1, background: "#fff", left: 0, top: 3 }}
          animate={{ left: [0, -100], opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute"
          style={{ width: 30, height: 1, background: "#fff", left: 0, top: 1 }}
          animate={{ left: [0, -50], opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: "linear", delay: -1 }}
        />
        <motion.span
          className="absolute"
          style={{ width: 30, height: 1, background: "#fff", left: 0, top: 4 }}
          animate={{ left: [0, -150], opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: -1 }}
        />
      </span>

      {/* Base / body of the rocket */}
      <div className="relative" style={{ width: 0, height: 0 }}>
        {/* Triangle body */}
        <span
          className="absolute"
          style={{
            width: 0,
            height: 0,
            borderTop: "6px solid transparent",
            borderRight: "100px solid #f3cfcf",
            borderBottom: "6px solid transparent",
          }}
        >
          {/* Circular head */}
          <span
            className="absolute rounded-full"
            style={{
              height: 22,
              width: 22,
              background: "#f3cfcf",
              right: -110,
              top: -16,
              boxShadow: "0 0 15px 3px rgba(243,207,207,0.15)",
            }}
          />
          {/* Upper fin */}
          <span
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderTop: "0 solid transparent",
              borderRight: "55px solid #f3cfcf",
              borderBottom: "16px solid transparent",
              top: -16,
              right: -98,
            }}
          />
        </span>

        {/* Face / cockpit */}
        <div
          className="absolute"
          style={{
            height: 12,
            width: 20,
            background: "#f3cfcf",
            borderRadius: "20px 20px 0 0",
            transform: "rotate(-40deg)",
            right: -125,
            top: -15,
          }}
        >
          {/* Red visor */}
          <div
            className="absolute"
            style={{
              height: 12,
              width: 12,
              background: "#f51313",
              right: 4,
              top: 7,
              transform: "rotate(40deg)",
              transformOrigin: "50% 50%",
              borderRadius: "0 0 2px 2px",
              boxShadow: "0 0 8px 2px rgba(245,19,19,0.3)",
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

/* --- Stars background --- */
function Stars() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stars = useMemo(() => {
    const rng = seededRandom(42)
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      top: `${(rng() * 100).toFixed(4)}%`,
      left: `${(rng() * 100).toFixed(4)}%`,
      size: Number((rng() * 2 + 0.5).toFixed(4)),
      delay: Number((rng() * 3).toFixed(4)),
      duration: Number((rng() * 2 + 1).toFixed(4)),
    }))
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "#fff",
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

/* --- Loading text --- */
function LoadingText() {
  const letters = "Carregando...".split("")

  return (
    <motion.div
      className="flex items-center gap-0.5 font-mono text-sm tracking-[0.3em] uppercase"
      style={{ color: "rgba(243,207,207,0.7)", zIndex: 3 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function ChipLoader() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full gap-12 overflow-hidden">
      <LongFazers />
      <Rocket />
      <LoadingText />
    </div>
  )
}

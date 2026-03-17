"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"
import { HiDocumentArrowDown } from "react-icons/hi2"
import { Phone } from "./phone-hero"
import { FloatingCards } from "./floating-cards"

export default function HeroSection() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsReady(true)
      }, 500)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => window.removeEventListener("load", handleLoad)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center px-6"
    >
      <h1 className="group absolute top-1/2 -translate-y-1/2 text-[200px] md:text-[230px] font-black tracking-tight select-none">
        FULLSTACK
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <h1 className="flex gap-96 text-4xl text-neutral-600 md:text-7xl font-black italic tracking-[0.15em] absolute top-10 -translate-y-1/2">
          <span>Paulo</span>
          <span className="not-italic font-black tracking-[0.15em]">
            Victor
          </span>
        </h1>

        <div className="relative mx-auto h-125 w-full max-w-3xl md:h-137.5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full"
          >
            <Phone />
            <FloatingCards />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-sm text-gray-600 text-left max-w-56 hidden md:block">
        <p>
          Código, design e estratégia trabalhando juntos para transformar ideias em produtos.
        </p>
      </div>

      <div className="absolute bottom-10 right-10 text-sm text-gray-600 text-right max-w-56 hidden md:block">
        <div className="flex gap-4 justify-end mb-3">
          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaInstagram size={25} className="text-[#E4405F]" />
          </a>

          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <IoLogoLinkedin size={25} className="text-[#0A66C2]" />
          </a>

          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaGithub size={25} className="text-[#181717] bg-white rounded-full" />
          </a>

          <a
            href="/cv-paulo-victor.pdf"
            download
            className="hover:scale-110 transition"
          >
            <HiDocumentArrowDown size={25} className="text-orange-600" />
          </a>
        </div>

        <p>
          Disponível para projetos freelance, colaborações e parcerias criativas.
        </p>
      </div>
    </section>
  )
}
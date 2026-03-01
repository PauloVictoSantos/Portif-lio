"use client"

import { motion } from "motion/react"
import Image from "next/image"

export function WorldMap() {
  return (
    <div className="relative w-full h-full max-w-md mx-auto">
      
      {/* Imagem */}
      <Image
        src="/world.svg"
        alt="Mapa mundial"
        fill
        className="object-contain opacity-40 "
      />

      {/* Pin */}
      <div className="absolute" style={{ left: "21%", top: "32%" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col items-center"
        >
          {/* Label */}
          <div className="bg-neutral-800/80 backdrop-blur-md text-neutral-200 text-xs px-3 py-1 rounded-md mb-1 whitespace-nowrap border border-neutral-700 shadow-lg">
            Estamos aqui
          </div>

          {/* Linha */}
          <div className="w-px h-8 bg-cyan-400" />

          {/* Ponto */}
          <div className="relative">
            <div className="w-3 h-3 bg-cyan-400 rounded-full" />

            <motion.div
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>

    </div>
  )
}
"use client"

import { motion } from "motion/react"
import { Mail } from "lucide-react"
import { WorldMap } from "@/components/world-map"
import ContactForm from "@/components/ContactForm"

export function ContactSection() {
  return (
    <section id="Contact" className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col justify-center">


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              <span>
                
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Olá, eu sou o Paulo
              </h1>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-neutral-400 max-w-md"
            >
              Estamos sempre buscando melhorar nossos produtos.
              Entre em contato conosco e diga como podemos ajudar.
            </motion.p>

            {/* World Map com altura definida */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 h-62.5 w-full opacity-70"
            >
              <WorldMap />
            </motion.div>

          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
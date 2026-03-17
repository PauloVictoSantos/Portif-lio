"use client"

import { motion } from "motion/react"
import { Info, Mail } from "lucide-react"
import { WorldMap } from "@/components/world-map"
import ContactForm from "@/components/ContactForm"
import { TooltipCard } from "./ui/tooltip-card"
import { Badge } from "./ui/badge"
import SectionBadge from "./ui/SectionBadge"

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8">

            <SectionBadge
              icon={<Mail className="h-10 w-10 text-[#60519b]" />}
              text="Contato"
            />

            <div className="relative w-full max-w-3xl space-y-6">
              <div className="flex items-start gap-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Vamos Conversar
                </h2>

                <TooltipCard
                  containerClassName="mt-3 cursor-pointer"
                  content={
                    <div className="max-w-xs text-sm">
                      <p className="font-semibold mb-1">Sobre esta seção:</p>
                      <p>
                        Utilize o formulário ao lado para entrar em contato
                        para oportunidades, parcerias ou projetos.
                        Responderei o mais breve possível.
                      </p>
                    </div>
                  }
                >
                  <Info className="w-4 h-4  hover:text-[#60519b] transition" />
                </TooltipCard>
              </div>

              <p className="text-lg leading-relaxed max-w-xl">
                Estou disponível para oportunidades como desenvolvedor,
                projetos freelance e colaborações técnicas. Se você tem
                uma ideia, proposta ou deseja trocar experiências sobre
                tecnologia, será um prazer conversar.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 h-64 w-full opacity-70"
            >
              <WorldMap />
            </motion.div>

          </div>

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
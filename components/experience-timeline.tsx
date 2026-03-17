"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion"
import { MdWork } from "react-icons/md"
import SectionBadge from "./ui/SectionBadge"

interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Trainee em Inovação",
    company: "IFAM / EMBRAPII – Capacitação 4.0",
    period: "Dez 2022 - Nov 2023",
    description:
      "Participação no projeto de inovação tecnológica Capacitação 4.0, atuando no apoio ao desenvolvimento de soluções tecnológicas e atividades de pesquisa aplicada. Colaboração no desenvolvimento de sistemas e ferramentas digitais, realização de testes, suporte técnico e participação em iniciativas educacionais voltadas à formação tecnológica e inovação.",
  },
  {
    id: 2,
    role: "Assistente Fiscal Tributario",
    company: "Prefeitura Municipal - Setor de Tributos",
    period: "2025 - Atual",
    description:
      "Atuação no suporte e desenvolvimento de soluções tecnológicas para o setor de tributos da prefeitura. Responsável por auxiliar na manutenção de sistemas administrativos, análise de dados e melhoria de processos digitais relacionados à gestão tributária.",
  },
];

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0">
      <motion.div
        className="flex flex-col justify-center md:pr-12 md:text-right"
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <h3 className="text-xl md:text-2xl font-bold  tracking-tight text-balance">
          {experience.role}
        </h3>
        <span className="text-sm  font-medium mt-1 block">
          {experience.company}
        </span>
      </motion.div>

      <motion.div
        className="hidden md:flex flex-col items-center justify-center w-35 relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
      >
        <span className="text-xs font-semibold tracking-wider uppercase text-center leading-tight whitespace-nowrap">
          {experience.period}
        </span>
      </motion.div>

      <motion.div
        className="flex items-center md:pl-12"
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: index * 0.15 + 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div>
          <div className="md:hidden inline-flex items-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full " />
            <span className="text-xs font-semibold tracking-widest uppercase ">
              {experience.period}
            </span>
          </div>

          <p className="text-sm md:text-[15px] leading-relaxed">
            {experience.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

  const progress = useTransform(smoothProgress, [0, 1], [0, 1])
  const ballTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  const ballOpacity = useTransform(
    smoothProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-7xl mx-auto space-y-10">
            <SectionBadge
              icon={<MdWork className="h-10 w-10 text-[#60519b]" />}
              text="Experiência"
            />

            <div className="relative w-full max-w-4xl space-y-6">

              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Trajetória Profissional
              </h1>

              <p className="text-lg leading-relaxed max-w-2xl">
                Experiências que contribuíram para meu crescimento técnico e profissional,
                envolvendo desenvolvimento de aplicações web, organização de código,
                trabalho com diferentes tecnologias e foco contínuo em qualidade,
                performance e boas práticas de engenharia de software.
              </p>

            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-4"
              viewBox="0 0 16 1000"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.line
                x1="8"
                y1="0"
                x2="8"
                y2="1000"
                stroke="#C7C7C7"
                strokeWidth="5"
                style={{ pathLength: progress }}
              />
            </svg>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                top: ballTop,
                opacity: ballOpacity,
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-10 h-10 rounded-full bg-blue-600/95 dark:bg-white/5 blur-xl" />
                <div className="absolute w-6 h-6 rounded-full bg-blue-600/90 dark:bg-white/10 blur-md" />
                <div className="w-5.5 h-5.5 rounded-full bg-blue-600 dark:bg-white shadow-[0_0_16px_rgba(255,255,255,0.5),0_0_32px_rgba(255,255,255,0.15)]" />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

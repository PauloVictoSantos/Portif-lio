"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion"

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
    role: "Desenvolvedor Front End JR",
    company: "Tucupy Tecnologia",
    period: "NOV 2024 - ATUALMENTE",
    description:
      "Atuo na área de desenvolvimento front end, focado na implementação e melhoria de interfaces e funcionalidades em projetos internos. Meu trabalho envolve colaboração com a equipe e integração com serviços internos da empresa.",
  },
  {
    id: 2,
    role: "Estagiário de desenvolvimento fullstack",
    company: "Agência Virtú Marketing Digital",
    period: "MAI 2024 - SET 2024",
    description:
      "Fui responsável por um sistema de notícias, onde no frontend era utilizado React para consumir uma API feita em Node.js no backend. O sistema consistia em diversas páginas com diversos tópicos diferentes de notícias, além de ter uma página individual para cada notícia e uma parte apenas para administradores acessarem, onde era possível postar e excluir as notícias. O backend era feito com Node, Express e MySQL. Após minha chegada refatorei toda a API, melhorando o tempo de resposta e o tamanho do JSON que era enviado pelo backend, além de melhorar o SEO e o desempenho do sistema, também implementei as funcionalidades de editar notícias e criei um editor de texto.",
  },
]

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

      {/* Center: Period */}
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

      {/* Right: Description (no card) */}
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
          {/* Mobile: period tag */}
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

  const progress = useTransform(smoothProgress, [0.1, 0.85], [0, 1])
  const ballTop = useTransform(smoothProgress, [0.1, 0.85], ["0%", "100%"])
  const ballOpacity = useTransform(
    smoothProgress,
    [0.05, 0.12, 0.8, 0.9],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle radial background */}
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight italic">
            Minha experiência
          </h2>
          <div className="mt-5 h-px w-20 bg-linear-to-r from-transparent via-white/25 to-transparent mx-auto" />
        </motion.div>

        {/* Timeline Area */}
        <div className="relative">
          {/* SVG line drawn by the ball - Desktop only */}
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
                {/* Outer glow */}
                <div className="absolute w-10 h-10 rounded-full bg-blue-600/95 dark:bg-white/5 blur-xl" />
                {/* Medium glow */}
                <div className="absolute w-6 h-6 rounded-full bg-blue-600/90 dark:bg-white/10 blur-md" />
                {/* Core ball */}
                <div className="w-5.5 h-5.5 rounded-full bg-blue-600 dark:bg-white shadow-[0_0_16px_rgba(255,255,255,0.5),0_0_32px_rgba(255,255,255,0.15)]" />
              </div>
            </motion.div>
          </div>

          {/* Experience Items */}
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

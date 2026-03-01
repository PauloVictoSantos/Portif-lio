"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiVercel,
  SiPostgresql,
  SiFramer
} from "react-icons/si"
import { IconType } from "react-icons"

type Project = {
  title: string
  description: string
  site: string
  code: string
  tech: IconType[]
}

const projects: Project[] = [
  {
    title: "Tributos - Plataforma de Perfis",
    description:
      "Aplicação web moderna para criação e visualização de perfis personalizados. O projeto utiliza renderização híbrida do Next.js, com foco em performance, SEO e experiência fluida. Desenvolvi sistema dinâmico de rotas, design responsivo e otimização de carregamento.",
    site: "https://tributos-tawny.vercel.app/profiles/paulo",
    code: "#",
    tech: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiVercel
    ],
  },
  {
    title: "Aura - Interface Futurista",
    description:
      "Projeto focado em UI/UX avançada com animações suaves utilizando Framer Motion. Interface minimalista com efeitos visuais modernos, transições fluidas e layout totalmente responsivo. Priorizei experiência do usuário e microinterações.",
    site: "https://aura-six-khaki.vercel.app/",
    code: "#",
    tech: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiFramer
    ],
  },
  {
    title: "GameGift - Sistema de Ranking",
    description:
      "Sistema completo de gerenciamento de ranking e pontuação para jogos. Inclui painel administrativo, controle de usuários e lógica de pontuação dinâmica. Estruturei arquitetura escalável com separação clara entre front-end e back-end.",
    site: "https://game-gift-4t85.vercel.app/",
    code: "#",
    tech: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiNodedotjs,
      SiPostgresql
    ],
  },
]

export default function ProjectSection() {
  return (
    <section id="projetos" className="w-full py-24 px-6 md:px-16 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto space-y-72">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Preview */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-150 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={project.site}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold ">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                    Tecnologias Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-4 text-2xl text-indigo-400">
                    {project.tech.map((Icon, i) => (
                      <Icon key={i} />
                    ))}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.site}
                    target="_blank"
                    className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-6 py-3 border border-indigo-600 rounded-xl hover:bg-indigo-600/20 transition"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
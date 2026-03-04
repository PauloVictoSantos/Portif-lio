"use client"

import { motion } from "framer-motion"
import { Tooltip } from "@/components/ui/tooltip-card"
import { LinkPreview } from "@/components/ui/link-preview"
import { Info, Contact } from "lucide-react"

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
import { Badge } from "./ui/badge"
import { GoProjectSymlink } from "react-icons/go"

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
      "A plataforma Tributos é uma aplicação web completa desenvolvida com Next.js e React para criação e visualização de perfis personalizados. O sistema permite que usuários organizem informações importantes, compartilhem links e construam uma identidade digital moderna. O projeto foi estruturado com foco em performance, escalabilidade e experiência do usuário, aplicando boas práticas de componentização e organização de código.",
    site: "https://tributos-tawny.vercel.app/profiles/paulo",
    code: "#",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiVercel],
  },
  {
    title: "Aura - Interface Futurista",
    description:
      "Aura é um projeto focado na construção de uma interface moderna e futurista utilizando Next.js, React e Framer Motion. A proposta foi desenvolver uma experiência visual imersiva, explorando animações suaves, transições elegantes e microinterações detalhadas. O layout foi cuidadosamente estruturado para ser responsivo, performático e visualmente impactante, destacando habilidades avançadas em UI e design interativo.",
    site: "https://aura-six-khaki.vercel.app/",
    code: "#",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer],
  },
  {
    title: "GameGift - Sistema de Ranking",
    description:
      "GameGift é um sistema completo de ranking desenvolvido com Next.js no frontend e Node.js no backend, utilizando PostgreSQL para persistência de dados. A aplicação permite gerenciamento de usuários, atualização dinâmica de pontuações e organização de classificações em tempo real. O foco principal foi consolidar conhecimentos em integração entre frontend e backend, modelagem de banco de dados e estruturação de APIs.",
    site: "https://game-gift-4t85.vercel.app/",
    code: "#",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql],
  },
]

export default function ProjectSection() {
  return (
    <section
      id="projetos"
      className="w-full space-y-32 px-6 md:px-20 mt-40"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <Badge className="w-fit flex items-center gap-2 bg-[#31323e] text-[#bfc0d1] border border-[#60519b]/40 shadow-lg shadow-[#60519b]/20">
          <GoProjectSymlink className="h-4 w-4 text-[#60519b]" />
          Projeto
        </Badge>

        <div className="relative w-full max-w-3xl space-y-6">

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-left">
            Experiência em Desenvolvimento
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            Uma seleção dos principais projetos que desenvolvi, aplicando
            boas práticas de arquitetura, foco em performance e construção
            de interfaces modernas e escaláveis.
          </p>

          <Tooltip
            containerClassName="absolute top-2 left-[500px] cursor-pointer"
            content={
              <div className="max-w-xs text-sm">
                <p className="font-semibold mb-1">Sobre esta seção:</p>
                <p>
                  Aqui você encontra projetos reais desenvolvidos com foco em
                  qualidade de código, organização e experiência do usuário.
                </p>
              </div>
            }
          >
            <Info className="w-4 h-4 text-neutral-500 hover:text-[#60519b] transition" />
          </Tooltip>
        </div>
      </div>

      {/* Projetos */}
      <div className="max-w-7xl mx-auto mt-24 space-y-52">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-16 ${isReversed ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Preview */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-160 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={project.site}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="w-full md:w-1/2 space-y-8 px-2 md:px-6">

                <h2 className="text-4xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-lg leading-loose tracking-wide">
                  {project.description}

                  <br /><br />

                  Tecnologias principais como{" "}
                  <LinkPreview
                    url="https://nextjs.org"
                    className="font-semibold text-indigo-400"
                  >
                    Next.js
                  </LinkPreview>,{" "}
                  <LinkPreview
                    url="https://react.dev"
                    className="font-semibold text-indigo-400"
                  >
                    React
                  </LinkPreview>{" "}
                  e{" "}
                  <LinkPreview
                    url="https://www.typescriptlang.org/"
                    className="font-semibold text-indigo-400"
                  >
                    TypeScript
                  </LinkPreview>{" "}
                  foram utilizadas para garantir performance, organização e escalabilidade.
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
                <div className="flex gap-4 pt-6">
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
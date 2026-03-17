"use client"

import { motion } from "framer-motion"
import { TooltipCard } from "@/components/ui/tooltip-card"
import { LinkPreview } from "@/components/ui/link-preview"
import { Info } from "lucide-react"
import { projects, techMap } from "@/data/project"
import { Badge } from "./ui/badge"
import { GoProjectSymlink } from "react-icons/go"
import { Button } from "./ui/button"


function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
  })
}

export default function ProjectSection() {
  return (
    <section
      id="projetos"
      className="w-full space-y-32 px-6 md:px-20 mt-40"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <Badge className="w-fit flex items-center gap-2 border border-[#60519b]/40 shadow-lg shadow-[#60519b]/20">
          <GoProjectSymlink className="h-4 w-4 text-[#60519b]" />
          Projeto
        </Badge>

        <div className="relative w-full max-w-3xl space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-left">
            Experiência em Desenvolvimento
          </h1>

          <p className="text-lg leading-relaxed">
            Uma seleção dos principais projetos que desenvolvi, aplicando
            boas práticas de arquitetura, foco em performance e construção
            de interfaces modernas e escaláveis.
          </p>

          <TooltipCard
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
          </TooltipCard>
        </div>
      </div>

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
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-160 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    src={project.site}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-8 px-2 md:px-6">
                <h2 className="text-4xl font-bold">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-500">
                  Criado em {formatDate(project.createdAt)}
                </p>

                <p className="text-lg leading-loose tracking-wide">
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

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
                    Tecnologias Utilizadas
                  </h3>

                  <div className="flex gap-5 items-center">
                    {project.tech.map((techKey) => {
                      const tech = techMap[techKey]
                      const Icon = tech.icon

                      return (
                        <div>
                          <span key={techKey} title={tech.name}>
                            <Icon
                              size={26}
                              style={{ color: tech.color }}
                              className="hover:scale-110 transition"
                            />
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <div className="flex gap-4 pt-6">
                    <Button asChild variant="default" className="px-6 py-3">
                      <a href={project.site} target="_blank" rel="noopener noreferrer">
                        Ver Projeto
                      </a>
                    </Button>

                    <Button asChild variant="outline" className="px-6 py-3">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        Repositório
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
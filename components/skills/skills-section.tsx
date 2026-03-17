import { Info, Code } from "lucide-react"
import PhoneMockup from './PhoneMockup'
import PhoneContent from './Phone'
import { FlipWords } from '../ui/flip-words'
import { TooltipCard } from "../ui/tooltip-card"
import { LinkPreview } from "../ui/link-preview"
import SectionBadge from "../ui/SectionBadge"
import { Button } from "../ui/button"

export default function SkillsSection() {
  const words = ["interfaces", "projetos", "sistemas", "aplicações"]

  return (
    <section id='skills' className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 z-10">

          <SectionBadge
            icon={<Code className="h-10 w-10 text-[#60519b]" />}
            text="O que eu sei"
          />

          <div className="relative inline-block">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Eu desenvolvo <br />
              <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <FlipWords words={words} />
              </span>
            </h1>

            <TooltipCard
              containerClassName="absolute top-4 -right-8 cursor-pointer"
              content={
                <div className="max-w-xs text-sm">
                  <p className="font-semibold mb-1">Como funciona:</p>
                  <p>
                    O componente <strong>FlipWords</strong> alterna
                    automaticamente as palavras do array
                    <code> words </code> criando o efeito animado.
                  </p>
                </div>
              }
            >
              <Info className="w-4 h-4 text-neutral-500 hover:text-[#60519b] transition" />
            </TooltipCard>
          </div>

          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Crio interfaces utilizando{" "}
            <LinkPreview url="https://react.dev" className="font-bold text-[#60519b]">
              React
            </LinkPreview>{" "}
            e{" "}
            <LinkPreview url="https://nextjs.org" className="font-bold text-[#60519b]">
              Next.js
            </LinkPreview>,
            focando em organização de código e boa experiência visual.
          </p>

          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Desenvolvo lógica de programação em{" "}
            <LinkPreview url="https://en.wikipedia.org/wiki/C_(programming_language)" className="font-bold text-[#60519b]">
              C
            </LinkPreview>,
            entendendo estruturas de dados, memória e funcionamento interno dos programas.
          </p>

          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Estou constantemente construindo projetos para aplicar
            o que aprendo na faculdade e evoluir como desenvolvedor.
          </p>

          <div className="flex gap-4 pt-4">
            <Button>
              Ver Projetos
            </Button>

            <Button variant="outline">
              Fale Comigo
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <PhoneMockup>
            <PhoneContent />
          </PhoneMockup>
        </div>
      </div>
    </section>
  )
}
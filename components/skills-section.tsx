import { Info, Code } from "lucide-react"
import PhoneMockup from './PhoneMockup'
import PhoneContent from './Phone'
import { FlipWords } from './ui/flip-words'
import { Badge } from './ui/badge'
import { Tooltip } from "./ui/tooltip-card"
import { LinkPreview } from "./ui/link-preview"

export default function SkillsSection() {
  const words = ["interfaces", "projetos", "sistemas", "aplicações"]

  return (
    <section id='skills' className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <div className="space-y-8 z-10">

          <Badge className="w-fit flex items-center gap-2 bg-[#31323e] text-[#bfc0d1] border border-[#60519b]/40 shadow-lg shadow-[#60519b]/20">
            <Code className="h-6 w-6 text-[#60519b]" />
            O que eu sei
          </Badge>

          {/* TÍTULO */}
          <div className="relative inline-block">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Eu desenvolvo <br />
              <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <FlipWords words={words} />
              </span>
            </h1>

            <Tooltip
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
            </Tooltip>
          </div>

          {/* TEXTO COM LINK PREVIEW */}
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
            <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium shadow-lg hover:scale-105 transition">
              Ver Projetos
            </button>

            <button className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              Fale Comigo
            </button>
          </div>
        </div>

        {/* CELULAR */}
        <div className="flex justify-center lg:justify-end relative">
          <PhoneMockup>
            <PhoneContent />
          </PhoneMockup>
        </div>

      </div>
    </section>
  )
}
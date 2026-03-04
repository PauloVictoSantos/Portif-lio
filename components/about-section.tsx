import { Contact, Info } from "lucide-react";
import LanyardWithControls from "./lanyard-with-controls";
import { Badge } from "./ui/badge";
import { Tooltip } from "./ui/tooltip-card";
import { LinkPreview } from "./ui/link-preview";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen flex items-center justify-center">

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="space-y-8">

          <Badge className="w-fit flex items-center gap-2 bg-[#31323e] text-[#bfc0d1] border border-[#60519b]/40 shadow-lg shadow-[#60519b]/20">
            <Contact className="h-4 w-4 text-[#60519b]" />
            Sobre mim
          </Badge>

          <div className="relative inline-block">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#bfc0d1]">
              Olá, eu sou Paulo
            </h1>

            <Tooltip
              containerClassName="absolute top-4 -right-8 cursor-pointer"
              content={
                <div className="max-w-xs text-sm">
                  <p className="font-semibold mb-1">Sobre esta seção:</p>
                  <p>
                    Aqui apresento minha formação, tecnologias que utilizo
                    e minha evolução como desenvolvedor.
                  </p>
                </div>
              }
            >
              <Info className="w-4 h-4 text-neutral-500 hover:text-[#60519b] transition" />
            </Tooltip>
          </div>

          <h2 className="text-xl lg:text-2xl font-medium">
            Estudante de{" "}
            <LinkPreview
              url="https://pt.wikipedia.org/wiki/Engenharia_da_Computa%C3%A7%C3%A3o"
              className="font-semibold"
            >
              Engenharia da Computação
            </LinkPreview>
            <span> & Desenvolvedor Full-Stack</span>
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-[#bfc0d1]/70">
            <p>
              Sou apaixonado por tecnologia e pela construção de experiências digitais.
              Atualmente estou focado em evoluir como engenheiro de software,
              criando aplicações organizadas e bem estruturadas.
            </p>

            <p>
              Tenho experiência com{" "}
              <LinkPreview
                url="https://react.dev"
                className="text-[#60519b] font-medium"
              >
                React
              </LinkPreview>
              , criação de interfaces interativas,
              lógica estruturada em{" "}
              <LinkPreview
                url="https://en.wikipedia.org/wiki/C_(programming_language)"
                className="text-[#60519b] font-medium"
              >
                C
              </LinkPreview>
              {" "}e desenvolvimento de projetos reais.
            </p>

            <p>
              Acredito que código de qualidade vai além de funcionar —
              ele precisa ser organizado, compreensível e sustentável.
            </p>
          </div>
        </div>

        <LanyardWithControls
          position={[0, 0, 20]}
          containerClassName='lg:absolute lg:top-[808px] lg:right-0 lg:w-1/2 relative w-full h-screen bg-radial lg:from-transparent lg:to-transparent from-muted to-background select-none'
          defaultName="Paulo Victor"
        />
      </div>
    </section>
  )
}

import LanyardWithControls from "./lanyard-with-controls";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Olá, eu sou o Paulo 👋
          </h1>

          <h2 className="text-xl text-muted-foreground">
            Estudante de Engenharia da Computação & Desenvolvedor em formação
          </h2>

          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Sou apaixonado por tecnologia e desenvolvimento de software.
            Atualmente curso Engenharia da Computação e estou focado
            em evoluir minhas habilidades como desenvolvedor full-stack.
          </p>

          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Tenho experiência prática com React, interfaces interativas,
            lógica de programação em C e construção de projetos reais.
            Gosto de entender profundamente como as coisas funcionam —
            não apenas fazer funcionar.
          </p>

          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Meu objetivo é me tornar um engenheiro de software completo,
            construindo produtos modernos, performáticos e bem estruturados.
          </p>
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

import React from 'react'
import PhoneShowcase from './PhoneMockup'
import { FlipWords } from './ui/flip-words'
import PhoneMockup from './PhoneMockup'
import PhoneContent from './Phone'

export default function skills() {
  const words = ["modern", "scalable", "interactive", "efficient"]
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <div className="space-y-8 z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Building <br />
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <FlipWords words={words} />
            </span>
            <br />
            experiences
          </h1>

          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Desenvolvedor focado em criar aplicações modernas,
            com arquitetura escalável e performance otimizada.
          </p>

          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            Minha stack combina React, Next.js, TypeScript,
            lógica estruturada em C e foco forte em UI/UX.
          </p>

          {/* Botões estilo Apple */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium shadow-lg hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              Contact Me
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

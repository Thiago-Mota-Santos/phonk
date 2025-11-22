"use client"

import { useRef } from "react"

interface PlonkHeroProps {
  scrollY: number
}

export default function PlonkHero({ scrollY }: PlonkHeroProps) {
  const titleRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={titleRef}
        className="relative z-10 text-center px-4 md:px-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="mb-6 inline-block">
          <span className="text-cyan-400 font-bold text-lg tracking-widest uppercase animate-pulse">
            ✦ PLONK BRASIL ✦
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 text-balance leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-glow">
            Ritmo Que Balança
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Sinta o poder do Plonk: batidas modificadas misturadas com o melhor do funk brasileiro. Uma experiência sonora única.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            Tocar Agora
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-300 font-bold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
            Explorar
          </button>
        </div>
      </div>
    </section>
  )
}

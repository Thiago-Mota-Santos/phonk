"use client"

import { Coffee } from "lucide-react"

export default function PlonkCTA() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-30 blur-xl" />
          <div className="relative bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-12 md:p-16 text-center">

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Pronto Para o Próximo Nível?
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Junte-se a milhares de amantes do Plonk descobrindo batidas incríveis, ritmos modificados e uma comunidade vibrante.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.spotify.com/playlist/4pohEHImW8mSiwRGDXiCcy?si=42abc90a424d4f55"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Playlist no Spotify
              </a>
              <a
                href="https://woovi.com/pay/08764a5b-35b2-4f27-9153-7ecb19eb4b57"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-transparent border-2 border-purple-400 text-purple-300 font-bold text-lg rounded-lg hover:bg-purple-400/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Coffee className="w-5 h-5" />
                Me pague um café
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-700 pt-8">
              {[
                { label: "Batidas", value: "1000+" },
                { label: "Fãs", value: "50K+" },
                { label: "Horas", value: "500+" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

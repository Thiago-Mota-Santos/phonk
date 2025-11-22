"use client"

import { useState, useEffect } from "react"
import PlonkHero from "@/app/components/plonk-hero"
import PlonkCTA from "@/app/components/plonk-cta"
import BackgroundVideo from "@/app/components/background-video"
import BackgroundMusic from "@/app/components/background-music"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <BackgroundVideo videoSrc="/Dio the best character in JoJo [ DIO BRANDO - JOJO EDIT - MANGA_ANIME ] - pradlx (1080p, h264).mp4" />
      <BackgroundMusic />
      <PlonkHero scrollY={scrollY} />
      <PlonkCTA />
    </main>
  )
}

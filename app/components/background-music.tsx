"use client"

import { useEffect, useRef, useState } from "react"

const audioFiles = [
  "/FESTA COMEÇA.mp3",
  "/MONTAGEM SYNOPTICA.mp3",
  "/MONTAGEM XONADA.mp3"
]

export default function BackgroundMusic() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const initAudio = async () => {
      try {
        // Create audio context
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
        audioContextRef.current = new AudioContextClass()

        // Create gain node for volume control
        gainNodeRef.current = audioContextRef.current.createGain()
        gainNodeRef.current.gain.value = 0.7 // 70% volume for better audibility
        gainNodeRef.current.connect(audioContextRef.current.destination)

        // Select random audio file
        const randomIndex = Math.floor(Math.random() * audioFiles.length)
        const selectedAudio = audioFiles[randomIndex]

        console.log("Loading audio file:", selectedAudio)

        // Load audio file
        const response = await fetch(selectedAudio)
        const arrayBuffer = await response.arrayBuffer()

        // Decode audio data
        audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer)

        console.log("Audio loaded and decoded successfully")
        setIsLoaded(true)

      } catch (error) {
        console.error("Failed to initialize audio:", error)
      }
    }

    // Start initialization
    initAudio()

    // Cleanup function
    return () => {
      if (sourceRef.current) {
        sourceRef.current.stop()
        sourceRef.current.disconnect()
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close()
      }
    }
  }, [])

  const playAudio = async () => {
    if (!audioContextRef.current || !audioBufferRef.current || !gainNodeRef.current) return

    try {
      // Resume audio context if suspended (required by some browsers)
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume()
        console.log("AudioContext resumed")
      }

      // Stop any existing playback
      if (sourceRef.current) {
        sourceRef.current.stop()
        sourceRef.current.disconnect()
      }

      // Create new source node
      sourceRef.current = audioContextRef.current.createBufferSource()
      sourceRef.current.buffer = audioBufferRef.current
      sourceRef.current.loop = true

      // Connect to gain node
      sourceRef.current.connect(gainNodeRef.current)

      // Start playback
      sourceRef.current.start(0)
      console.log("Audio playback started successfully!")
      setShowButton(false)

    } catch (error) {
      console.error("Failed to start audio playback:", error)
    }
  }

  if (!isLoaded) return null

  return (
    <>
      {showButton && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-6">
              <span className="text-6xl md:text-8xl font-black animate-pulse">
                🎵
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                PHONK BRASIL
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Prepare-se para uma experiência sonora única com batidas frenéticas e energia pura
            </p>

            <button
              onClick={playAudio}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-black text-xl rounded-full shadow-2xl hover:shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              ▶️ INICIAR EXPERIÊNCIA
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Clique para liberar o som frenético
            </p>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

const audioFiles = [
  "/FESTA COMEÇA.mp3",
  "/MONTAGEM SYNOPTICA.mp3",
  "/MONTAGEM XONADA.mp3"
]

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [selectedAudio, setSelectedAudio] = useState<string>("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  useEffect(() => {
    // Select random audio file on component mount
    const randomIndex = Math.floor(Math.random() * audioFiles.length)
    setSelectedAudio(audioFiles[randomIndex])
  }, [])

  useEffect(() => {
    const tryAutoplay = async () => {
      if (audioRef.current && selectedAudio) {
        audioRef.current.volume = 0.5 // Set volume to 50%
        try {
          await audioRef.current.play()
          setIsPlaying(true)
          console.log("Audio started automatically")
        } catch (error) {
          console.log("Audio autoplay failed, showing play button:", error)
          setShowPlayButton(true)
        }
      }
    }

    // Small delay to ensure audio element is ready
    const timer = setTimeout(tryAutoplay, 100)
    return () => clearTimeout(timer)
  }, [selectedAudio])

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setShowPlayButton(false)
        console.log("Audio started manually")
      } catch (error) {
        console.log("Manual play failed:", error)
      }
    }
  }

  const handleAudioEnded = () => {
    // When audio ends (shouldn't happen with loop, but just in case)
    setIsPlaying(false)
  }

  if (!selectedAudio) return null

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        className="hidden"
        onEnded={handleAudioEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={selectedAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {showPlayButton && (
        <button
          onClick={handlePlay}
          className="fixed bottom-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-colors duration-200 flex items-center gap-2"
          aria-label="Tocar música"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Tocar Batida
        </button>
      )}
    </>
  )
}

"use client"

import { useEffect, useRef } from "react"

interface BackgroundVideoProps {
  videoSrc: string
  playbackRate?: number
}

export default function BackgroundVideo({ videoSrc, playbackRate = 2.0 }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-30"
        style={{ filter: 'blur(1px)' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80" />
    </div>
  )
}

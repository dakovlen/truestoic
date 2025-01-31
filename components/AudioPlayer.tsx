"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  audioSrc: string
}

export function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="mb-6">
      <button
        onClick={togglePlayPause}
        className="flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition duration-300"
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? <Pause className="mr-2" size={18} /> : <Play className="mr-2" size={18} />}
        {isPlaying ? "Pause" : "Play"} Audio Version
      </button>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  )
}


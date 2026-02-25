'use client'

import { useRef, useState, useCallback } from 'react'

export default function AudioButton() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio('/Tranquility.mp3')
      audio.loop = true
      audio.volume = 0.5
      audioRef.current = audio
    }
    return audioRef.current
  }, [])

  const toggle = () => {
    const audio = getAudio()

    if (!playing) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <button
      onClick={toggle}
      className={`audio-btn${playing ? ' is-playing' : ''}`}
      title={playing ? 'Pause ambient sound' : 'Play ambient sound'}
      aria-label={playing ? 'Pause ambient sound' : 'Play ambient sound'}
    >
      <div className="audio-waves" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
      <span className="audio-icon-static" aria-hidden="true">♪</span>
    </button>
  )
}

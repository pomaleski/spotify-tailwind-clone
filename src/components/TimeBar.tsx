'use client'

import { useState } from 'react'
import ProgressBar from './ProgressBar'

interface TimeBarProps {}
export default function TimeBar(props: TimeBarProps) {
  const [progress, setProgress] = useState(0)

  const musicTime = 212

  const totalMinutes = Math.trunc(musicTime / 60)
  const totalSeconds = musicTime % 60

  const currentMinutes = Math.trunc((progress * musicTime) / 100 / 60)
  const currentSeconds = Math.trunc(((progress * musicTime) / 100) % 60)

  return (
    <div className="flex items-center justify-center gap-3 font-light text-xs text-neutral-400">
      <span className="w-4 flex items-center justify-center">
        {currentMinutes
          .toString()
          .concat(':', currentSeconds === 0 ? '00' : currentSeconds.toString())}
      </span>
      <ProgressBar progress={progress} setProgress={setProgress} />
      <span className="w-4 flex items-center justify-center">
        {totalMinutes.toString().concat(':', totalSeconds.toString())}
      </span>
    </div>
  )
}

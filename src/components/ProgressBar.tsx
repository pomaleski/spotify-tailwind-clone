import { Dispatch, SetStateAction } from 'react'

interface ProgressBarProps {
  progress: number
  setProgress: Dispatch<SetStateAction<number>>
}

export default function ProgressBar({
  progress,
  setProgress,
}: ProgressBarProps) {
  return (
    <div className="flex relative group">
      <div className="w-96 h-1 rounded-lg bg-neutral-600 absolute"></div>
      <div
        style={{ width: (progress * 384) / 100 }}
        className="h-1 bg-zinc-50 rounded-lg absolute group-hover:bg-green-500"
      ></div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        className={`w-96 h-1 rounded-lg bg-transparent appearance-none cursor-pointer accent-zinc-50 transition-all relative
          [&::-webkit-slider-thumb]:hidden [&:hover&::-webkit-slider-thumb]:flex
          [&::-moz-range-track]:hidden [&:hover&::-moz-range-track]
        `}
        onChange={(e) => setProgress(parseInt(e.target.value))}
      ></input>
    </div>
  )
}

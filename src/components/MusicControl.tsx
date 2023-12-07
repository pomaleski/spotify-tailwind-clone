import ActionButton from './ActionButton'
import { IoPlay } from 'react-icons/io5'
import { FaBackwardStep, FaForwardStep } from 'react-icons/fa6'
import { TbRepeat, TbArrowsCross } from 'react-icons/tb'
import TimeBar from './TimeBar'

interface MusicControlProps {}
export default function MusicControl(props: MusicControlProps) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <ActionButton
          icon={TbArrowsCross}
          iconSize={20}
          className="text-zinc-400 hover:text-zinc-50"
        />
        <ActionButton
          icon={FaBackwardStep}
          iconSize={20}
          className="text-zinc-400 hover:text-zinc-50"
        />
        <ActionButton
          icon={IoPlay}
          iconSize={24}
          className="rounded-full bg-zinc-50 text-black [&>svg]:ps-1 border-zinc-50 hover:scale-110"
        />
        <ActionButton
          icon={FaForwardStep}
          iconSize={20}
          className="text-zinc-400 hover:text-zinc-50"
        />
        <ActionButton
          icon={TbRepeat}
          iconSize={20}
          className="text-zinc-400 hover:text-zinc-50"
        />
      </div>
      <TimeBar />
    </div>
  )
}

import Image from 'next/image'
import ActionButton from './ActionButton'
import { IoPlay } from 'react-icons/io5'

interface HomeListProps {
  imageSrc: string
  imageAlt: string
  title: string
}
export default function HomeList({ imageSrc, imageAlt, title }: HomeListProps) {
  return (
    <div className="flex justify-between overflow-hidden group rounded-lg bg-opacity-5 bg-white hover:bg-opacity-10 transition cursor-pointer">
      <div className="flex items-center gap-2 max-w-xs">
        <Image src={imageSrc} width={64} height={64} alt={imageAlt} />
        <span className="text-sm">{title}</span>
      </div>
      <div className="flex items-center justify-center group-hover:me-2">
        <ActionButton
          icon={IoPlay}
          className="w-10 h-10 bg-green-500 text-black rounded-full [&>svg]:ps-1 hidden group-hover:flex transition-all"
        />
      </div>
    </div>
  )
}

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TiPin } from 'react-icons/ti'
import { HiArrowDownCircle } from 'react-icons/hi2'
import { Capitalize } from '@/utils/Captalize'

interface LibraryItemProps {
  type: 'playlist' | 'artist'
  user?: string
  src: string
  alt: string
  title: string
  active?: boolean
  pinned?: boolean
  download?: boolean
}
export default function LibraryItem({
  type,
  user,
  src,
  alt,
  title,
  active = false,
  pinned = false,
  download = false,
}: LibraryItemProps) {
  return (
    <div
      className={twMerge(
        'flex justify-between gap-3 p-2 rounded-lg bg-neutral-50 bg-opacity-0 cursor-pointer hover:bg-opacity-5',
        active && 'bg-opacity-10 hover:bg-opacity-20'
      )}
    >
      <div className="flex gap-4">
        <Image
          className={twMerge(
            'w-14 h-14 object-cover rounded-lg',
            type === 'artist' && 'rounded-full'
          )}
          src={src}
          width={56}
          height={56}
          alt={alt}
        />
        <div className="flex flex-col justify-center gap-1">
          <span className={twMerge('text-sm', active && 'text-green-500')}>
            {title.length >= 20 ? title.substring(0, 20).concat('...') : title}
          </span>
          <div className="flex gap-1">
            {pinned && <TiPin className="text-green-500" size={16} />}
            {download && (
              <HiArrowDownCircle className="text-green-500" size={16} />
            )}
            <span className="text-xs text-zinc-400">
              {Capitalize(type)}
              {type === 'playlist' && ' · ' + user}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

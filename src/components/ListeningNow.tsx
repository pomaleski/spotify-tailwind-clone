import Image from 'next/image'
import CheckButton from './CheckButton'

interface ListeningNowProps {}
export default function ListeningNow(props: ListeningNowProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={'/static/images/Arctic_MonkeysWhatever.png'}
        width={64}
        height={64}
        alt="Capa do albúm Whatever People Say I Am, That's What I'm Not"
        className="rounded-lg"
      />
      <div className="flex flex-col font-light">
        <span className="text-sm">Certain Romance</span>
        <span className="text-xs text-zinc-400">Arctic Monkeys</span>
      </div>
      <CheckButton />
    </div>
  )
}

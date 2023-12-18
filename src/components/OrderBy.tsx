import { IoIosList } from 'react-icons/io'

interface OrderByProps {}
export default function OrderBy(props: OrderByProps) {
  return (
    <div className="flex gap-1 items-center cursor-pointer font-light text-zinc-400 hover:text-zinc-50 hover:scale-110">
      <span className="text-sm">Recentes</span>
      <IoIosList size={20} />
    </div>
  )
}

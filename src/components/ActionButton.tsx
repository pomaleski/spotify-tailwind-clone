import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  iconSize?: number
}
export default function ActionButton({
  icon: Icon,
  iconSize = 28,
  className,
}: ActionButtonProps) {
  return (
    <button
      className={twMerge('w-8 h-8 flex items-center justify-center', className)}
    >
      <Icon size={iconSize} />
    </button>
  )
}

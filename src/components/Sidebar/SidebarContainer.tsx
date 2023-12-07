import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SideBarContainerProps {
  children: ReactNode
  className?: string
}
export default function SidebarContainer({
  children,
  className,
}: SideBarContainerProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 p-4 rounded-lg bg-neutral-900',
        className
      )}
    >
      {children}
    </div>
  )
}

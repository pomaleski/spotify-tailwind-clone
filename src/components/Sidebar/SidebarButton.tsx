import { ReactNode } from 'react'

interface SideBarButtonProps {
  children: ReactNode
  text: string
}

export default function SidebarButton({ children, text }: SideBarButtonProps) {
  return (
    <a
      href=""
      className="flex items-center group gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100"
    >
      {children}
      <span className="text-base">{text}</span>
    </a>
  )
}

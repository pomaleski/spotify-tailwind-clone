import { ReactNode } from 'react'

interface SideBarRootProps {
  children: ReactNode
}

export default function SidebarRoot({ children }: SideBarRootProps) {
  return (
    <aside className="w-72 p-2 pb-0">
      <nav className="flex flex-col gap-2 h-full">{children}</nav>
    </aside>
  )
}

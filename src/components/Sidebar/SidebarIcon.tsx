import { ElementType } from 'react'

interface SideBarIconProps {
  icon: ElementType
}

export default function SidebarIcon({ icon: Icon }: SideBarIconProps) {
  return <Icon size={28} />
}

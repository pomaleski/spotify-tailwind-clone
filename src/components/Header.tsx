import ActionButton from './ActionButton'
import { GoChevronLeft, GoChevronRight, GoBell, GoPerson } from 'react-icons/go'
import { HiOutlineUserGroup } from 'react-icons/hi2'

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <header className="flex justify-between">
      <nav className="flex gap-2">
        <ActionButton
          icon={GoChevronLeft}
          iconSize={40}
          className="[&>svg]:pe-1 bg-black rounded-full"
        />
        <ActionButton
          icon={GoChevronRight}
          iconSize={40}
          className="[&>svg]:ps-1 bg-black rounded-full"
        />
      </nav>
      <nav className="flex gap-2">
        <ActionButton
          icon={GoBell}
          iconSize={20}
          className="hover:scale-110 bg-black rounded-full"
        />
        <ActionButton
          icon={HiOutlineUserGroup}
          iconSize={20}
          className="hover:scale-110 bg-black rounded-full"
        />
        <ActionButton
          icon={GoPerson}
          iconSize={20}
          className="hover:scale-110 bg-black rounded-full"
        />
      </nav>
    </header>
  )
}

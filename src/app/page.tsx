import { GoHome } from 'react-icons/go'
import { LuSearch } from 'react-icons/lu'

import { SideBar } from '@/components/Sidebar'
import Library from '@/components/Library'
import HomePage from '@/components/HomePage'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar.Root>
          <SideBar.Container>
            <SideBar.Button text="Início">
              <SideBar.Icon icon={GoHome} />
            </SideBar.Button>
            <SideBar.Button text="Buscar">
              <SideBar.Icon icon={LuSearch} />
            </SideBar.Button>
          </SideBar.Container>
          <Library />
        </SideBar.Root>
        <HomePage />
      </div>
      <Footer />
    </div>
  )
}

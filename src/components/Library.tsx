import { LuLibrary } from 'react-icons/lu'
import { SideBar } from './Sidebar'

export default function Library() {
  return (
    <SideBar.Container className="h-full">
      <SideBar.Button text="Sua Biblioteca">
        <SideBar.Icon icon={LuLibrary} />
      </SideBar.Button>
      <div>Categorias</div>
      <div>Pesquisar</div>
      <div>Recentes</div>
    </SideBar.Container>
  )
}

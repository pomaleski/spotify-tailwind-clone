import { LuLibrary } from 'react-icons/lu'
import { SideBar } from './Sidebar'
import LibraryItem from './LibraryItem'

export default function Library() {
  return (
    <SideBar.Container className="h-full p-0 gap-0">
      <div className="p-4 pb-0 flex flex-col gap-4 mb-1">
        <SideBar.Button text="Sua Biblioteca">
          <SideBar.Icon icon={LuLibrary} />
        </SideBar.Button>
        <div>Categorias</div>
      </div>
      <div className="p-2 pt-0 flex flex-col gap-1">
        <div className="p-2">Pesquisar</div>
        <div className="flex flex-col">
          <LibraryItem
            pinned
            download
            type="playlist"
            user="pomaleski"
            title="Favourite Worst Nightmare"
            src="/static/images/Arctic_Monkeys_Favourite.png"
            alt="Imagem da capa do álbum Favourite Worst Nightmare da banda Arctic Monkeys"
          />
          <LibraryItem
            active
            type="playlist"
            user="pomaleski"
            title="Whatever People Say I Am, That's What I'm Not"
            src="/static/images/Arctic_MonkeysWhatever.png"
            alt="Imagem da capa do álbum Whatever People Say I Am, That's What I'm Not da banda Arctic Monkeys"
          />
          <LibraryItem
            type="artist"
            title="Mac Demarco"
            src="/static/images/mac_demarco.png"
            alt="Foto do artista Mac Demarco"
          />
        </div>
      </div>
    </SideBar.Container>
  )
}

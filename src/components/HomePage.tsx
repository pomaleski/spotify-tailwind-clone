import Header from './Header'
import HomeItem from './HomeItem'

interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <div className="flex-1 p-2 ps-0 pb-0">
      <div className="flex flex-col gap-4 p-4 h-full w-full rounded-lg bg-neutral-900">
        <Header />
        <h1 className="text-3xl font-black">Boa Noite</h1>
        <div className="grid grid-cols-home-page-list gap-2">
          <HomeItem
            imageSrc={'/static/images/Arctic_Monkeys_Favourite.png'}
            imageAlt="Capa do álbum Favourite Worst Nightmare da banda Arctic Monkeys "
            title="Favourite Worst Nightmare"
          />
          <HomeItem
            imageSrc={'/static/images/Arctic_Monkeys_Humbug.png'}
            imageAlt="Capa do álbum Humbug da banda Arctic Monkeys "
            title="Humbug"
          />
          <HomeItem
            imageSrc={'/static/images/Arctic_MonkeysWhatever.png'}
            imageAlt="Capa do álbum Whatever People Say I Am, That's What I'm Not da banda Arctic Monkeys "
            title="Whatever People Say I Am, That's What I'm Not"
          />
          <HomeItem
            imageSrc={'/static/images/Capa-AM_oficial.png'}
            imageAlt="Capa do álbum AM da banda Arctic Monkeys "
            title="AM"
          />
          <HomeItem
            imageSrc={'/static/images/Tranquility_Base_Hotel__Casino_A.png'}
            imageAlt="Capa do álbum Tranquility Base Hotel & Casino da banda Arctic Monkeys "
            title="Tranquility Base Hotel & Casino"
          />
        </div>
        <h2 className="text-2xl font-black">Para você</h2>
        <div>Daily mix</div>
      </div>
    </div>
  )
}

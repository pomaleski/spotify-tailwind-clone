import ListeningNow from './ListeningNow'
import MusicControl from './MusicControl'

interface FooterProps {}
export default function Footer(props: FooterProps) {
  return (
    <footer className="p-2 flex justify-between">
      <ListeningNow />
      <MusicControl />
      <div>Controles adicionais</div>
    </footer>
  )
}

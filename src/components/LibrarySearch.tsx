import ActionButton from './ActionButton'
import { LuSearch } from 'react-icons/lu'
import OrderBy from './OrderBy'

interface LibrarySearchProps {}
export default function LibrarySearch(props: LibrarySearchProps) {
  return (
    <div className="flex justify-between">
      <ActionButton
        icon={LuSearch}
        iconSize={20}
        className="bg-white bg-opacity-0 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-opacity-5"
      />
      <OrderBy />
    </div>
  )
}

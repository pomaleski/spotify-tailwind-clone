import ActionButton from './ActionButton'
import { FaCheck } from 'react-icons/fa6'

interface CheckButtonProps {}
export default function CheckButton(props: CheckButtonProps) {
  return (
    <ActionButton
      icon={FaCheck}
      iconSize={10}
      className="bg-green-500 rounded-full w-auto h-auto p-1 text-black"
    />
  )
}

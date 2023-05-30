import Link from 'next/link'
import { RiUser2Fill } from 'react-icons/ri'

export const UserPanel = () => {
  return (
    <div>
      <Link
        href={'/login'}
        className="flex items-center gap-x-2 hover:opacity-75 transition-opacity"
      >
        <span className="font-medium">Login</span>
        <RiUser2Fill className="fill-red-500 w-7 h-8" />
      </Link>
    </div>
  )
}

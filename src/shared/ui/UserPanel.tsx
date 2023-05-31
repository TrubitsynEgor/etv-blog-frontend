import Link from 'next/link'
import { RiUser2Fill } from 'react-icons/ri'
import { ImExit } from 'react-icons/im'
import { Button } from './Button'
interface UserPanelProps {
  isAuth: boolean
  logout: () => void
}

export const UserPanel = ({ isAuth, logout }: UserPanelProps) => {
  return (
    <div className="flex gap-x-3">
      {isAuth ? (
        <>
          <Link
            href={'/profile'}
            className="flex items-center gap-x-2 hover:opacity-75 transition-opacity"
          >
            <span className="font-medium">Profile</span>
            <RiUser2Fill className="fill-red-500 w-7 h-8" />
          </Link>

          <Button onClick={logout} appearance="icon" className=" p-0">
            <ImExit className="fill-red-500 w-7 h-8" />
          </Button>
        </>
      ) : (
        <Link
          href={'/login'}
          className="flex items-center gap-x-2 hover:opacity-75 transition-opacity"
        >
          <span className="font-medium">Login</span>
          <RiUser2Fill className="fill-red-500 w-7 h-8" />
        </Link>
      )}
    </div>
  )
}

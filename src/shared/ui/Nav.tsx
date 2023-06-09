import { DetailsDivProps } from '@/shared/types'
import Link from 'next/link'
import { FC } from 'react'

interface IMenuItems {
  id: number
  label: string
  href: string
}

interface NavProps extends DetailsDivProps {
  menuItems: IMenuItems[]
  pathname: string
  id: string
}

export const Nav: FC<NavProps> = ({ menuItems, pathname, id }) => {
  return (
    <nav>
      <ul className="flex items-center gap-x-10">
        {menuItems &&
          menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`font-medium hover:opacity-75 transition-opacity ${
                  (pathname === item.href ||
                    pathname === `${item.href}/${id}`) &&
                  'border-b-2 border-red-500'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

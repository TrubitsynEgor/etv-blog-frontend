import { DetailsLinkProps } from '@/shared/types'
import Link from 'next/link'

interface AuthHandlerProps extends DetailsLinkProps {
  url: string
}

export const AuthHandler = ({ url, title }: AuthHandlerProps) => {
  return (
    <Link
      href={url}
      className={`text-orange-400 underline text-right block mt-4
				transition-colors duration-300 ease-in-out hover:text-orange-600
        focus:outline-2 focus:outline-orange-400'
			`}
    >
      {title}
    </Link>
  )
}

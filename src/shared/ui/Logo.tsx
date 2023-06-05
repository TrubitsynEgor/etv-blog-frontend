import Link from 'next/link'
import logoSVG from '/public/logo.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center gap-x-3 hover:opacity-75 transition-opacity"
      >
        <Image
          src={logoSVG}
          alt="logoSVG"
          priority
          width={70}
          height={40}
          className="w-auto h-auto"
        />
      </Link>
    </div>
  )
}

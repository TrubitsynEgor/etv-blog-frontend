import Link from 'next/link'
import logoSVG from '/public/svg/logo.svg'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center gap-x-3 hover:opacity-75 transition-opacity"
      >
        <Image src={logoSVG} alt="logoSVG" width={25} height={25} />
        <span className="text-3xl font-medium  ">ETV-blog</span>
      </Link>
    </div>
  )
}

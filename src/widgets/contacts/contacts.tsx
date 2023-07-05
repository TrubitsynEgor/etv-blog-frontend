import { Container, Title } from '@/shared'
import Telegram from '/public/social/telegram.png'
import GitHub from '/public/social/github.png'
import Gmail from '/public/social/gmail.png'
import Image from 'next/image'
import Link from 'next/link'

export const Contacts = () => {
  return (
    <section className="contacts py-24">
      <Container className="flex items-center justify-center gap-12">
        <Link
          target="_blank"
          href={'https://t.me/Kobreti74'}
          className="flex flex-col items-center gap-8 font-bold  transition-all duration-300 hover:text-slate-100"
        >
          <Image src={Telegram} alt="Telegram" width={120} height={120} />
          <span className="p-2 bg-orange-500 rounded-2xl">
            https://t.me/Kobreti74
          </span>
        </Link>
        <Link
          target="_blank"
          href={'https://github.com/TrubitsynEgor'}
          className="flex flex-col items-center  gap-8 font-bold   transition-all duration-300 hover:text-slate-100"
        >
          <Image src={GitHub} alt="Telegram" width={120} height={120} />
          <span className="p-2 bg-orange-500 rounded-2xl">
            https://github.com/TrubitsynEgor
          </span>
        </Link>
        <Link
          target="_blank"
          href={'mailto:trubitsynwork74@gmail.com'}
          className="flex flex-col items-center gap-8 font-bold  transition-all duration-300 hover:text-slate-100"
        >
          <Image src={Gmail} alt="Telegram" width={120} height={120} />
          <span className="p-2 bg-orange-500 rounded-2xl">
            trubitsynwork74@gmail.com
          </span>
        </Link>
      </Container>
    </section>
  )
}

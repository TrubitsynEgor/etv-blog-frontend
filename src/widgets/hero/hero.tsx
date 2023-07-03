import { Container, Paragraph, Title } from '@/shared'
import Image from 'next/image'
import Photo from '/public/img_01.png'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="hero">
      <Container className="flex items-center justify-center gap-16 mt-8 text-slate-100">
        <div className="max-w-2xl">
          <Title>Hi 👋, I&apos;m Egor!</Title>
          <Title tag="h3">
            <span className="text-orange-200">
              And I&apos;m a Front-End Web Developer.
            </span>
          </Title>

          <div className="mt-5">
            <span className="text-xl">
              A little bit about me,{' '}
              <span className="text-orange-200">I&apos;m:</span>
            </span>
            <Paragraph size="large" className="text-lg">
              Active, adaptable, creative, easy-going, friendly, resourceful and
              tactful
            </Paragraph>
            <Paragraph size="large" className="mt-5">
              I really like Front-end development. I also like creating
              applications, UI components, solving problems during development.
              I was also very interested in back-end development, this project
              is my first work with back-end and database.{' '}
              <Link
                className="text-orange-400 transition-all duration-300 hover:text-orange-200 hover:underline"
                href={'/about'}
              >
                Read more here
              </Link>
            </Paragraph>

            <Paragraph size="large" className="text-lg mt-5">
              <span className="text-orange-200">My hobbies:</span> Playing the
              guitar, running, workout
            </Paragraph>
          </div>
        </div>

        <div className="bg-orange-200 rounded-xl">
          <Image src={Photo} alt="My photo" width={350} height={600} />
        </div>
      </Container>
    </section>
  )
}

import { Container, Paragraph, Title } from '@/shared'
import Image from 'next/image'
import Photo from '/public/img_02.png'
import Link from 'next/link'
import HTML from '/public/icons/html5.svg'
import CSS from '/public/icons/css3.svg'
import JS from '/public/icons/js.svg'
import ReactSVG from '/public/icons/react.svg'
import Redux from '/public/icons/redux.svg'
import { SiNextdotjs } from 'react-icons/si'
import ReactRouter from '/public/icons/react-router.svg'
import ReactHookForm from '/public/icons/react-hook-form.svg'
import FramerMotion from '/public/icons/framer-motion.svg'
import CSSModules from '/public/icons/css-modules.svg'
import Sass from '/public/icons/sass.svg'
import StyledComponents from '/public/icons/styled-components.png'
import MaterialUI from '/public/icons/material-ui.svg'
import Tailwind from '/public/icons/tailwind.svg'
import Bootstrap from '/public/icons/bootstrap.png'
import Figma from '/public/icons/figma.svg'
import Git from '/public/icons/git.svg'
import Gulp from '/public/icons/gulp.svg'
import Firebase from '/public/icons/firebase.svg'
import Mongo from '/public/icons/mongo.png'
import Postman from '/public/icons/postman.png'
import GraphQl from '/public/icons/graphql.svg'
import Node from '/public/icons/node-js.svg'
import Express from '/public/icons/express.png'
import TypeScript from '/public/icons/typescript.svg'

export const Stack = () => {
  return (
    <section className="stack py-16">
      <Container className="flex justify-center gap-16 text-slate-100">
        <div className="flex flex-col gap-5">
          <Title tag="h2" className="text-center ">
            <span className="text-orange-200">My technology stack:</span>
          </Title>
          <div className="flex gap-5 justify-center">
            <Link
              href={'https://www.w3schools.com/html/html_intro.asp'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={HTML} alt="HTML" width={72} height={72} />
              <span>HTML5</span>
            </Link>

            <Link
              href={'https://www.w3schools.com/css/default.asp'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={CSS} alt="CSS" width={72} height={72} />
              <span className="transition-colors duration-300 hover:text-orange-200">
                CSS3
              </span>
            </Link>

            <Link
              href={'https://www.w3schools.com/js/default.asp'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={JS} alt="JS" width={72} height={72} />
              <span className="transition-colors duration-300 hover:text-orange-200">
                JavaScript
              </span>
            </Link>
          </div>

          <div className="flex gap-5 justify-center ">
            <Link
              href={'https://react.dev/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={ReactSVG} alt="React" width={72} height={72} />
              <span className="transition-colors duration-300 hover:text-orange-200">
                React-js
              </span>
            </Link>

            <Link
              href={'https://redux-toolkit.js.org/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Redux} alt="Redux" width={72} height={72} />
              <span className="transition-colors duration-300 hover:text-orange-200">
                Redux
              </span>
            </Link>

            <Link
              href={'https://nextjs.org/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <SiNextdotjs className="w-16 h-16" fill="white" />
              <span className="transition-colors duration-300 hover:text-orange-200">
                Next-js
              </span>
            </Link>

            <Link
              href={'https://www.typescriptlang.org/docs/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={TypeScript} alt="TypeScript" width={72} height={72} />
              <span className="transition-colors duration-300 hover:text-orange-200">
                TypeScript
              </span>
            </Link>
          </div>

          <div className="flex gap-5 justify-center ">
            <Link
              href={'https://www.framer.com/motion/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image
                src={FramerMotion}
                alt="FramerMotion"
                width={64}
                height={64}
              />
              <span className="transition-colors duration-300 hover:text-orange-200">
                Framer-motion
              </span>
            </Link>

            <Link
              href={'https://reactrouter.com/en/main'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image
                src={ReactRouter}
                alt="ReactRouter"
                width={96}
                height={96}
              />
            </Link>

            <Link
              href={'https://www.react-hook-form.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image
                src={ReactHookForm}
                alt="ReactHookForm"
                width={64}
                height={64}
              />
              <span className="transition-colors duration-300 hover:text-orange-200">
                React-hook-form
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-orange-200 rounded-xl">
          <Image src={Photo} width={300} height={600} alt="My Photo" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-center">
            <Link
              href={'https://github.com/css-modules/css-modules'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image
                src={CSSModules}
                alt="CSS-Modules"
                width={72}
                height={72}
              />
            </Link>

            <Link
              href={'https://sass-lang.com/documentation/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Sass} alt="Sass" width={72} height={72} />
            </Link>

            <Link
              href={'https://styled-components.com/docs'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image
                src={StyledComponents}
                alt="StyledComponents"
                width={72}
                height={72}
              />
            </Link>
          </div>

          <div className="flex gap-5 justify-center">
            <Link
              href={'https://tailwindcss.com/docs/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Tailwind} alt="Tailwind" width={72} height={72} />
            </Link>

            <Link
              href={'https://getbootstrap.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Bootstrap} alt="Bootstrap" width={72} height={72} />
            </Link>

            <Link
              href={'https://mui.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={MaterialUI} alt="MaterialUI" width={72} height={72} />
            </Link>
          </div>

          <div className="flex gap-5 justify-center">
            <Link
              href={'https://git-scm.com/doc'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Git} alt="Git" width={72} height={72} />
            </Link>

            <Link
              href={'https://gulpjs.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Gulp} alt="Gulp" width={72} height={72} />
            </Link>

            <Link
              href={'https://www.figma.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Figma} alt="Figma" width={72} height={72} />
            </Link>
          </div>

          <div className="flex gap-5 justify-center">
            <Link
              href={'https://www.postman.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Postman} alt="Postman" width={72} height={72} />
            </Link>

            <Link
              href={'https://www.mongodb.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Mongo} alt="Mongo" width={72} height={72} />
            </Link>

            <Link
              href={'https://firebase.google.com/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Firebase} alt="Firebase" width={72} height={72} />
            </Link>
          </div>

          <div className="flex gap-5 justify-center">
            <Link
              href={'https://nodejs.org/en'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Node} alt="Node" width={72} height={72} />
            </Link>

            <Link
              href={'https://expressjs.com/ru/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={Express} alt="Express" width={94} height={72} />
            </Link>

            <Link
              href={'https://graphql.org/'}
              target="_blank"
              className="flex gap-3 flex-col items-center justify-center transition-colors duration-300 hover:text-orange-200"
            >
              <Image src={GraphQl} alt="GraphQl" width={72} height={72} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

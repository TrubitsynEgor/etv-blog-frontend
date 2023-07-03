import styles from './SnowBg.module.scss'
import HTML from '/public/icons/html5.svg'
import CSS from '/public/icons/css3.svg'
import JS from '/public/icons/js.svg'
import ReactSVG from '/public/icons/react.svg'
import Redux from '/public/icons/redux.svg'
import { SiNextdotjs } from 'react-icons/si'
import Sass from '/public/icons/sass.svg'
import Tailwind from '/public/icons/tailwind.svg'
import Git from '/public/icons/git.svg'
import Mongo from '/public/icons/mongo.png'
import Postman from '/public/icons/postman.png'
import GraphQl from '/public/icons/graphql.svg'
import Node from '/public/icons/node-js.svg'
import TypeScript from '/public/icons/typescript.svg'
import Image from 'next/image'

export const SnowBg = () => {
  return (
    <header className={styles.header}>
      <div className={styles.orbits}>
        <div className={styles.left}>
          <div className={styles.outer} data-orbit-rotate="right">
            <Image src={HTML} alt="HTML" width={40} height={40} />
            <Image src={CSS} alt="CSS" width={40} height={40} />
            <Image src={JS} alt="JS" width={40} height={40} />
          </div>
          <div className={styles.inner} data-orbit-rotate="left">
            <Image src={ReactSVG} alt="React" width={35} height={35} />
            <Image src={Redux} alt="Redux" width={35} height={35} />
            <SiNextdotjs className="w-12 h-12 fill-slate-100" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.outer} data-orbit-rotate="left">
            <Image src={Node} alt="Node" width={40} height={40} />
            <Image src={Mongo} alt="Mongo" width={40} height={40} />
            <Image src={GraphQl} alt="GraphQl" width={40} height={40} />
            <Image src={Postman} alt="Postman" width={40} height={40} />
          </div>
          <div className={styles.inner} data-orbit-rotate="right">
            <Image src={Git} alt="Git" width={35} height={35} />
            <Image src={TypeScript} alt="TypeScript" width={35} height={35} />
            <Image src={Sass} alt="Sass" width={35} height={35} />
            <Image src={Tailwind} alt="Tailwind" width={35} height={35} />
          </div>
        </div>
      </div>
      <div className={styles.content}></div>
    </header>
  )
}

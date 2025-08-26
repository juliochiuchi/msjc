import { FaReact, FaCss3Alt } from 'react-icons/fa'
import { FaCode } from "react-icons/fa6";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoGit,
} from 'react-icons/bi'
import { 
  SiNextdotjs,
  SiStyledcomponents,
  SiReactquery,
  SiExpo,
} from 'react-icons/si'
import { IoLogoHtml5 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { CardStack } from '../../components/card-stack'

const Home = () => {
  return (
    <div className="relative min-h-[100vh]">
      <Header />

      <div
        className="smPhone:containerMyspaceDeviceHand smLaptop:containerMyspace 
            mt-16 
            pb-[4rem]
            smPhone:text-center 
            smLaptop:text-left
            "
      >
        <div className="mt-16">
          <h1 className="text-[7rem]">Hey!</h1>
        </div>

        <div
          className="smPhone:pl-8
                smPhone:pr-8
                mdPhone:pl-0
                mdPhone:pr-0
                smLaptop:w-3/4
                "
        >
          <p
            className="text-2xl
                    smPhone:text-xl
                    "
          >
            Meu nome é Julio. Trabalho como desenvolvedor web desde 2015, tenho
            ampla experiência em front-end e meu trabalho principal é criar
            layouts incríveis de fácil acesso e intuitivos.
          </p>
        </div>

        <div
          className="mt-16
                smPhone:pl-4
                smPhone:pr-4
                mdPhone:pl-0
                mdPhone:pr-0
                "
        >
          <h2 className="text-2xl font-bold">
            Tecnologias e ferramentas que tenho usado
          </h2>
        </div>

        <div
          className="mt-7 flex flex-wrap items-stretch gap-7
                smPhone:justify-center
                smPhone:pl-8
                smPhone:pr-8
                mdPhone:pl-0
                mdPhone:pr-0
                smLaptop:justify-start
                "
        >
          <CardStack name="REACT" icon={FaReact} />
          <CardStack name="TYPESCRIPT" icon={BiLogoTypescript} />
          <CardStack name="TAILWIND" icon={BiLogoTailwindCss} />
          <CardStack name="NODE" icon={BiLogoNodejs} />
          <CardStack name="NEXT" icon={SiNextdotjs} />
          <CardStack name="REACT NATIVE" icon={FaReact} />
          <CardStack name="GIT" icon={BiLogoGit} />
          <CardStack name="STYLED COMPONENTS" icon={SiStyledcomponents} />
          <CardStack name="ZOD" icon={FaCode} />
          <CardStack name="TANSTACK ROUTER" icon={SiReactquery} />
          <CardStack name="TANSTACK QUERY" icon={SiReactquery} />
          <CardStack name="SHADCN/UI" icon={FaCode} />
          <CardStack name="EXPO" icon={SiExpo} />
          <CardStack name="HTML" icon={IoLogoHtml5} />
          <CardStack name="CSS" icon={FaCss3Alt} />
          <CardStack name="JAVASCRIPT" icon={RiJavascriptFill} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home

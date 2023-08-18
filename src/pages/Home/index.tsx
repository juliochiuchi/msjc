import { FaReact, FaCss3Alt, FaTwitterSquare } from 'react-icons/fa'
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoGit,
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import { IoLogoHtml5 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
  return (
    <div className="relative min-h-[100vh]">
      <header
        className="smPhone:containerMySpaceDeviceHand smLaptop:containerMyspace flex flex-wrap  
            items-center 
            pt-14 
            smPhone:flex-col 
            smPhone:justify-center 
            smPhone:gap-7 
            smLaptop:flex-row 
            smLaptop:justify-between
            "
      >
        <div>
          <h3 className="font-bold tracking-widest smPhone:text-xl mdPhone:text-2xl">
            Julio
            <span className="text-blue-violet-default mdPhone:text-[2rem]">
              {' { '}
            </span>
            Chiuchi
            <span className="text-blue-violet-default mdPhone:text-[2rem]">
              {' } '}
            </span>
          </h3>
        </div>

        <div
          className="flex items-center gap-3 text-2xl tracking-wider 
                smPhone:flex-col smPhone:justify-center
                smLaptop:flex-row
                "
        >
          <a href="#" className="text-blue-violet-default">
            about me
          </a>
          <a
            download
            href="/src/assets/juliochiuchi-cv.pdf"
            className="animate-pulse rounded-md border border-blue-violet-default p-3 text-lg transition-colors duration-700 ease-in-out hover:bg-blue-violet-default hover:text-white-ice smLaptop:ml-8"
          >
            download cv
          </a>
        </div>
      </header>

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
            ampla experiência em front-end e meu rabalho principal é criar
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
          className="mt-7 flex flex-wrap items-center gap-7
                smPhone:justify-center
                smPhone:pl-8
                smPhone:pr-8
                mdPhone:pl-0
                mdPhone:pr-0
                smLaptop:justify-start
                "
        >
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <FaReact className="h-10 w-10" />
            <span>REACT</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <BiLogoTypescript className="h-10 w-10" />
            <span>TYPESCRIPT</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <BiLogoTailwindCss className="h-10 w-10" />
            TAILWIND
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <BiLogoNodejs className="h-10 w-10" />
            <span>NODE</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <SiNextdotjs className="h-10 w-10" />
            <span>NEXT</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <FaReact className="h-10 w-10" />
            <span>REACT NATIVE</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <BiLogoGit className="h-10 w-10" />
            <span>GIT</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <IoLogoHtml5 className="h-10 w-10" />
            <span>HTML</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <FaCss3Alt className="h-10 w-10" />
            <span>CSS</span>
          </div>
          <div className="min-w-32 flex w-36 flex-col items-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
            <RiJavascriptFill className="h-10 w-10" />
            <span>JAVASCRIPT</span>
          </div>
        </div>
      </div>

      <footer
        className="smPhone:containerMyspaceDeviceHand smLaptop:containerMyspace bottom-0 flex items-center 
            gap-7 
            pb-[1rem] 
            smPhone:justify-center 
            smLaptop:absolute 
            smLaptop:w-full 
            smLaptop:justify-between
            "
      >
        <div>
          <span>{new Date().getFullYear()} © All rights reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juliochiuchi/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://twitter.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className="h-[1.1rem] w-[1.1rem]" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home

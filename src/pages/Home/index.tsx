import { FaReact, FaCss3Alt, FaTwitterSquare } from 'react-icons/fa'
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoGit,
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import { IoLogoHtml5 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="relative min-h-[100vh]">
      <header
        className="pt-14 flex items-center flex-wrap 
            smPhone:containerMySpaceDeviceHand 
            smPhone:flex-col 
            smPhone:justify-center 
            smPhone:gap-7 
            smLaptop:containerMyspace 
            smLaptop:flex-row 
            smLaptop:justify-between
            "
      >
        <div>
          <h3 className="smPhone:text-xl mdPhone:text-2xl font-bold tracking-widest">
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
          className="text-2xl flex items-center gap-3 tracking-wider 
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
            className="text-lg border rounded-md border-blue-violet-default p-3 hover:bg-blue-violet-default hover:text-white-ice transition-colors duration-700 ease-in-out animate-pulse smLaptop:ml-8"
          >
            download cv
          </a>
        </div>
      </header>

      <div
        className="mt-16 pb-[4rem] 
            smPhone:containerMyspaceDeviceHand 
            smPhone:text-center
            smLaptop:containerMyspace 
            smLaptop:text-left
            "
      >
        <div className="mt-16">
          <h1 className="text-[7rem]">Hey!</h1>
        </div>

        <div
          className="smLaptop:w-3/4
                smPhone:pl-8
                smPhone:pr-8
                mdPhone:pl-0
                mdPhone:pr-0
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
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <FaReact className="w-10 h-10" />
            <span>REACT</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <BiLogoTypescript className="w-10 h-10" />
            <span>TYPESCRIPT</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <BiLogoTailwindCss className="w-10 h-10" />
            TAILWIND
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <BiLogoNodejs className="w-10 h-10" />
            <span>NODE</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <SiNextdotjs className="w-10 h-10" />
            <span>NEXT</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <FaReact className="w-10 h-10" />
            <span>REACT NATIVE</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <BiLogoGit className="w-10 h-10" />
            <span>GIT</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <IoLogoHtml5 className="w-10 h-10" />
            <span>HTML</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <FaCss3Alt className="w-10 h-10" />
            <span>CSS</span>
          </div>
          <div className="p-5 border border-blue-violet-default rounded-md min-w-32 w-36 text-center text-sm flex flex-col gap-2 items-center">
            <RiJavascriptFill className="w-10 h-10" />
            <span>JAVASCRIPT</span>
          </div>
        </div>
      </div>

      <footer
        className="pb-[1rem] bottom-0 gap-7 flex items-center 
            smPhone:containerMyspaceDeviceHand 
            smPhone:justify-center 
            smLaptop:containerMyspace 
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
            <FaTwitterSquare className="w-[1.1rem] h-[1.1rem]" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home

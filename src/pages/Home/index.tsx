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
import { SiVite } from "react-icons/si";

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
        {/* Hero Section */}
        {/* <div className="mt-16">
          <h1 className="text-[7rem] smPhone:text-[5rem]">Hey!</h1>
        </div> */}

        {/* Profile Section */}
        <section className="smPhone:pl-8 smPhone:pr-8 mdPhone:pl-0 mdPhone:pr-0 mb-16">
          <div className="flex flex-col smLaptop:flex-row items-center smLaptop:items-start gap-8 smLaptop:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src="https://github.com/juliochiuchi.png" 
                alt="Frontend Software Engineer @MarlabsBrazil | Desenvolvedor | React JS | React Native | Javascript | Typescript | Tailwind CSS | Node JS"
                className="w-32 h-32 smPhone:w-28 smPhone:h-28 smLaptop:w-40 smLaptop:h-40 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-400/30 hover:shadow-blue-400/50 transition-all duration-300"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 smPhone:text-center smLaptop:text-left">
              {/* <h2 className="text-3xl smPhone:text-2xl font-bold mb-4 text-blue-400">Julio Chiuchi</h2> */}
              
              <div>
          <h3 className="text-3xl smPhone:text-2xl font-bold mb-4 tracking-widest mdPhone:text-2xl">
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

              <p className="text-lg smPhone:text-base text-gray-300 leading-relaxed mb-4">
                Frontend Software Engineer @MarlabsBrazil | ReactJS | TailwindCSS | Typescript | ZOD | TanStack Router | TanStack Query | Vite | NextJS | React Native | Javascript | NodeJS | GIT
              </p>
              <div className="flex flex-wrap gap-2 smPhone:justify-center smLaptop:justify-start">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">Frontend Engineer</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">React Specialist</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">Mobile Developer</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="smPhone:pl-8 smPhone:pr-8 mdPhone:pl-0 mdPhone:pr-0 smLaptop:w-4/5 mb-16">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-6 smPhone:text-3xl text-blue-400">🚀 Sobre mim</h2>
            <p className="text-xl smPhone:text-lg leading-relaxed mb-6">
              Front-end Sênior com DNA em React.js, paixão por UX e pegada de quem entrega.
            </p>
            <p className="text-lg smPhone:text-base leading-relaxed text-gray-300">
              Sou movido por código limpo, boas ideias e aquele clique perfeito entre design e funcionalidade. 
              Especialista em React.js com TypeScript e Tailwind, respiro componentes reutilizáveis, navegação fluida e experiências intuitivas.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="smPhone:pl-8 smPhone:pr-8 mdPhone:pl-0 mdPhone:pr-0 smLaptop:w-4/5 mb-16">
          <h2 className="text-3xl font-bold mb-6 smPhone:text-2xl text-green-400">💼 Experiência</h2>
          <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border-l-4 border-green-400">
            <p className="text-lg smPhone:text-base leading-relaxed text-gray-200 mb-4">
              Minha jornada inclui entregas para grandes nomes como <span className="text-blue-300 font-semibold">Bayer, Cargill, Coopercitrus, Argo, XMobots</span>, 
              além de liderar a transformação digital de sistemas públicos (prefeituras, câmaras e institutos).
            </p>
            <p className="text-base smPhone:text-sm text-gray-300">
              Migrei sistemas legados para soluções web modernas, como portais de transparência, holerites e aplicações na área da saúde.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-purple-400">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">🧠 Tech com inteligência</h3>
            <p className="text-base smPhone:text-sm leading-relaxed text-gray-300">
              Utilizo IA como aliada no desenvolvimento — seja acelerando refatorações, gerando testes, 
              explorando soluções ou melhorando minha produtividade no dia a dia.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="smPhone:pl-8 smPhone:pr-8 mdPhone:pl-0 mdPhone:pr-0 smLaptop:w-4/5 mb-16">
          <h2 className="text-3xl font-bold mb-6 smPhone:text-2xl text-yellow-400">👨‍💻 Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Frontend Principal</h3>
              <p className="text-gray-300 leading-relaxed">
                React + TypeScript + Tailwind + Zod + Vite + Tanstack Router + Tanstack Query + Next
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Mobile & Backend</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                React Native (sim, também curto criar apps!)
              </p>
              <p className="text-gray-300 leading-relaxed">
                Node.js, JavaScript puro, C#, GitHub
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Ambiente de Desenvolvimento</h3>
              <p className="text-gray-300 leading-relaxed">
                Linux/macOS (ambiente ideal para minha produtividade)
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="smPhone:pl-8 smPhone:pr-8 mdPhone:pl-0 mdPhone:pr-0 smLaptop:w-4/5 mb-16">
          <h2 className="text-3xl font-bold mb-6 smPhone:text-2xl text-indigo-400">🎓 Formação</h2>
          <div className="bg-gray-800/50 rounded-lg p-6 border-l-4 border-indigo-400">
            <p className="text-lg smPhone:text-base leading-relaxed text-gray-200 mb-4">
              Formado em <span className="text-indigo-300 font-semibold">Sistemas de Informação pela UNIFEV</span> e 
              graduado também nas trincheiras da <span className="text-purple-300 font-semibold">Rocketseat</span>.
            </p>
            <p className="text-base smPhone:text-sm text-gray-300">
              Mergulhei em tecnologias modernas, performance e experiência do usuário.
            </p>
          </div>
        </section>

        {/* Personal Values Section */}
        <section className="smPhone:pl-8 smPhone:pr-8 mdPhone:pl-0 mdPhone:pr-0 smLaptop:w-4/5 mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4 smPhone:text-xl text-cyan-300">✨ Meus Valores</h2>
            <p className="text-lg smPhone:text-base leading-relaxed text-gray-200 mb-4">
              Sou colaborativo, determinado e pró-ativo, gosto de trabalhar com times que compartilham visão, propósito e liderança inspiradora.
            </p>
            <p className="text-base smPhone:text-sm leading-relaxed text-gray-300">
              Se a sua empresa valoriza pessoas que constroem com responsabilidade, ousadia e inteligência, 
              estou pronto para fazer parte dessa jornada.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <div className="mt-16 smPhone:pl-4 smPhone:pr-4 mdPhone:pl-0 mdPhone:pr-0">
          <h2 className="text-3xl font-bold mb-8 smPhone:text-2xl text-orange-400">
            🛠️ Tecnologias e ferramentas que tenho usado
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
          <CardStack name="REACTJS" icon={FaReact} />
          <CardStack name="TYPESCRIPT" icon={BiLogoTypescript} />
          <CardStack name="TAILWINDCSS" icon={BiLogoTailwindCss} />
          <CardStack name="NODEJS" icon={BiLogoNodejs} />
          <CardStack name="VITE" icon={SiVite} />
          <CardStack name="NEXTJS" icon={SiNextdotjs} />
          <CardStack name="REACT NATIVE" icon={FaReact} />
          <CardStack name="GIT" icon={BiLogoGit} />
          <CardStack name="ZOD" icon={FaCode} />
          <CardStack name="TANSTACK ROUTER" icon={SiReactquery} />
          <CardStack name="TANSTACK QUERY" icon={SiReactquery} />
          <CardStack name="SHADCN/UI" icon={FaCode} />
          <CardStack name="STYLED COMPONENTS" icon={SiStyledcomponents} />
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

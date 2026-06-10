import { useState } from 'react'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoNodejs,
} from 'react-icons/bi'
import {
  SiExpo,
  SiNextdotjs,
  SiReactquery,
  SiStyledcomponents,
} from 'react-icons/si'
import { IoLogoHtml5 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiVite } from 'react-icons/si'

import portfolioPreview from '../../assets/psmsjc-home.png'
import ipimPreview from '../../assets/ipim-home.png'
import luminaPreview from '../../assets/lumina.png'
import tiktakPreview from '../../assets/tiktak.png'
import trackerPreview from '../../assets/tracker.png'
import votingPreview from '../../assets/ipim-voting.png'
import { CardStack } from '../../components/card-stack'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

const quickProjects = [
  {
    id: 'enterprise',
    category: 'Enterprise Frontend',
    title: 'Plataformas para operações críticas',
    summary:
      'Entregas para Bayer, Cargill, Coopercitrus, Argo e XMobots com foco em clareza, performance e confiança visual.',
    detail:
      'Interfaces preparadas para uso recorrente, estados bem tratados e experiências que ajudam o usuário a tomar decisões com menos fricção.',
    impact: 'UX clara para produtos com alta exigência operacional.',
    stack: ['React', 'TypeScript', 'Tailwind', 'TanStack Query'],
    bullets: [
      'Arquitetura de componentes reutilizáveis',
      'Fluxos com prioridade para performance percebida',
      'Consistência visual em cenários complexos',
    ],
    image: luminaPreview,
    badgeClass: 'from-sky-400/20 via-cyan-400/10 to-transparent',
    ringClass: 'border-sky-300/30',
  },
  {
    id: 'tiktak',
    category: 'Produtividade pessoal',
    title: 'TikTak: controle de batida e tasks do dia',
    summary:
      'Sistema de controle de batida de ponto com integração de tasks/Jira para registrar o que foi realizado no dia e facilitar o acompanhamento individual.',
    detail:
      'A proposta centraliza o histórico pessoal: permite consultar apenas um dia específico ou analisar a evolução em um range de datas, relembrando com clareza o que foi feito.',
    impact: 'Histórico diário simples para lembrar e comprovar entregas.',
    stack: ['React', 'TypeScript', 'Vite', 'Jira'],
    bullets: [
      'Registro de tasks do dia com referência do Jira',
      'Filtro por data única ou por período',
      'Controle individual e pessoal com leitura rápida',
    ],
    image: tiktakPreview,
    badgeClass: 'from-emerald-400/20 via-lime-300/10 to-transparent',
    ringClass: 'border-emerald-300/30',
  },
  {
    id: 'tracker',
    category: 'Finanças pessoais',
    title: 'Tracker: compras, entregas e gasto total',
    summary:
      'Plataforma para acompanhar compras realizadas pela pessoa, integrada a uma API, consultando status de entrega de cada item e quanto já foi gasto no total.',
    detail:
      'Organiza pedidos em uma visão única, com consulta por status e leitura clara do acumulado gasto, ajudando a manter previsibilidade de entregas e do orçamento.',
    impact: 'Mais controle sobre entregas e sobre o dinheiro investido em compras.',
    stack: ['React', 'TypeScript', 'API', 'TanStack Query'],
    bullets: [
      'Consulta de status de entrega por item',
      'Cálculo e exibição do valor total gasto',
      'Integração com API com dados atualizados',
    ],
    image: trackerPreview,
    badgeClass: 'from-violet-400/20 via-fuchsia-400/10 to-transparent',
    ringClass: 'border-violet-300/30',
  },
  {
    id: 'ipim',
    category: 'Institucional + Admin',
    title: 'IPIM: portal com gestão de programações',
    summary:
      'Site para uma instituição religiosa com área administrativa, cadastro de programações e organização de agenda da comunidade.',
    detail:
      'Uma experiência institucional com navegação leve para o público e um painel admin para manter a agenda atualizada, garantindo que as informações da comunidade fiquem sempre consistentes.',
    impact: 'Comunicação mais organizada e gestão mais simples para a equipe.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Admin UI'],
    bullets: [
      'Cadastro e manutenção de programações da comunidade',
      'Rotina administrativa centralizada e simples',
      'Estrutura pronta para evoluir com novos módulos',
    ],
    image: ipimPreview,
    badgeClass: 'from-rose-400/20 via-pink-400/10 to-transparent',
    ringClass: 'border-rose-300/30',
  },
  {
    id: 'voting',
    category: 'Votação + Governança',
    title: 'Voting: gestão de votação institucional',
    summary:
      'Plataforma desenvolvida para votação de presbíteros e/ou diáconos em uma instituição religiosa, com fluxos específicos para owner, staff e membro.',
    detail:
      'O membro é identificado pelo CPF para registrar seus votos, o staff pode lançar votos em papel quando necessário, e o owner configura toda a votação: rodadas, quantidade de votos por rodada, membros ativos e a gestão completa dos votos.',
    impact: 'Processo de votação mais seguro, organizado e auditável em cada rodada.',
    stack: ['React', 'TypeScript', 'Node.js', 'Admin UI'],
    bullets: [
      'Reconhecimento do membro por CPF para liberação do voto',
      'Regras por rodada que impedem votos duplicados',
      'Painel do owner para configurar rodadas, votos e membros ativos',
    ],
    image: votingPreview,
    badgeClass: 'from-indigo-400/20 via-blue-400/10 to-transparent',
    ringClass: 'border-indigo-300/30',
  },
  {
    id: 'portfolio',
    category: 'Portfolio',
    title: 'Presença digital com narrativa mais forte',
    summary:
      'Este portfólio foi repensado para apresentar credenciais, stack e projetos de forma mais atraente e fácil de explorar.',
    detail:
      'A proposta traz hierarquia mais elegante, superfícies translúcidas e uma vitrine com preview rápido para ajudar quem visita a entender valor em poucos segundos.',
    impact: 'Mais interesse visual sem perder sobriedade profissional.',
    stack: ['React', 'Tailwind', 'Vite', 'UI Motion'],
    bullets: [
      'Hero com CTA e prova de valor',
      'Showcase interativo com visualização rápida',
      'Linguagem visual moderna inspirada em produtos premium',
    ],
    image: portfolioPreview,
    badgeClass: 'from-amber-300/20 via-orange-300/10 to-transparent',
    ringClass: 'border-amber-200/30',
  },
]

const highlights = [
  {
    title: 'React com maturidade de produto',
    description:
      'Componentes reutilizáveis, navegação fluida e foco em uma experiência consistente.',
  },
  {
    title: 'UX que simplifica complexidade',
    description:
      'Decisões de interface pensadas para reduzir fricção e aumentar entendimento.',
  },
  {
    title: 'Entrega em web e mobile',
    description:
      'Do browser ao React Native, com repertório para produtos em múltiplas frentes.',
  },
]

const capabilities = [
  'ReactJS',
  'Typescript',
  'TailwindCSS',
  'NodeJS',
  'Vite',
  'NextJS',
  'React Native',
  'Git',
  'Zod',
  'TanStack Router',
  'TanStack Query',
  'Shadcn/UI',
  'Styled Components',
  'Expo',
  'HTML',
  'CSS',
  'JavaScript',
]

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(quickProjects[0].id)

  const selectedProject =
    quickProjects.find((project) => project.id === selectedProjectId) ??
    quickProjects[0]

  return (
    <div id="topo" className="relative min-h-screen">
      <Header />

      <main className="container-shell pb-16 pt-10 smLaptop:pb-24">
        <section className="grid gap-8 pb-10 pt-6 smLaptop:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] smLaptop:items-center smLaptop:pb-16">
          <div>
            <span className="eyebrow mb-6">
              Senior Front-end Engineer
            </span>
            <h1 className="section-heading max-w-4xl text-5xl font-semibold leading-[0.95] text-slate-50 smPhone:text-[3.25rem] mdPhone:text-6xl smLaptop:text-[5.2rem]">
              Interfaces modernas que deixam produtos mais claros, desejáveis e fáceis de usar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 smPhone:text-base smPhone:leading-7">
              Sou Julio Chiuchi, front-end sênior com DNA em React.js, paixão por
              UX e foco em entregar experiências que unem percepção premium,
              performance e funcionalidade real.
            </p>

            <div className="mt-8 flex flex-col gap-3 smPhone:items-stretch mdPhone:flex-row mdPhone:items-center">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver projetos
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Conhecer meu perfil
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2">
                React Specialist
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2">
                UX com foco em clareza
              </span>
              <span className="rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2">
                Web e Mobile
              </span>
            </div>
          </div>

          <div className="glass-panel-strong relative overflow-hidden rounded-[32px] p-6 smPhone:p-5 smLaptop:p-7">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-300/14 to-transparent" />
            <div className="relative flex items-start gap-4">
              <img
                src="https://github.com/juliochiuchi.png"
                alt="Foto de perfil de Julio Chiuchi"
                className="h-24 w-24 rounded-[28px] border border-white/10 object-cover shadow-2xl shadow-sky-950/30 smPhone:h-20 smPhone:w-20"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  Perfil
                </p>
                <h2 className="section-heading mt-2 text-3xl font-semibold text-slate-50 smPhone:text-2xl">
                  Julio <span className="text-gradient">Chiuchi</span>
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  ReactJS, TypeScript, TailwindCSS, Zod, TanStack Router,
                  TanStack Query, Vite, NextJS, React Native e NodeJS.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-sm font-semibold text-slate-100">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="grid gap-5 py-10 smLaptop:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]"
        >
          <div className="glass-panel rounded-[32px] p-7 smPhone:p-5 smLaptop:p-8">
            <span className="eyebrow mb-5">Sobre mim</span>
            <h2 className="section-heading max-w-2xl text-4xl font-semibold text-slate-50 smPhone:text-3xl">
              Experiência sênior com repertório técnico e sensibilidade de produto.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Minha jornada combina código limpo, boas decisões de interface e
              responsabilidade de entrega. Já atuei em produtos para grandes
              empresas e na modernização de sistemas públicos, sempre com foco em
              navegação fluida, clareza de uso e confiança visual.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                Experiência
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Entregas para Bayer, Cargill, Coopercitrus, Argo e XMobots, além
                da transformação digital de sistemas de prefeituras, câmaras e
                institutos.
              </p>
            </div>

            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                Formação
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Sistemas de Informação pela UNIFEV e formação prática nas
                trincheiras da Rocketseat, com foco em tecnologias modernas,
                performance e experiência do usuário.
              </p>
            </div>

            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
                Modo de trabalho
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Colaborativo, proativo e orientado a contexto. Uso IA como
                aliada para acelerar refatorações, explorar soluções e melhorar
                a qualidade da entrega.
              </p>
            </div>
          </div>
        </section>

        <section id="projetos" className="py-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow mb-5">Projetos e cases</span>
            <h2 className="section-heading text-4xl font-semibold text-slate-50 smPhone:text-3xl">
              Uma leitura rápida do que eu construo.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Selecione um case para ver contexto, impacto, stack e uma
              visualização rápida do tipo de experiência que costumo entregar.
            </p>
          </div>

          <div className="grid gap-6 smLaptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="grid gap-4">
              {quickProjects.map((project) => {
                const isActive = project.id === selectedProject.id

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    aria-pressed={isActive}
                    className={`glass-panel rounded-[28px] p-5 text-left transition duration-300 hover:-translate-y-1 ${isActive ? 'border-white/20 bg-white/[0.08]' : ''
                      }`}
                  >
                    <div
                      className={`mb-4 h-24 rounded-[20px] border ${project.ringClass} bg-gradient-to-br ${project.badgeClass}`}
                    >
                      <div className="flex h-full items-end p-4">
                        <span className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {project.summary}
                        </p>
                      </div>
                      <span className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                        Preview
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="glass-panel-strong overflow-hidden rounded-[32px] p-5 smPhone:p-4 smLaptop:sticky smLaptop:top-32 smLaptop:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Visão rápida
                  </p>
                  <h3 className="section-heading mt-2 text-3xl font-semibold text-slate-50 smPhone:text-2xl">
                    {selectedProject.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {selectedProject.category}
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/50">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={`Preview do projeto ${selectedProject.title}`}
                    className="h-[280px] w-full object-cover object-top"
                  />
                ) : (
                  <div className="h-[280px] w-full bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.32),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.88))] p-5">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Preview UI
                      </span>
                      <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
                        Live context
                      </span>
                    </div>
                    <div className="mt-4 grid h-[200px] grid-cols-[1.1fr_0.9fr] gap-4">
                      <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                        <div className="h-3 w-24 rounded-full bg-slate-600" />
                        <div className="mt-4 space-y-3">
                          <div className="h-10 rounded-2xl bg-sky-400/15" />
                          <div className="h-10 rounded-2xl bg-white/5" />
                          <div className="h-10 rounded-2xl bg-white/5" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex-1 rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                          <div className="h-3 w-16 rounded-full bg-slate-600" />
                          <div className="mt-5 h-20 rounded-[20px] bg-gradient-to-r from-sky-400/20 to-violet-400/20" />
                        </div>
                        <div className="flex-1 rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                          <div className="h-3 w-20 rounded-full bg-slate-600" />
                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="h-16 rounded-2xl bg-white/5" />
                            <div className="h-16 rounded-2xl bg-white/5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-300">
                {selectedProject.detail}
              </p>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  Impacto percebido
                </p>
                <p className="mt-2 text-base font-medium text-slate-100">
                  {selectedProject.impact}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {selectedProject.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="py-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow mb-5">Stack principal</span>
            <h2 className="section-heading text-4xl font-semibold text-slate-50 smPhone:text-3xl">
              Tecnologias e ferramentas que sustentam essa entrega.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Um setup moderno para construir interfaces consistentes, escaláveis
              e agradáveis de usar.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mdPhone:grid-cols-3 smLaptop:grid-cols-5">
            <CardStack name={capabilities[0]} icon={FaReact} />
            <CardStack name={capabilities[1]} icon={BiLogoTypescript} />
            <CardStack name={capabilities[2]} icon={BiLogoTailwindCss} />
            <CardStack name={capabilities[3]} icon={BiLogoNodejs} />
            <CardStack name={capabilities[4]} icon={SiVite} />
            <CardStack name={capabilities[5]} icon={SiNextdotjs} />
            <CardStack name={capabilities[6]} icon={FaReact} />
            <CardStack name={capabilities[7]} icon={BiLogoGit} />
            <CardStack name={capabilities[8]} icon={FaCode} />
            <CardStack name={capabilities[9]} icon={SiReactquery} />
            <CardStack name={capabilities[10]} icon={SiReactquery} />
            <CardStack name={capabilities[11]} icon={FaCode} />
            <CardStack name={capabilities[12]} icon={SiStyledcomponents} />
            <CardStack name={capabilities[13]} icon={SiExpo} />
            <CardStack name={capabilities[14]} icon={IoLogoHtml5} />
            <CardStack name={capabilities[15]} icon={FaCss3Alt} />
            <CardStack name={capabilities[16]} icon={RiJavascriptFill} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home

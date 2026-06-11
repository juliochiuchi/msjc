import { useEffect, useMemo, useRef, useState } from 'react'
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
import {
  VscChevronDown,
  VscDebugAlt,
  VscExtensions,
  VscFile,
  VscFiles,
  VscSearch,
  VscSourceControl,
} from 'react-icons/vsc'

import portfolioPreview from '../../assets/psmsjc-home.png'
import ipimPreview from '../../assets/ipim-home.png'
import luminaPreview from '../../assets/lumina.png'
import tiktakPreview from '../../assets/tiktak.png'
import trackerPreview from '../../assets/tracker.png'
import votingPreview from '../../assets/ipim-voting.png'
import { CardStack } from '../../components/card-stack'
import { Footer } from '../../components/footer'

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

const ideSections = [
  { id: 'topo', label: 'Início', fileName: 'topo.tsx' },
  { id: 'sobre', label: 'Sobre', fileName: 'sobre.tsx' },
  { id: 'projetos', label: 'Projetos', fileName: 'projetos.tsx' },
  { id: 'stack', label: 'Stack', fileName: 'stack.tsx' },
  { id: 'contato', label: 'Contato', fileName: 'contato.tsx' },
] as const

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(quickProjects[0].id)
  const [isExplorerOpen, setIsExplorerOpen] = useState(true)
  const [activeSectionId, setActiveSectionId] =
    useState<(typeof ideSections)[number]['id']>('topo')

  const editorScrollRef = useRef<HTMLDivElement | null>(null)

  const selectedProject =
    quickProjects.find((project) => project.id === selectedProjectId) ??
    quickProjects[0]

  const activeSection = useMemo(
    () => ideSections.find((section) => section.id === activeSectionId) ?? ideSections[0],
    [activeSectionId]
  )

  const scrollToSection = (sectionId: (typeof ideSections)[number]['id']) => {
    const container = editorScrollRef.current

    if (!container) {
      return
    }

    setActiveSectionId(sectionId)

    if (sectionId === 'topo') {
      container.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = container.querySelector<HTMLElement>(`#${sectionId}`)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const root = editorScrollRef.current

    if (!root) {
      return
    }

    const candidates = Array.from(
      root.querySelectorAll<HTMLElement>('[data-ide-section="true"]')
    )

    if (!candidates.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const rootTop = root.getBoundingClientRect().top
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.getAttribute('id'),
            distance: Math.abs(entry.boundingClientRect.top - rootTop - 12),
          }))
          .filter((item) => Boolean(item.id))
          .sort((a, b) => a.distance - b.distance)

        const nextId = visible[0]?.id

        if (!nextId) {
          return
        }

        setActiveSectionId((current) => (current === nextId ? current : (nextId as any)))
      },
      {
        root,
        threshold: 0,
        rootMargin: '0px 0px -78% 0px',
      }
    )

    candidates.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative flex h-screen flex-col gap-4 overflow-hidden px-6 py-7 smLaptop:px-12 smLaptop:py-10">
      <div className="mx-auto flex w-full max-w-[1480px] flex-wrap items-center justify-center gap-3 text-center text-xs font-semibold tracking-[0.18em] text-[rgba(222,224,239,0.7)]">
        <div className="rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-4 py-2">
          9+ anos de experiência
        </div>
        <div className="rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-4 py-2">
          Impacto em Bayer, Cargill, Coopercitrus, Argo, XMobots, Órgãos públicos entre outros
        </div>
      </div>
      <div className="ide-window mx-auto flex w-full max-w-[1480px] flex-1 flex-col overflow-hidden rounded-[22px] min-h-0">
        <div className="ide-titlebar flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" />
          </div>

          <div className="flex min-w-0 items-center gap-2">
            <span className="truncate text-xs font-semibold tracking-[0.22em] text-[rgba(222,224,239,0.72)]">
              &gt;_ ~/julio-chiuchi
            </span>
          </div>

          <div className="hidden w-[88px] smLaptop:block" />
        </div>

        <div className="flex min-h-0 flex-1">
          <div className="ide-activitybar flex flex-col items-center gap-2 py-3">
            <button
              type="button"
              onClick={() => setIsExplorerOpen((current) => !current)}
              aria-pressed={isExplorerOpen}
              className={`relative flex h-10 w-10 items-center justify-center rounded-[14px] text-xl transition ${isExplorerOpen ? 'bg-white/10 text-[var(--sp-base06)]' : 'text-[rgba(222,224,239,0.65)] hover:bg-white/5 hover:text-[rgba(222,224,239,0.8)]'
                }`}
            >
              <VscFiles />
              {isExplorerOpen ? (
                <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-[var(--sp-red)]" />
              ) : null}
            </button>

            <div className="mt-1 flex flex-col items-center gap-2 text-xl text-[rgba(222,224,239,0.46)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px]">
                <VscSearch />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px]">
                <VscSourceControl />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px]">
                <VscDebugAlt />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px]">
                <VscExtensions />
              </div>
            </div>
          </div>

          {isExplorerOpen ? (
            <aside className="ide-sidebar hidden min-w-0 flex-col smLaptop:flex">
              <div className="flex h-[56px] items-center justify-between border-b border-[rgba(222,224,239,0.12)] px-4">
                <p className="text-xs font-bold tracking-[0.22em] text-[rgba(222,224,239,0.72)]">
                  EXPLORER
                </p>
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[rgba(141,143,158,0.75)]" />
              </div>

              <div className="px-3 py-3">
                <div className="flex items-center gap-2 rounded-xl px-2 py-2 text-xs font-semibold tracking-[0.16em] text-[rgba(222,224,239,0.72)]">
                  <VscChevronDown className="text-sm text-[rgba(222,224,239,0.62)]" />
                  <span className="uppercase">portfolio</span>
                </div>

                <nav className="mt-2 flex flex-col gap-1">
                  {ideSections.map((section) => {
                    const isActive = section.id === activeSectionId

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${isActive ? 'bg-white/10 text-[var(--sp-base06)]' : 'text-[rgba(222,224,239,0.66)] hover:bg-white/5 hover:text-[rgba(222,224,239,0.86)]'
                          }`}
                      >
                        <VscFile className="text-[14px] text-[rgba(160,182,232,0.85)]" />
                        <span className="truncate font-medium">{section.fileName}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>
          ) : null}

          <div className="ide-editor flex min-w-0 flex-1 flex-col">
            <div className="ide-tabbar flex items-center gap-2 px-3">
              <div className="flex min-w-0 items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm text-[rgba(222,224,239,0.88)]">
                <VscFile className="text-[14px] text-[rgba(214,180,180,0.92)]" />
                <span className="truncate font-medium">{activeSection.fileName}</span>
                <span className="ml-3 h-2 w-2 rounded-full bg-[var(--sp-red)] opacity-80" />
              </div>
              <a
                href="/cv/cv-julio-senior-frontend-react.pdf"
                download
                className="ml-auto hidden items-center justify-center rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.22em] text-[rgba(222,224,239,0.9)] transition hover:-translate-y-0.5 hover:border-[rgba(209,145,143,0.45)] hover:bg-white/10 smLaptop:inline-flex"
              >
                DOWNLOAD CV
              </a>
            </div>

            <div ref={editorScrollRef} className="ide-scroll min-h-0 flex-1 overflow-y-auto">
              <div className="mx-auto w-full max-w-[1260px] px-7 py-10 smLaptop:px-14 smLaptop:py-14">
                <section
                  id="topo"
                  data-ide-section="true"
                  className="mb-16 mt-16 grid gap-10 smLaptop:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] smLaptop:items-start"
                >
                  <div>
                    <span className="eyebrow mb-6">Senior Front-end Engineer</span>
                    <h1 className="section-heading max-w-4xl text-[clamp(2.7rem,4.8vw,5.25rem)] font-semibold leading-[0.92] text-[var(--sp-base06)]">
                      Interfaces modernas com clareza, estética forte e resultado real.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-[rgba(222,224,239,0.76)] smPhone:text-base smPhone:leading-7">
                      Sou Julio Chiuchi, front-end sênior com DNA em React.js, paixão por UX e foco
                      em transformar requisitos complexos em produtos desejáveis, performáticos e
                      fáceis de usar.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 smPhone:items-stretch mdPhone:flex-row mdPhone:items-center">
                      <button
                        type="button"
                        onClick={() => scrollToSection('projetos')}
                        className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--sp-red),var(--sp-yellow),var(--sp-blue))] px-7 py-3.5 text-sm font-bold text-[rgba(32,34,49,0.95)] shadow-lg shadow-[rgba(21,23,38,0.45)] transition hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        Ver projetos
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollToSection('sobre')}
                        className="inline-flex items-center justify-center rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-7 py-3.5 text-sm font-semibold text-[rgba(222,224,239,0.9)] transition hover:border-[rgba(222,224,239,0.22)] hover:bg-white/10"
                      >
                        Conhecer meu perfil
                      </button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3 text-sm text-[rgba(222,224,239,0.74)]">
                      <span className="rounded-full border border-[rgba(160,182,232,0.22)] bg-[rgba(160,182,232,0.08)] px-4 py-2">
                        React Specialist
                      </span>
                      <span className="rounded-full border border-[rgba(112,155,189,0.2)] bg-[rgba(112,155,189,0.08)] px-4 py-2">
                        UX com foco em clareza
                      </span>
                      <span className="rounded-full border border-[rgba(163,146,220,0.22)] bg-[rgba(163,146,220,0.08)] px-4 py-2">
                        Web e Mobile
                      </span>
                    </div>
                  </div>

                  <div className="glass-panel-strong relative overflow-hidden rounded-[32px] p-6 smPhone:p-5 smLaptop:p-7">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(163,146,220,0.18)] to-transparent" />
                    <div className="relative flex items-start gap-4">
                      <img
                        src="https://github.com/juliochiuchi.png"
                        alt="Foto de perfil de Julio Chiuchi"
                        className="h-24 w-24 rounded-[28px] border border-[rgba(222,224,239,0.12)] object-cover shadow-2xl shadow-[rgba(21,23,38,0.55)] smPhone:h-20 smPhone:w-20"
                      />
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[rgba(141,143,158,0.9)]">
                          Perfil
                        </p>
                        <h2 className="section-heading mt-2 text-3xl font-semibold text-[var(--sp-base06)] smPhone:text-2xl">
                          Julio <span className="text-gradient">Chiuchi</span>
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[rgba(222,224,239,0.74)]">
                          ReactJS, TypeScript, TailwindCSS, TanStack, Vite, NextJS, React Native e
                          NodeJS.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3">
                      {highlights.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] p-4"
                        >
                          <p className="text-sm font-semibold text-[rgba(222,224,239,0.94)]">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section
                  id="sobre"
                  data-ide-section="true"
                  className="grid gap-5 py-10 smLaptop:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]"
                >
                  <div className="glass-panel rounded-[32px] p-7 smPhone:p-5 smLaptop:p-8">
                    <span className="eyebrow mb-5">Sobre mim</span>
                    <h2 className="section-heading max-w-2xl text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
                      Experiência sênior com repertório técnico e sensibilidade de produto.
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      Minha jornada combina código limpo, boas decisões de interface e responsabilidade
                      de entrega. Já atuei em produtos para grandes empresas e na modernização de
                      sistemas públicos, sempre com foco em navegação fluida, clareza de uso e confiança
                      visual.
                    </p>
                  </div>

                  <div className="grid gap-5">
                    <div className="glass-panel rounded-[28px] p-6">
                      <p className="text-sm uppercase tracking-[0.2em] text-[rgba(112,155,189,0.9)]">
                        Experiência
                      </p>
                      <p className="mt-3 text-base leading-7 text-[rgba(222,224,239,0.74)]">
                        Entregas para Bayer, Cargill, Coopercitrus, Argo e XMobots, além da
                        transformação digital de sistemas públicos.
                      </p>
                    </div>

                    <div className="glass-panel rounded-[28px] p-6">
                      <p className="text-sm uppercase tracking-[0.2em] text-[rgba(160,182,232,0.9)]">
                        Formação
                      </p>
                      <p className="mt-3 text-base leading-7 text-[rgba(222,224,239,0.74)]">
                        Sistemas de Informação pela UNIFEV e formação prática contínua com foco em
                        stack moderna, performance e experiência do usuário.
                      </p>
                    </div>

                    <div className="glass-panel rounded-[28px] p-6">
                      <p className="text-sm uppercase tracking-[0.2em] text-[rgba(163,146,220,0.9)]">
                        Modo de trabalho
                      </p>
                      <p className="mt-3 text-base leading-7 text-[rgba(222,224,239,0.74)]">
                        Colaborativo, proativo e orientado a contexto, com IA como aliada para acelerar
                        qualidade, análise e refatoração.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="projetos" data-ide-section="true" className="py-10">
                  <div className="mb-8 max-w-3xl">
                    <span className="eyebrow mb-5">Projetos e cases</span>
                    <h2 className="section-heading text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
                      Uma leitura rápida do que eu construo.
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      Selecione um case para ver contexto, impacto, stack e uma visualização rápida do
                      tipo de experiência que costumo entregar.
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
                            className={`glass-panel rounded-[28px] p-5 text-left transition duration-300 hover:-translate-y-1 ${isActive ? 'border-[rgba(222,224,239,0.22)] bg-white/[0.08]' : ''
                              }`}
                          >
                            <div
                              className={`mb-4 h-24 rounded-[20px] border ${project.ringClass} bg-gradient-to-br ${project.badgeClass}`}
                            >
                              <div className="flex h-full items-end p-4">
                                <span className="rounded-full border border-[rgba(222,224,239,0.14)] bg-[rgba(21,23,38,0.32)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(222,224,239,0.86)]">
                                  {project.category}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-semibold text-[rgba(222,224,239,0.96)]">
                                  {project.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                                  {project.summary}
                                </p>
                              </div>
                              <span className="mt-1 text-xs uppercase tracking-[0.24em] text-[rgba(141,143,158,0.7)]">
                                Preview
                              </span>
                            </div>
                          </button>
                        )
                      })}
                    </div>

                    <div className="glass-panel-strong overflow-hidden rounded-[32px] p-5 smPhone:p-4 smLaptop:sticky smLaptop:top-6 smLaptop:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-[rgba(141,143,158,0.9)]">
                            Visão rápida
                          </p>
                          <h3 className="section-heading mt-2 text-3xl font-semibold text-[var(--sp-base06)] smPhone:text-2xl">
                            {selectedProject.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[rgba(222,224,239,0.78)]">
                          {selectedProject.category}
                        </span>
                      </div>

                      <div className="mt-6 overflow-hidden rounded-[28px] border border-[rgba(222,224,239,0.12)] bg-[rgba(21,23,38,0.35)]">
                        {selectedProject.image ? (
                          <img
                            src={selectedProject.image}
                            alt={`Preview do projeto ${selectedProject.title}`}
                            className="h-[280px] w-full object-cover object-top"
                          />
                        ) : (
                          <div className="h-[280px] w-full bg-[radial-gradient(circle_at_top_left,rgba(160,182,232,0.22),transparent_28%),linear-gradient(180deg,rgba(39,41,56,0.96),rgba(28,30,45,0.88))] p-5">
                            <div className="flex items-center justify-between rounded-2xl border border-[rgba(222,224,239,0.12)] bg-white/[0.03] px-4 py-3">
                              <span className="text-xs uppercase tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
                                Preview UI
                              </span>
                              <span className="rounded-full bg-[rgba(112,155,189,0.2)] px-3 py-1 text-xs text-[rgba(222,224,239,0.9)]">
                                Live context
                              </span>
                            </div>
                            <div className="mt-4 grid h-[200px] grid-cols-[1.1fr_0.9fr] gap-4">
                              <div className="rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] p-4">
                                <div className="h-3 w-24 rounded-full bg-[rgba(141,143,158,0.55)]" />
                                <div className="mt-4 space-y-3">
                                  <div className="h-10 rounded-2xl bg-[rgba(160,182,232,0.14)]" />
                                  <div className="h-10 rounded-2xl bg-white/5" />
                                  <div className="h-10 rounded-2xl bg-white/5" />
                                </div>
                              </div>
                              <div className="flex flex-col gap-4">
                                <div className="flex-1 rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-gradient-to-br from-[rgba(28,30,45,0.85)] to-[rgba(32,34,49,0.9)] p-4">
                                  <div className="h-3 w-16 rounded-full bg-[rgba(141,143,158,0.55)]" />
                                  <div className="mt-5 h-20 rounded-[20px] bg-gradient-to-r from-[rgba(209,145,143,0.2)] to-[rgba(163,146,220,0.2)]" />
                                </div>
                                <div className="flex-1 rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] p-4">
                                  <div className="h-3 w-20 rounded-full bg-[rgba(141,143,158,0.55)]" />
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

                      <p className="mt-6 text-base leading-8 text-[rgba(222,224,239,0.76)]">
                        {selectedProject.detail}
                      </p>

                      <div className="mt-6 rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] p-5">
                        <p className="text-sm uppercase tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
                          Impacto percebido
                        </p>
                        <p className="mt-2 text-base font-medium text-[rgba(222,224,239,0.95)]">
                          {selectedProject.impact}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {selectedProject.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 px-3 py-2 text-sm text-[rgba(222,224,239,0.74)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-3">
                        {selectedProject.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="rounded-[20px] border border-[rgba(222,224,239,0.1)] bg-white/[0.03] px-4 py-3 text-sm leading-6 text-[rgba(222,224,239,0.74)]"
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section id="stack" data-ide-section="true" className="py-10">
                  <div className="mb-8 max-w-3xl">
                    <span className="eyebrow mb-5">Stack principal</span>
                    <h2 className="section-heading text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
                      Tecnologias e ferramentas que sustentam essa entrega.
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      Um setup moderno para construir interfaces consistentes, escaláveis e agradáveis de
                      usar.
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

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

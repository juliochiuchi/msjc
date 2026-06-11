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
      'Interfaces preparadas para uso recorrente, estados bem tratados e experiências que ajudam o usuário a tomar decisões com menos fricção.',
    detail:
      'Entregas para Bayer, Cargill, Coopercitrus, Argo e XMobots com foco em clareza, performance e confiança visual.',
    impact: 'UX clara para produtos com alta exigência operacional.',
    stack: ['React', 'TypeScript', 'Tailwind', 'TanStack Query'],
    bullets: [
      'Arquitetura de componentes reutilizáveis',
      'Fluxos com prioridade para performance percebida',
      'Consistência visual em cenários complexos.',
    ],
    problem:
      'Operações críticas precisam de leitura rápida, estados previsíveis e consistência visual para reduzir fricção em decisões diárias.',
    solution:
      'Estruturei uma base de componentes reutilizáveis e fluxos consistentes, com foco em performance percebida e UX clara em cenários complexos.',
    image: luminaPreview,
    badgeClass: 'from-sky-400/20 via-cyan-400/10 to-transparent',
    ringClass: 'border-sky-300/30',
  },
  {
    id: 'tiktak',
    category: 'Produto próprio',
    title: 'TikTak: controle de batida e tasks do dia',
    summary:
      'Sistema de controle de batida de ponto com integração de tasks/Jira para registrar o que foi realizado no dia e facilitar o acompanhamento individual.',
    detail:
      'A proposta centraliza o histórico pessoal: permite consultar apenas um dia específico ou analisar a evolução em um range de datas, relembrando com clareza o que foi feito.',
    impact: 'Histórico diário simples para lembrar e comprovar entregas.',
    stack: ['React', 'TypeScript', 'Vite', 'Jira'],
    bullets: ['Registro de tasks do dia', 'Filtro por data e período', 'Histórico individual com leitura rápida'],
    problem:
      'Acompanhamento diario espalhado em diferentes fontes dificultava lembrar, organizar e comprovar as entregas feitas ao longo da semana.',
    solution:
      'Criei um painel unico para registrar horas e tasks com referencia do Jira, incluindo consulta por dia ou por intervalo de datas.',
    image: tiktakPreview,
    badgeClass: 'from-emerald-400/20 via-lime-300/10 to-transparent',
    ringClass: 'border-emerald-300/30',
  },
  {
    id: 'tracker',
    category: 'Produto próprio',
    title: 'Tracker: compras, entregas e gasto total',
    summary:
      'Plataforma para acompanhar compras realizadas pela pessoa, integrada a uma API, consultando status de entrega de cada item e quanto já foi gasto no total.',
    detail:
      'Organiza pedidos em uma visão única, com consulta por status e leitura clara do acumulado gasto, ajudando a manter previsibilidade de entregas e do orçamento.',
    impact: 'Mais controle sobre entregas e sobre o dinheiro investido em compras.',
    stack: ['React', 'TypeScript', 'API', 'TanStack Query'],
    bullets: ['Consulta por status de entrega', 'Calculo do valor total gasto', 'Dados atualizados via API'],
    problem:
      'Compras e entregas ficavam descentralizadas, tornando difícil saber o status de cada item e o total realmente investido.',
    solution:
      'Desenvolvi uma plataforma com consulta por status, leitura do acumulado financeiro e integração com API para manter as informações atualizadas.',
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
    bullets: ['Cadastro de programações', 'Painel administrativo simples', 'Estrutura pronta para evolução'],
    problem:
      'A comunicação institucional precisava de um ambiente confiável para exibir agenda e centralizar a manutenção do conteúdo pela equipe.',
    solution:
      'Criei um portal com área administrativa para cadastro e organização das programações, mantendo a experiência pública clara e leve.',
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
    bullets: ['Identificação por CPF', 'Regras por rodada', 'Painel de configuração completa'],
    problem:
      'O processo de votação exigia controle mais confiável, regras de rodada e rastreabilidade para diferentes perfis de usuário.',
    solution:
      'Implementei fluxos para owner, staff e membro com identificação por CPF, controle de rodadas e gestão centralizada de votos.',
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
    bullets: ['Hero com CTA', 'Showcase interativo', 'Linguagem visual premium'],
    problem:
      'O portfolio anterior nao evidenciava com rapidez o valor entregue, a stack e a variedade de contextos atendidos.',
    solution:
      'Reestruturei a narrativa visual com hierarquia forte, leitura guiada e vitrine de projetos integrada a uma experiência mais memorável.',
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
  { id: 'topo', label: 'Início', fileName: 'overview.tsx' },
  { id: 'sobre', label: 'Sobre', fileName: 'sobre-julio.tsx' },
  { id: 'projetos', label: 'Projetos', fileName: 'sistemas-em-producao.tsx' },
  { id: 'stack', label: 'Stack', fileName: 'stack-principal.tsx' },
  { id: 'contato', label: 'Contato', fileName: 'contato.tsx' },
] as const

const Home = () => {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true)
  const [activeSectionId, setActiveSectionId] =
    useState<(typeof ideSections)[number]['id']>('topo')

  const editorScrollRef = useRef<HTMLDivElement | null>(null)

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
              <div className="mx-auto w-full max-w-[1260px] px-7 pb-6 pt-10 smLaptop:px-14 smLaptop:pb-8 smLaptop:pt-14">
                <section
                  className="mb-10 flex flex-wrap items-center justify-center gap-3 text-center text-[11px] font-semibold tracking-[0.18em] text-[rgba(222,224,239,0.7)]"
                >
                  <div className="rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-4 py-2">
                    9+ anos de experiência
                  </div>
                  <div className="rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-4 py-2">
                    Bayer, Cargill, Coopercitrus, Argo, XMobots e órgãos públicos
                  </div>
                </section>

                <section
                  id="topo"
                  data-ide-section="true"
                  className="mb-14 grid gap-6 border-b border-[rgba(222,224,239,0.08)] pb-12 smLaptop:grid-cols-[minmax(0,1.1fr)_360px]"
                >
                  <div>
                    <span className="eyebrow mb-5">Senior Front-end Engineer</span>
                    <h1 className="section-heading max-w-4xl text-[clamp(2.4rem,4.5vw,4.8rem)] font-semibold leading-[0.94] text-[var(--sp-base06)]">
                      Construo interfaces para produtos reais, com clareza visual e leitura rápida
                      mesmo em cenários complexos.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(222,224,239,0.78)]">
                      O objetivo desta janela é o mesmo do site de referência: transformar currículo
                      e portfólio em uma narrativa mais técnica, direta e agradável de explorar.
                      Aqui, adaptei essa leitura para o espaço menor da IDE, mantendo hierarquia,
                      contexto e prova de valor.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 smPhone:items-stretch mdPhone:flex-row mdPhone:items-center">
                      <button
                        type="button"
                        onClick={() => scrollToSection('projetos')}
                        className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--sp-red),var(--sp-yellow),var(--sp-blue))] px-7 py-3.5 text-sm font-bold text-[rgba(32,34,49,0.95)] shadow-lg shadow-[rgba(21,23,38,0.45)] transition hover:-translate-y-0.5 hover:shadow-xl"
                      >
                        Ver projetos
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollToSection('stack')}
                        className="inline-flex items-center justify-center rounded-full border border-[rgba(222,224,239,0.14)] bg-white/5 px-7 py-3.5 text-sm font-semibold text-[rgba(222,224,239,0.9)] transition hover:border-[rgba(222,224,239,0.22)] hover:bg-white/10"
                      >
                        Ver stack
                      </button>
                    </div>

                    <div className="mt-8 grid gap-3 smPhone:grid-cols-2 xl:grid-cols-4">
                      <div className="rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(141,143,158,0.9)]">
                          Foco
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-[rgba(222,224,239,0.92)]">
                          Interfaces escaláveis com UX clara e comportamento consistente.
                        </p>
                      </div>
                      <div className="rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(141,143,158,0.9)]">
                          Contexto
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-[rgba(222,224,239,0.92)]">
                          Enterprise, admin, web e mobile com regras de negócio reais.
                        </p>
                      </div>
                      <div className="rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(141,143,158,0.9)]">
                          Entrega
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-[rgba(222,224,239,0.92)]">
                          Design, implementação, refinamento e evolução contínua do produto.
                        </p>
                      </div>
                      <div className="rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(141,143,158,0.9)]">
                          Ferramental
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-[rgba(222,224,239,0.92)]">
                          React, TypeScript, Tailwind, TanStack, NextJS, entre outros.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel-strong relative overflow-hidden rounded-[30px] p-6">
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(160,182,232,0.16)] to-transparent" />
                    <div className="relative">
                      <p className="text-xs font-semibold tracking-[0.22em] text-[rgba(141,143,158,0.92)]">
                        // PERFIL
                      </p>
                      <div className="mt-5 flex items-start gap-4">
                        <img
                          src="https://github.com/juliochiuchi.png"
                          alt="Foto de perfil de Julio Chiuchi"
                          className="h-24 w-24 rounded-[26px] border border-[rgba(222,224,239,0.12)] object-cover shadow-2xl shadow-[rgba(21,23,38,0.45)]"
                        />
                        <div className="min-w-0">
                          <h2 className="section-heading text-3xl font-semibold text-[var(--sp-base06)]">
                            Julio <span className="text-gradient">Chiuchi</span>
                          </h2>
                          <p className="mt-2 text-sm leading-6 text-[rgba(222,224,239,0.74)]">
                            Front-end sênior com foco em produto, UX, componentização e interfaces
                            preparadas para uso real.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {['ReactJS', 'TypeScript', 'TailwindCSS', 'NextJS', 'Zod', 'TanStack Router', 'GIT', 'TanStack Query'].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(222,224,239,0.82)]"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>

                      <div className="mt-6 grid gap-3">
                        <div className="rounded-[22px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-3">
                          <p className="text-sm font-semibold text-[rgba(222,224,239,0.94)]">
                            Dominio
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                            Produtos enterprise, dashboards, fluxos administrativos, institucional e
                            utilitários.
                          </p>
                        </div>
                        <div className="rounded-[22px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-3">
                          <p className="text-sm font-semibold text-[rgba(222,224,239,0.94)]">
                            Habilidade
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                            UX clara, componentização reutilizável, performance percebida e cuidado
                            com consistência visual.
                          </p>
                        </div>
                        <div className="rounded-[22px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-3">
                          <p className="text-sm font-semibold text-[rgba(222,224,239,0.94)]">
                            Contexto
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                            Entregas para empresas de grande porte e projetos autorais com leitura
                            simples e manutenção sustentável.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 overflow-hidden rounded-[24px] border border-[rgba(222,224,239,0.12)] bg-[rgba(12,13,20,0.45)] px-4 py-4 font-mono text-[12.5px] leading-6 text-[rgba(222,224,239,0.76)]">
                        <p className="text-[rgba(141,143,158,0.9)]">// session.log</p>
                        <p className="mt-2">
                          [08:30] loaded `cv-julio-senior-frontend-react.pdf`
                        </p>
                        <p>[08:31] mapped portfolio into IDE reading experience</p>
                        <p>[08:32] condensed content for smaller viewport and faster scan</p>
                        <p>[08:33] highlighted projects, stack and professional context</p>
                        <p>[08:34] status: ready for recruiter, tech lead and product team</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  id="sobre"
                  data-ide-section="true"
                  className="mb-14 grid gap-5 border-b border-[rgba(222,224,239,0.08)] pb-12 smLaptop:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]"
                >
                  <div className="glass-panel rounded-[30px] p-7 smPhone:p-5 smLaptop:p-8">
                    <span className="eyebrow mb-5">// SOBRE</span>
                    <h2 className="section-heading max-w-2xl text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
                      Uma narrativa mais técnica sobre quem eu sou.
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      Atuo como front-end sênior com forte base em React e TypeScript,
                      transitando entre produto, UX e implementação. O repertório mostrado aqui vem
                      dos seus projetos e do seu CV: interfaces para empresas de alto nível de
                      exigência, soluções próprias, painéis administrativos e experiências com
                      preocupação real com usabilidade.
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      A adaptação deste layout considera um cenário mais compacto que o site de
                      referência. Por isso, a hierarquia foi condensada em blocos densos, com títulos
                      curtos, painéis de leitura rápida e detalhes acessados por seleção de projeto.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {highlights.map((item, index) => (
                      <div key={item.title} className="glass-panel rounded-[26px] p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(141,143,158,0.88)]">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-[rgba(222,224,239,0.95)]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section
                  id="projetos"
                  data-ide-section="true"
                  className="mb-14 border-b border-[rgba(222,224,239,0.08)] pb-12"
                >
                  <div className="mb-8 max-w-3xl">
                    <span className="eyebrow mb-5">// PROJETOS</span>
                    <h2 className="section-heading text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
                      Sistemas em produção<span className="text-gradient">.</span>
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      Cada projeto representa um problema real resolvido com engenharia de software
                      de verdade.
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {quickProjects.map((project, index) => (
                      <article
                        key={project.id}
                        className="glass-panel relative overflow-hidden rounded-[18px] border border-[rgba(222,224,239,0.12)] shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
                      >
                        <div className="h-[2px] w-full bg-[linear-gradient(90deg,var(--sp-red),var(--sp-yellow),var(--sp-blue))]" />
                        <div className="flex items-start justify-between gap-6 px-7 py-7 smPhone:px-5 smPhone:py-5">
                          <div className="max-w-4xl">
                            <p className="text-sm font-semibold tracking-[0.2em] text-[var(--sp-red)]">
                              #{String(index + 1).padStart(2, '0')}
                            </p>
                            <h3 className="mt-3 text-[clamp(1.65rem,2.2vw,2.2rem)] font-semibold leading-tight text-[rgba(244,246,251,0.96)]">
                              {project.title}
                            </h3>
                            <p className="mt-1 text-base text-[rgba(141,143,158,0.9)]">
                              {project.category}
                            </p>
                            <p className="mt-6 max-w-5xl text-[1.05rem] leading-8 text-[rgba(222,224,239,0.82)] smPhone:text-base smPhone:leading-7">
                              {project.summary}
                            </p>
                          </div>

                          <div className="pt-1 text-[var(--sp-blue)]">
                            <VscDebugAlt className="text-xl" />
                          </div>
                        </div>

                        <div className="grid gap-8 border-t border-[rgba(222,224,239,0.08)] px-7 py-7 smPhone:px-5 smPhone:py-5 smLaptop:grid-cols-[minmax(0,1fr)_minmax(280px,0.95fr)]">
                          <div className="grid gap-7">
                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-[var(--sp-blue)]">
                                Problema
                              </p>
                              <p className="mt-3 text-base leading-8 text-[rgba(222,224,239,0.84)]">
                                {project.problem ?? project.detail}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-[var(--sp-yellow)]">
                                Solução
                              </p>
                              <p className="mt-3 text-base leading-8 text-[rgba(222,224,239,0.84)]">
                                {project.solution ?? project.detail}
                              </p>
                            </div>
                          </div>

                          <div className="grid gap-7">
                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-[var(--sp-red)]">
                                Stack
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-md border border-[rgba(160,182,232,0.22)] bg-[rgba(160,182,232,0.08)] px-3 py-1.5 text-sm font-medium text-[rgba(222,224,239,0.82)]"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-[var(--sp-blue)]">
                                Resultados
                              </p>
                              <div className="mt-3 grid gap-2.5">
                                {project.bullets.map((bullet) => (
                                  <p
                                    key={bullet}
                                    className="flex items-start gap-3 text-base text-[rgba(222,224,239,0.84)]"
                                  >
                                    <span className="mt-1 text-[var(--sp-red)]">→</span>
                                    <span>{bullet}</span>
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
                <section id="stack" data-ide-section="true" className="pb-0">
                  <div className="mb-8 max-w-3xl">
                    <span className="eyebrow mb-5">// STACK</span>
                    <h2 className="section-heading text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
                      Ferramental principal para transformar repertório em entrega.
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[rgba(222,224,239,0.76)]">
                      Uma combinação pensada para velocidade de implementação, consistência visual e
                      manutenção sustentável.
                    </p>
                  </div>

                  <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 smPhone:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] smLaptop:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
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

                  <Footer />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

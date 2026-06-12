import { useEffect, useState } from 'react'
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

const sections = [
  { id: 'topo', label: 'Início' },
  { id: 'impacto', label: 'Impacto' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
] as const

const navSections: Array<(typeof sections)[number]['id']> = ['projetos', 'sobre', 'contato']

const heroStats = [
  { value: '9+', label: 'anos de experiência' },
  { value: '6+', label: 'marcas atendidas' },
  { value: 'Web + Mobile', label: 'entregas em produção' },
]

const authorityCards = [
  {
    metric: '9+',
    metricLabel: 'anos',
    title: 'Senior front-end',
    detail: 'Interfaces escaláveis com UX clara e leitura rápida.',
  },
  {
    metric: 'React',
    metricLabel: 'produto',
    title: 'Componentização',
    detail: 'Base de componentes reutilizáveis, acessíveis e consistentes.',
  },
  {
    metric: 'TS',
    metricLabel: 'tipagem',
    title: 'Qualidade',
    detail: 'Código previsível com validação e boas práticas de DX.',
  },
  {
    metric: 'Admin',
    metricLabel: 'UI',
    title: 'Enterprise',
    detail: 'Painéis e fluxos críticos para operação diária.',
  },
  {
    metric: 'Mobile',
    metricLabel: 'RN',
    title: 'Multiplataforma',
    detail: 'Do browser ao React Native com repertório pragmático.',
  },
  {
    metric: 'UX',
    metricLabel: 'clara',
    title: 'Leitura rápida',
    detail: 'Hierarquia visual forte para reduzir fricção e acelerar entendimento.',
  },
]

const stackGroups = [
  {
    title: 'Frontend',
    items: ['ReactJS', 'Typescript', 'Vite', 'NextJS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Estilo & UI',
    items: ['TailwindCSS', 'Styled Components', 'Shadcn/UI'],
  },
  {
    title: 'Dados & Estado',
    items: ['TanStack Query', 'TanStack Router', 'Zod'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Tooling',
    items: ['Git', 'NodeJS'],
  },
]

const Home = () => {
  const [activeSectionId, setActiveSectionId] =
    useState<(typeof sections)[number]['id']>('topo')

  const scrollToSection = (sectionId: (typeof sections)[number]['id']) => {
    setActiveSectionId(sectionId)

    if (sectionId === 'topo') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.getElementById(sectionId)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section="true"]')
    )

    if (!candidates.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.getAttribute('id'),
            distance: Math.abs(entry.boundingClientRect.top - 96),
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
        threshold: 0.15,
        rootMargin: '-96px 0px -72% 0px',
      }
    )

    candidates.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden px-6 pb-10 pt-7 smLaptop:px-12 smLaptop:pb-14 smLaptop:pt-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <header className="relative">
          <div className="absolute right-0 top-0 flex items-center gap-2">
            {/* <button
              type="button"
              className="glass-panel flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold tracking-[0.18em] text-[rgba(222,224,239,0.92)]"
              aria-label="Idioma PT"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--sp-red)]" />
              PT
            </button>
            <button
              type="button"
              className="glass-panel flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold tracking-[0.18em] text-[rgba(222,224,239,0.6)]"
              aria-label="Idioma EN"
            >
              EN
            </button>
            <button
              type="button"
              className="glass-panel flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold tracking-[0.18em] text-[rgba(222,224,239,0.6)]"
              aria-label="Idioma ES"
            >
              ES
            </button> */}
          </div>

          <div className="pt-1 font-mono text-[13px] text-[rgba(141,143,158,0.88)]">
            <span className="text-[var(--sp-blue)]">&gt;_</span> ~/julio-chiuchi{' '}
            <span className="text-[rgba(222,224,239,0.45)]">|</span> senior front-end engineer
          </div>

          <section id="topo" data-section="true" className="pt-12 smLaptop:pt-16">
            <h1 className="section-heading text-[clamp(3.1rem,6.6vw,5.25rem)] font-semibold leading-[0.92] text-[var(--sp-base06)]">
              Construo interfaces
              <br />
              para produtos reais<span className="text-gradient">.</span>
              <br />
              <span className="text-[rgba(141,143,158,0.82)]">
                Com clareza visual e leitura rápida.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[rgba(222,224,239,0.72)]">
              Front-end sênior com base forte em React e TypeScript, transitando entre produto, UX e
              implementação. Entregas para plataformas enterprise, painéis administrativos e
              experiências com comportamento consistente.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-[rgba(141,143,158,0.92)]">
              {heroStats.map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="text-[var(--sp-blue)]">{item.value}</span>
                  <span className="text-[12px] tracking-[0.16em]">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 smPhone:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection('projetos')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,var(--sp-red),var(--sp-yellow),var(--sp-blue))] px-6 py-3 text-sm font-bold text-[rgba(32,34,49,0.95)] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
              >
                Ver projetos
                <span className="text-[rgba(32,34,49,0.7)]">↓</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center justify-center rounded-xl border border-[rgba(222,224,239,0.14)] bg-white/5 px-6 py-3 text-sm font-semibold text-[rgba(222,224,239,0.88)] transition hover:bg-white/10"
              >
                Falar comigo
              </button>
              <a
                href="/cv/cv-julio-senior-frontend-react.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl border border-[rgba(222,224,239,0.14)] bg-white/5 px-6 py-3 text-sm font-semibold text-[rgba(222,224,239,0.88)] transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>
          </section>
        </header>

        <section
          id="impacto"
          data-section="true"
          className="mt-20 border-t border-[rgba(222,224,239,0.08)] pt-16"
        >
          <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
            // PROVA DE AUTORIDADE
          </p>
          <h2 className="section-heading mt-4 text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
            Impacto mensurável<span className="text-gradient">.</span>
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-[rgba(222,224,239,0.72)]">
            Números e sinais claros de maturidade de produto: consistência, escaneabilidade, UX e
            velocidade de entrega.
          </p>

          <div className="mt-10 grid gap-4 smLaptop:grid-cols-3">
            {authorityCards.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-[18px] border border-[rgba(222,224,239,0.12)] px-6 py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
                      {item.metricLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[rgba(222,224,239,0.92)]">
                      {item.title}
                    </p>
                  </div>
                  <p className="section-heading text-3xl font-semibold text-[var(--sp-blue)]">
                    {item.metric}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-[rgba(141,143,158,0.92)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[18px] border border-[rgba(222,224,239,0.12)] bg-[rgba(12,13,20,0.55)]">
            <div className="flex items-center gap-3 border-b border-[rgba(222,224,239,0.08)] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <p className="font-mono text-[12px] text-[rgba(141,143,158,0.92)]">
                production_logs.txt
              </p>
            </div>
            <div className="px-5 py-5 font-mono text-[12.5px] leading-6 text-[rgba(222,224,239,0.76)]">
              <p className="text-[rgba(141,143,158,0.9)]">
                [2026-06-12 09:12:04] [SUCCESS] UI systems loaded
              </p>
              <p>[2026-06-12 09:12:06] [INFO] component library: stable patterns</p>
              <p>[2026-06-12 09:12:08] [INFO] UX: hierarchy, scan and consistency</p>
              <p>[2026-06-12 09:12:10] [SUCCESS] ready for product teams</p>
              <p className="text-[rgba(141,143,158,0.9)]">_</p>
            </div>
          </div>
        </section>

        <div className="mt-14 flex flex-col gap-4 border-t border-[rgba(222,224,239,0.08)] pt-10 smLaptop:flex-row smLaptop:items-center smLaptop:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[rgba(141,143,158,0.92)]">
            <a
              href="https://github.com/juliochiuchi"
              target="_blank"
              rel="noreferrer"
              className="glass-panel rounded-xl px-4 py-2 transition hover:bg-white/10 hover:text-[rgba(222,224,239,0.9)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/juliochiuchi/"
              target="_blank"
              rel="noreferrer"
              className="glass-panel rounded-xl px-4 py-2 transition hover:bg-white/10 hover:text-[rgba(222,224,239,0.9)]"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/juliochiuchi"
              target="_blank"
              rel="noreferrer"
              className="glass-panel rounded-xl px-4 py-2 transition hover:bg-white/10 hover:text-[rgba(222,224,239,0.9)]"
            >
              Twitter
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {navSections.map((sectionId) => {
              const section = sections.find((item) => item.id === sectionId)
              const isActive = sectionId === activeSectionId

              return (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className={`rounded-xl border px-4 py-2 text-xs font-bold tracking-[0.22em] transition ${isActive ? 'border-[rgba(160,182,232,0.45)] bg-white/10 text-[rgba(222,224,239,0.92)]' : 'border-[rgba(222,224,239,0.14)] bg-white/5 text-[rgba(222,224,239,0.72)] hover:bg-white/10 hover:text-[rgba(222,224,239,0.92)]'
                    }`}
                >
                  {section?.label.toUpperCase()}
                </button>
              )
            })}
          </nav>
        </div>

        <section id="projetos" data-section="true" className="mt-20">
          <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
            // PROJETOS
          </p>
          <h2 className="section-heading mt-4 text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
            Sistemas em produção<span className="text-gradient">.</span>
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-[rgba(222,224,239,0.72)]">
            Cada projeto representa um problema real resolvido com engenharia de software de verdade.
          </p>

          <div className="mt-10 grid gap-6">
            {quickProjects.map((project, index) => (
              <article
                key={project.id}
                className="glass-panel overflow-hidden rounded-[18px] border border-[rgba(222,224,239,0.12)]"
              >
                <div className="grid gap-8 px-7 py-7 smPhone:px-5 smPhone:py-5 smLaptop:grid-cols-[minmax(0,1fr)_360px]">
                  <div className="min-w-0">
                    <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
                      #{String(index + 1).padStart(2, '0')} • {project.category}
                    </p>
                    <h3 className="section-heading mt-3 text-[clamp(1.75rem,2.4vw,2.35rem)] font-semibold leading-tight text-[rgba(244,246,251,0.96)]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[rgba(222,224,239,0.78)]">
                      {project.summary}
                    </p>

                    <div className="mt-7 grid gap-6 smLaptop:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--sp-blue)]">
                          Problema
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(222,224,239,0.78)]">
                          {project.problem ?? project.detail}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--sp-yellow)]">
                          Solução
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(222,224,239,0.78)]">
                          {project.solution ?? project.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 grid gap-6 smLaptop:grid-cols-2">
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
                        <div className="mt-3 grid gap-2">
                          {project.bullets.map((bullet) => (
                            <p
                              key={bullet}
                              className="flex items-start gap-3 text-sm leading-7 text-[rgba(222,224,239,0.78)]"
                            >
                              <span className="mt-1 text-[var(--sp-red)]">→</span>
                              <span>{bullet}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[18px] border border-[rgba(222,224,239,0.12)] bg-[rgba(12,13,20,0.45)]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.badgeClass} opacity-80`}
                    />
                    <img
                      src={project.image}
                      alt={`Preview do projeto ${project.title}`}
                      className="relative h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="stack"
          data-section="true"
          className="mt-20 border-t border-[rgba(222,224,239,0.08)] pt-16"
        >
          <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
            // STACK
          </p>
          <h2 className="section-heading mt-4 text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
            Domínio técnico<span className="text-gradient">.</span>
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-[rgba(222,224,239,0.72)]">
            Ferramental principal para transformar repertório em entrega, com foco em consistência e
            manutenção sustentável.
          </p>

          <div className="mt-10 grid gap-4 smLaptop:grid-cols-3">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="glass-panel rounded-[18px] border border-[rgba(222,224,239,0.12)] px-6 py-6"
              >
                <h3 className="section-heading text-lg font-semibold text-[rgba(222,224,239,0.94)]">
                  {group.title}
                </h3>
                <div className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-3 text-sm text-[rgba(141,143,158,0.92)]"
                    >
                      <span className="text-[var(--sp-red)]">→</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 smPhone:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
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

        <section
          id="sobre"
          data-section="true"
          className="mt-20 border-t border-[rgba(222,224,239,0.08)] pt-16"
        >
          <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
            // SOBRE
          </p>
          <h2 className="section-heading mt-4 text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
            Julio Chiuchi<span className="text-gradient">.</span>
          </h2>

          <div className="mt-10 grid gap-6 smLaptop:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
            <div className="glass-panel rounded-[22px] border border-[rgba(222,224,239,0.12)] px-7 py-7 smPhone:px-5 smPhone:py-5">
              <p className="text-base leading-8 text-[rgba(222,224,239,0.76)]">
                Atuo como front-end sênior com forte base em React e TypeScript, transitando entre
                produto, UX e implementação. O repertório vem de projetos enterprise e produtos
                autorais com leitura simples e manutenção sustentável.
              </p>
              <p className="mt-5 text-base leading-8 text-[rgba(222,224,239,0.76)]">
                <span className="text-[rgba(222,224,239,0.9)]">
                  “Não construo interface só para ficar bonita.
                </span>{' '}
                Eu projeto para escalar, manter e resolver problemas reais.”
              </p>

              <div className="mt-8 grid gap-3 smPhone:grid-cols-3">
                <div className="rounded-[18px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                  <p className="section-heading text-2xl font-semibold text-[var(--sp-blue)]">
                    9+
                  </p>
                  <p className="mt-1 text-xs tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
                    anos
                  </p>
                </div>
                <div className="rounded-[18px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                  <p className="section-heading text-2xl font-semibold text-[var(--sp-blue)]">
                    Web
                  </p>
                  <p className="mt-1 text-xs tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
                    + mobile
                  </p>
                </div>
                <div className="rounded-[18px] border border-[rgba(222,224,239,0.12)] bg-white/[0.04] px-4 py-4">
                  <p className="section-heading text-2xl font-semibold text-[var(--sp-blue)]">
                    UX
                  </p>
                  <p className="mt-1 text-xs tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
                    clara
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-panel rounded-[22px] border border-[rgba(222,224,239,0.12)] px-6 py-6"
                >
                  <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="section-heading mt-3 text-xl font-semibold text-[rgba(222,224,239,0.94)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(141,143,158,0.92)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default Home

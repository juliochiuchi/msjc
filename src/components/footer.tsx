import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

export function Footer() {
  return (
    <footer
      id="contato"
      data-section="true"
      className="mt-20 border-t border-[rgba(222,224,239,0.08)] pb-8 pt-16"
    >
      <p className="font-mono text-[13px] tracking-[0.18em] text-[rgba(141,143,158,0.92)]">
        // CONTATO
      </p>
      <h2 className="section-heading mt-4 text-4xl font-semibold text-[var(--sp-base06)] smPhone:text-3xl">
        Vamos conversar<span className="text-gradient">.</span>
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-8 text-[rgba(222,224,239,0.72)]">
        Interessado em trabalhar junto ou tem um projeto em mente? Entre em contato direto.
      </p>

      <div className="mt-10 grid gap-4 smLaptop:grid-cols-3">
        <a
          href="https://github.com/juliochiuchi"
          target="_blank"
          rel="noreferrer"
          className="glass-panel flex items-start justify-between gap-4 rounded-[18px] border border-[rgba(222,224,239,0.12)] px-6 py-6 transition hover:bg-white/10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
              GitHub
            </p>
            <p className="mt-2 text-lg font-semibold text-[rgba(222,224,239,0.94)]">
              juliochiuchi
            </p>
            <p className="mt-2 text-sm text-[rgba(141,143,158,0.92)]">
              Repositórios e projetos pessoais.
            </p>
          </div>
          <div className="text-2xl text-[rgba(222,224,239,0.86)]">
            <BsGithub />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/juliochiuchi/"
          target="_blank"
          rel="noreferrer"
          className="glass-panel flex items-start justify-between gap-4 rounded-[18px] border border-[rgba(222,224,239,0.12)] px-6 py-6 transition hover:bg-white/10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
              LinkedIn
            </p>
            <p className="mt-2 text-lg font-semibold text-[rgba(222,224,239,0.94)]">
              /in/juliochiuchi
            </p>
            <p className="mt-2 text-sm text-[rgba(141,143,158,0.92)]">
              Experiências e histórico profissional.
            </p>
          </div>
          <div className="text-2xl text-[rgba(222,224,239,0.86)]">
            <BsLinkedin />
          </div>
        </a>

        <a
          href="https://twitter.com/juliochiuchi"
          target="_blank"
          rel="noreferrer"
          className="glass-panel flex items-start justify-between gap-4 rounded-[18px] border border-[rgba(222,224,239,0.12)] px-6 py-6 transition hover:bg-white/10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[rgba(141,143,158,0.9)]">
              Twitter
            </p>
            <p className="mt-2 text-lg font-semibold text-[rgba(222,224,239,0.94)]">
              @juliochiuchi
            </p>
            <p className="mt-2 text-sm text-[rgba(141,143,158,0.92)]">
              Atualizações rápidas e referências.
            </p>
          </div>
          <div className="text-2xl text-[rgba(222,224,239,0.86)]">
            <FaTwitterSquare />
          </div>
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-[18px] border border-[rgba(222,224,239,0.12)] bg-[rgba(12,13,20,0.55)]">
        <div className="flex items-center gap-3 border-b border-[rgba(222,224,239,0.08)] px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="font-mono text-[12px] text-[rgba(141,143,158,0.92)]">
            disponibilidade.txt
          </p>
        </div>
        <div className="px-5 py-5 font-mono text-[12.5px] leading-6 text-[rgba(222,224,239,0.76)]">
          <p className="text-[rgba(141,143,158,0.9)]">whoami</p>
          <p className="mt-2">Julio Chiuchi - Senior Front-end Engineer</p>
          <p className="mt-5 text-[rgba(141,143,158,0.9)]">cat resumo.txt</p>
          <p className="mt-2">
            Interfaces escaláveis • UX clara • Componentização • Produto • React/TypeScript
          </p>
          <p className="mt-5 text-[rgba(141,143,158,0.9)]">_</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(222,224,239,0.08)] pt-8 smLaptop:flex-row smLaptop:items-center smLaptop:justify-between">
        <p className="text-sm text-[rgba(141,143,158,0.92)]">
          {new Date().getFullYear()} © Julio Chiuchi. Produtos, interfaces e experiências com foco em
          clareza e impacto.
        </p>
        <div className="flex items-center gap-3 text-xl text-[rgba(222,224,239,0.84)]">
          <a
            href="https://github.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juliochiuchi/"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://twitter.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
            aria-label="Twitter"
          >
            <FaTwitterSquare className="h-[1.1rem] w-[1.1rem]" />
          </a>
        </div>
      </div>
    </footer>
  )
}

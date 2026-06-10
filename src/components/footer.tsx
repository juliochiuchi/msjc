import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

export function Footer() {
  return (
    <footer id="contato" className="pb-8 pt-6">
      <div className="container-shell">
        <div className="glass-panel flex flex-col gap-6 rounded-[28px] px-6 py-6 text-slate-300 smLaptop:flex-row smLaptop:items-center smLaptop:justify-between smLaptop:px-8">
          <div>
            <p className="mb-1 text-lg font-semibold text-slate-100">
              Vamos construir algo memorável.
            </p>
            <p className="text-sm text-slate-400">
              {new Date().getFullYear()} © Julio Chiuchi. Produtos, interfaces e
              experiências com foco em clareza e impacto.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <a
              href="https://github.com/juliochiuchi"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-sky-300/40 hover:text-white"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juliochiuchi/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-sky-300/40 hover:text-white"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://twitter.com/juliochiuchi"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-sky-300/40 hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitterSquare className="h-[1.1rem] w-[1.1rem]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

export function Footer() {
  return (
    <footer id="contato" data-ide-section="true" className="pb-0 pt-12">
      <div className="glass-panel flex flex-col gap-6 rounded-[28px] px-6 py-6 text-[rgba(222,224,239,0.74)] smLaptop:flex-row smLaptop:items-center smLaptop:justify-between smLaptop:px-8">
        <div>
          <p className="mb-1 text-lg font-semibold text-[rgba(222,224,239,0.96)]">
            Vamos construir algo memorável.
          </p>
          <p className="text-sm text-[rgba(141,143,158,0.92)]">
            {new Date().getFullYear()} © Julio Chiuchi. Produtos, interfaces e experiências com foco em clareza e impacto.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xl">
          <a
            href="https://github.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 transition hover:-translate-y-1 hover:border-[rgba(209,145,143,0.45)] hover:text-[rgba(222,224,239,0.94)]"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juliochiuchi/"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 transition hover:-translate-y-1 hover:border-[rgba(163,146,220,0.45)] hover:text-[rgba(222,224,239,0.94)]"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://twitter.com/juliochiuchi"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(222,224,239,0.12)] bg-white/5 transition hover:-translate-y-1 hover:border-[rgba(112,155,189,0.45)] hover:text-[rgba(222,224,239,0.94)]"
            aria-label="Twitter"
          >
            <FaTwitterSquare className="h-[1.1rem] w-[1.1rem]" />
          </a>
        </div>
      </div>
    </footer>
  )
}

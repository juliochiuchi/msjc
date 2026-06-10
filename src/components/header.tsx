import cvPdf from '../assets/cv/cv-julio-senior-frontend-react.pdf'

export function Header() {
  return (
    <header className="sticky top-0 z-50 pt-6">
      <div className="container-shell">
        <div className="glass-panel flex flex-col gap-5 rounded-[28px] px-5 py-4 smLaptop:flex-row smLaptop:items-center smLaptop:justify-between smLaptop:px-7">
          <a href="#topo" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-extrabold text-slate-950 shadow-lg shadow-sky-900/25">
              JC
            </span>
            <div>
              <p className="font-semibold text-slate-100">Julio Chiuchi</p>
              <p className="text-sm text-slate-400">Senior Front-end Engineer</p>
            </div>
          </a>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300 smLaptop:justify-center">
            <a
              href="#sobre"
              className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
            >
              Projetos
            </a>
            <a
              href="#stack"
              className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
            >
              Stack
            </a>
            <a
              href="#contato"
              className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
            >
              Contato
            </a>
          </nav>

          <a
            download="cv-julio-senior-frontend-react.pdf"
            href={cvPdf}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-300/40 hover:bg-white/10"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}

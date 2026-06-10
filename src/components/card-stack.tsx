interface CardStackProps {
  name: string
  icon: React.ComponentType<{ className: string }>
}

export function CardStack({ name, icon: Icon }: CardStackProps) {
  return (
    <div className="glass-panel group min-w-[9rem] flex-1 rounded-[24px] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.08]">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-slate-100 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-sky-400/20 group-hover:to-violet-400/20">
        <Icon className="h-7 w-7" />
      </div>
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
        {name}
      </span>
    </div>
  )
}

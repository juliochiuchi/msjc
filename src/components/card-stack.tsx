interface CardStackProps {
  name: string;
  icon: React.ComponentType<{ className: string }>;
}

export function CardStack({ name, icon: Icon }: CardStackProps) {
  return (
    <div className="min-w-32 flex w-36 flex-col items-center justify-center gap-2 rounded-md border border-blue-violet-default p-5 text-center text-sm">
      <Icon className="h-10 w-10" />
      <span>{name}</span>
    </div>
  )
}

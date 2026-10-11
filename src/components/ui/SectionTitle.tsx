interface SectionTitleProps {
  title: string;
  /** Optional short text under the title. */
  subtitle?: string;
}

/** Page heading (h1) with an accent bar. */
export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h1 className="text-title text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <div className="bg-brand mt-3 h-1 w-12 rounded-full" aria-hidden="true" />
      {subtitle ? <p className="text-muted mt-4 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}

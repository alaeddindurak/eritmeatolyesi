interface SectionHeadingProps {
  /** Used to link the heading to its section through `aria-labelledby`. */
  id: string;
  title: string;
  subtitle?: string;
}

/** Section heading (h2) with an accent bar, used by the home page blocks. */
export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 id={id} className="text-title text-2xl font-bold">
        {title}
      </h2>
      <div className="bg-brand mt-2 h-1 w-12 rounded-full" aria-hidden="true" />
      {subtitle ? <p className="text-muted mt-3 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}

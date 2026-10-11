import type { WorkCredit as WorkCreditData } from "@/types";

interface WorkCreditProps {
  credit: WorkCreditData;
  /** True when the cover image is a render taken from the source page, not made by us. */
  isImageFromSource: boolean;
}

/**
 * Small credit and rights note for designs made by someone else: designer, source, license, and a
 * line saying who owns what. Being open about this keeps the showcase honest and avoids disputes.
 */
export function WorkCredit({ credit, isImageFromSource }: WorkCreditProps) {
  return (
    <aside
      className="border-line text-muted mt-8 rounded-2xl border p-4 text-xs leading-relaxed"
      aria-label="Kaynak ve lisans"
    >
      <p>
        <strong className="text-title">Tasarım:</strong> {credit.designer} ·{" "}
        <a
          href={credit.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:text-brand-hover underline underline-offset-2"
        >
          {credit.sourceName}
        </a>{" "}
        · <strong className="text-title">Lisans:</strong>{" "}
        {credit.licenseUrl ? (
          <a
            href={credit.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-hover underline underline-offset-2"
          >
            {credit.license}
          </a>
        ) : (
          credit.license
        )}
      </p>
      <p className="mt-2">
        Bu model, tasarımcısı tarafından kamu malı olarak paylaşılmıştır ve Eritme Atölyesi tasarımın sahibi değildir.
        {isImageFromSource ? " Görsel, tasarımın kaynak sayfasındaki tanıtım görselidir." : ""} Bir hak sahipliği sorunu
        görürseniz Instagram üzerinden bize yazın, içeriği hemen kaldıralım.
      </p>
    </aside>
  );
}

"use client";

import type { Locale, UILabels } from "@/i18n/ui";
import LanguageToggle from "@/components/LanguageToggle";
import PrintButton from "@/components/PrintButton";

type Props = {
  locale: Locale;
  labels: UILabels;
  loading: boolean;
  onToggleLocale: () => void;
  error: string | null;
};

export default function PreviewToolbar({
  locale,
  labels,
  loading,
  onToggleLocale,
  error,
}: Props) {
  const p = labels.page;

  return (
    <header className="preview-toolbar no-print">
      <div className="preview-toolbar__inner">
        <div className="preview-toolbar__brand">
          <span className="preview-toolbar__mark preview-toolbar__mark--live" aria-hidden />
          <div>
            <p className="preview-toolbar__name">{p.brand}</p>
            <p className="preview-toolbar__meta">
              <span className="preview-toolbar__live" aria-hidden />
              {p.previewLabel}
              <span className="preview-toolbar__dot" aria-hidden />
              A4
            </p>
          </div>
        </div>

        <p className="preview-toolbar__subtitle hidden sm:block">{p.subtitle}</p>

        <div className="preview-toolbar__actions">
          <LanguageToggle locale={locale} loading={loading} onToggle={onToggleLocale} />
          <PrintButton label={p.print} />
        </div>
      </div>

      {error && (
        <p className="preview-toolbar__error" role="alert">
          {error}
        </p>
      )}
    </header>
  );
}

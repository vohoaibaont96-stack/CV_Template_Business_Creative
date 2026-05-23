"use client";

import type { Locale } from "@/i18n/ui";
import { uiLabels } from "@/i18n/ui";

type Props = {
  locale: Locale;
  loading: boolean;
  onToggle: () => void;
};

export default function LanguageToggle({ locale, loading, onToggle }: Props) {
  const labels = uiLabels[locale].page;
  const targetLabel = locale === "vi" ? labels.switchToEn : labels.switchToVi;
  const targetCode = locale === "vi" ? "EN" : "VI";

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={loading}
      className="preview-btn preview-btn--ghost"
      aria-busy={loading}
      aria-label={loading ? labels.translating : targetLabel}
    >
      <span className="preview-btn__code">{targetCode}</span>
      <span className="preview-btn__label">{loading ? labels.translating : targetLabel}</span>
    </button>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { cvData, type CVData } from "@/data/cv";
import { uiLabels, type Locale } from "@/i18n/ui";
import CVScaleFit from "@/components/CVScaleFit";
import CVTemplate from "@/components/CVTemplate";
import PreviewToolbar from "@/components/PreviewToolbar";

export default function CVPageClient() {
  const [locale, setLocale] = useState<Locale>("vi");
  const [enData, setEnData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const labels = uiLabels[locale];
  const displayData = locale === "vi" ? cvData : (enData ?? cvData);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const fetchTranslation = useCallback(async () => {
    if (enData) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cvData),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Translate failed");
      setEnData(json.data as CVData);
    } catch {
      setError(uiLabels.vi.page.translateError);
      setLocale("vi");
    } finally {
      setLoading(false);
    }
  }, [enData]);

  const handleToggle = () => {
    if (locale === "vi") {
      if (!enData && !loading) {
        setLocale("en");
        void fetchTranslation();
      } else {
        setLocale("en");
      }
    } else {
      setLocale("vi");
    }
  };

  return (
    <div className="preview-shell">
      <PreviewToolbar
        locale={locale}
        labels={labels}
        loading={loading}
        onToggleLocale={handleToggle}
        error={error}
      />

      <div className="preview-stage">
        <CVScaleFit>
          {loading && locale === "en" && !enData ? (
            <div className="cv-page cv-loading" aria-busy="true" aria-live="polite">
              <div className="cv-loading__spinner" />
              <p className="cv-loading__text">{labels.page.translating}</p>
            </div>
          ) : (
            <CVTemplate data={displayData} labels={labels} locale={locale} />
          )}
        </CVScaleFit>
      </div>
    </div>
  );
}

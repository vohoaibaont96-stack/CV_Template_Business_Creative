"use client";

import { useEffect, useRef, useState } from "react";

/** Tỷ lệ xem trước = zoom trình duyệt 200% */
const PREVIEW_SCALE = 2;

/**
 * Phóng to CV ×2 khi xem trước (giống Ctrl+ zoom 200%).
 * In PDF vẫn khổ A4 gốc — transform tắt khi @media print.
 */
export default function CVScaleFit({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(PREVIEW_SCALE);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>();

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const availableW = outer.clientWidth;
      const naturalW = inner.offsetWidth;
      const naturalH = inner.offsetHeight;
      if (!naturalW) return;

      const fitWidth = availableW / naturalW;
      // Luôn ×2 khi đủ chỗ; chỉ giảm trên màn hình hẹp hơn khổ ×2
      const next = fitWidth < PREVIEW_SCALE ? fitWidth : PREVIEW_SCALE;

      setScale(next);
      setScaledHeight(naturalH * next);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [children]);

  return (
    <div
      ref={outerRef}
      className="preview-cv-fit"
      style={{ height: scaledHeight ? `${scaledHeight}px` : undefined }}
    >
      <div
        ref={innerRef}
        className="preview-cv-fit__inner"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

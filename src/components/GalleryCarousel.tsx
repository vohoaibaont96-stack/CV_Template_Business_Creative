"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  GALLERY_INTERVAL_MS,
  galleryImages,
  type GalleryImage,
} from "@/data/gallery";

type Props = {
  images?: GalleryImage[];
  intervalMs?: number;
  title?: string;
};

export default function GalleryCarousel({
  images = galleryImages,
  intervalMs = GALLERY_INTERVAL_MS,
  title,
}: Props) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs]);

  if (count === 0) return null;

  const current = images[index];

  return (
    <section className="gallery-section gallery-reveal" aria-label={title || "Portfolio gallery"}>
      {/* Màn hình: carousel cuối trang */}
      <div className="gallery-screen no-print">
        {title && <p className="gallery-section__title">{title}</p>}

        <div className="gallery-carousel__frame">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`gallery-carousel__slide ${i === index ? "is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="gallery-carousel__img"
                sizes="(max-width: 1200px) 100vw, 1100px"
                priority={i === 0}
              />
            </div>
          ))}

          {count > 1 && (
            <>
              <button
                type="button"
                className="gallery-carousel__nav gallery-carousel__nav--prev"
                onClick={prev}
                aria-label="Ảnh trước"
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-carousel__nav gallery-carousel__nav--next"
                onClick={next}
                aria-label="Ảnh sau"
              >
                ›
              </button>
            </>
          )}

          {current.caption && (
            <p className="gallery-carousel__caption">{current.caption}</p>
          )}
        </div>

        {count > 1 && (
          <div className="gallery-carousel__dots" role="tablist" aria-label="Chọn ảnh">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ảnh ${i + 1}: ${img.alt}`}
                className={`gallery-carousel__dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* In PDF: mỗi hàng 3 ảnh, hiển thị hết */}
      <div className="gallery-print only-print">
        {title && <p className="gallery-print__title">{title}</p>}
        <div className="gallery-print__grid">
          {images.map((img) => (
            <figure key={img.src} className="gallery-print__item">
              <div className="gallery-print__thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="gallery-print__img" />
              </div>
              {img.caption && (
                <figcaption className="gallery-print__caption">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

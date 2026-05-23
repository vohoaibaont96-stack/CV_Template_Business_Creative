/**
 * Thư viện ảnh portfolio — hiển thị carousel trên website.
 *
 * Thêm file ảnh vào: public/gallery/
 * (jpg, png, webp, svg — khuyến nghị ngang 16:9 hoặc 4:3, dưới ~2MB/ảnh)
 * Rồi bổ sung mục tương ứng vào mảng galleryImages bên dưới.
 */

export interface GalleryImage {
  /** Đường dẫn từ thư mục public, vd: /gallery/ten-file.jpg */
  src: string;
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/demo-brand-identity.svg",
    alt: "Demo — Nhận diện thương hiệu F&B",
    caption: "Brand Identity · Concept 2024",
  },
  {
    src: "/gallery/demo-social-campaign.svg",
    alt: "Demo — Chiến dịch social media",
    caption: "Social Campaign · Instagram Feed",
  },
  {
    src: "/gallery/demo-poster-event.svg",
    alt: "Demo — Poster sự kiện",
    caption: "Event Poster · Tuần lễ Sinh viên",
  },
  {
    src: "/gallery/demo-reels-cover.svg",
    alt: "Demo — Cover video ngắn Reels/TikTok",
    caption: "Short-form Video · Reels Cover",
  },
];

/** Thời gian mỗi slide (ms) */
export const GALLERY_INTERVAL_MS = 4500;

/** Số cột mỗi hàng khi in PDF (3 ảnh/hàng, tự xuống hàng tiếp theo) */
export const GALLERY_PRINT_COLUMNS = 3;

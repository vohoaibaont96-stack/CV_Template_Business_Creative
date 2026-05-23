/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH MÀU — chỉnh tại file này
 *  Hướng dẫn: src/color/HUONG_DAN_DOI_MAU.md
 * ═══════════════════════════════════════════════════════════════
 */

/** Màu thương hiệu (header CV, sidebar, nút, accent) */
export const brand = {
  /** Nền header & sidebar tối */
  charcoal: "#1c1917",
  warm: "#292524",
  espresso: "#44403c",
  /** Màu nhấn chính — tiêu đề, viền, bullet */
  coral: "#e85d4c",
  terracotta: "#c45c3e",
  /** Vàng đồng — nhãn phụ, badge thời gian */
  gold: "#c9a227",
  /** Nền cột phải & giấy CV */
  cream: "#faf7f2",
  blush: "#f5ebe6",
  /** Nền trang web xem trước */
  mist: "#ede8e3",
  paper: "#fdfcfa",
} as const;

/** Màu chữ trên CV */
export const cv = {
  ink: "#1c1917",
  body: "#44403c",
  muted: "#78716c",
  line: "#d6d3d1",
} as const;

/** Giao diện toolbar, gallery, nút (có thể đồng bộ với brand) */
export const ui = {
  white: "#ffffff",
  error: "#b91c1c",
  toolbarMeta: "#64748b",
  toolbarDot: "#94a3b8",
  btnGhostLabel: "#334155",
} as const;

/**
 * Giá trị R,G,B (không có #) — dùng cho rgba(var(--rgb-xxx), 0.5)
 * Khi đổi màu hex ở trên, cập nhật số RGB tương ứng tại đây.
 */
export const rgb = {
  charcoal: "28, 25, 23",
  coral: "232, 93, 76",
  gold: "201, 162, 39",
  cream: "250, 247, 242",
} as const;

/** Preset gợi ý — copy vào `brand` / `cv` nếu muốn đổi nhanh cả bộ */
export const presets = {
  /** Mặc định: coral + charcoal (creative) */
  creative: { ...brand },
  /** Xanh navy — tone business truyền thống */
  navy: {
    charcoal: "#0f2744",
    warm: "#1a3a5c",
    espresso: "#2d5a87",
    coral: "#2d7ab8",
    terracotta: "#1a4d7c",
    gold: "#00b4d8",
    cream: "#f8fafc",
    blush: "#e8eef4",
    mist: "#e2e8f0",
    paper: "#ffffff",
  },
  /** Tím editorial */
  editorial: {
    charcoal: "#1e1b2e",
    warm: "#2d2a3e",
    espresso: "#4a4560",
    coral: "#7c3aed",
    terracotta: "#6d28d9",
    gold: "#a78bfa",
    cream: "#faf8ff",
    blush: "#f3efff",
    mist: "#ece8f5",
    paper: "#fdfcff",
  },
} as const;

/** Map cho Tailwind — không cần sửa */
export const tailwindBrand = brand;
export const tailwindCv = cv;

/** Khối CSS inject vào :root (layout.tsx) */
export function getThemeCssBlock(): string {
  const lines: string[] = [
    ":root {",
    `  --brand-charcoal: ${brand.charcoal};`,
    `  --brand-warm: ${brand.warm};`,
    `  --brand-espresso: ${brand.espresso};`,
    `  --brand-coral: ${brand.coral};`,
    `  --brand-terracotta: ${brand.terracotta};`,
    `  --brand-gold: ${brand.gold};`,
    `  --brand-cream: ${brand.cream};`,
    `  --brand-blush: ${brand.blush};`,
    `  --brand-mist: ${brand.mist};`,
    `  --brand-paper: ${brand.paper};`,
    `  --cv-ink: ${cv.ink};`,
    `  --cv-body: ${cv.body};`,
    `  --cv-muted: ${cv.muted};`,
    `  --cv-line: ${cv.line};`,
    `  --ui-white: ${ui.white};`,
    `  --ui-error: ${ui.error};`,
    `  --rgb-charcoal: ${rgb.charcoal};`,
    `  --rgb-coral: ${rgb.coral};`,
    `  --rgb-gold: ${rgb.gold};`,
    `  --rgb-cream: ${rgb.cream};`,
    "}",
  ];
  return lines.join("\n");
}

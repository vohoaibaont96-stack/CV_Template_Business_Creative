/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH FONT GOOGLE — chỉnh tại file này
 *  Hướng dẫn: src/font/HUONG_DAN_DOI_FONT.md
 * ═══════════════════════════════════════════════════════════════
 */

export interface GoogleFontRole {
  /**
   * Tên font trên Google Fonts (copy đúng từ fonts.google.com)
   * Ví dụ: "Playfair Display", "Be Vietnam Pro"
   */
  family: string;
  /** Các độ đậm cần tải: 400, 500, 600, 700… */
  weights: number[];
  /** Tải thêm kiểu nghiêng (italic) */
  italic?: boolean;
}

export interface FontTheme {
  /** Chữ thường — thân CV, toolbar, nút */
  sans: GoogleFontRole;
  /** Tiêu đề lớn — họ tên, tên mục, tên dự án */
  display: GoogleFontRole;
  /** Nhấn nhá — tagline, trích dẫn (thường có italic) */
  accent: GoogleFontRole;
}

/** Font đang dùng — sửa trực tiếp hoặc gán từ `presets` */
export const fonts: FontTheme = {
  sans: {
    family: "Plus Jakarta Sans",
    weights: [400, 500, 600, 700],
  },
  display: {
    family: "Playfair Display",
    weights: [400, 600, 700],
  },
  accent: {
    family: "Instrument Serif",
    weights: [400],
    italic: true,
  },
};

/** Preset gợi ý — copy vào `fonts` hoặc: `export const fonts = { ...presets.classic };` */
export const presets = {
  /** Mặc định — creative portfolio */
  creative: {
    sans: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] },
    display: { family: "Playfair Display", weights: [400, 600, 700] },
    accent: { family: "Instrument Serif", weights: [400], italic: true },
  },
  /** Sans gọn, serif cổ điển */
  classic: {
    sans: { family: "Lato", weights: [400, 700] },
    display: { family: "Merriweather", weights: [400, 700] },
    accent: { family: "Merriweather", weights: [400], italic: true },
  },
  /** Tối giản, hiện đại */
  minimal: {
    sans: { family: "DM Sans", weights: [400, 500, 700] },
    display: { family: "DM Serif Display", weights: [400, 600] },
    accent: { family: "DM Sans", weights: [400], italic: true },
  },
  /** Editorial — serif display */
  editorial: {
    sans: { family: "Work Sans", weights: [400, 500, 600, 700] },
    display: { family: "Cormorant Garamond", weights: [500, 600, 700] },
    accent: { family: "Cormorant Garamond", weights: [500], italic: true },
  },
  /** Hỗ trợ tiếng Việt tốt */
  vietnamese: {
    sans: { family: "Be Vietnam Pro", weights: [400, 500, 600, 700] },
    display: { family: "Be Vietnam Pro", weights: [600, 700] },
    accent: { family: "Lora", weights: [400, 500], italic: true },
  },
} as const satisfies Record<string, FontTheme>;

function familyToParamName(family: string): string {
  return family.trim().replace(/\s+/g, "+");
}

function roleToGoogleParam(role: GoogleFontRole): string {
  const name = familyToParamName(role.family);
  const weights = [...new Set(role.weights)].sort((a, b) => a - b);

  if (role.italic) {
    const pairs = weights.flatMap((w) => [`0,${w}`, `1,${w}`]);
    return `family=${name}:ital,wght@${pairs.join(";")}`;
  }

  return `family=${name}:wght@${weights.join(";")}`;
}

/** URL stylesheet Google Fonts (layout.tsx) */
export function getGoogleFontsUrl(theme: FontTheme = fonts): string {
  const params = [theme.sans, theme.display, theme.accent]
    .map(roleToGoogleParam)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}

function cssFamily(family: string): string {
  return `'${family.replace(/'/g, "\\'")}', system-ui, sans-serif`;
}

function cssFamilySerif(family: string): string {
  return `'${family.replace(/'/g, "\\'")}', Georgia, serif`;
}

/** Biến CSS cho Tailwind — inject cùng màu trong layout */
export function getFontCssBlock(theme: FontTheme = fonts): string {
  return [
    ":root {",
    `  --font-sans: ${cssFamily(theme.sans.family)};`,
    `  --font-display: ${cssFamilySerif(theme.display.family)};`,
    `  --font-accent: ${cssFamilySerif(theme.accent.family)};`,
    "}",
  ].join("\n");
}

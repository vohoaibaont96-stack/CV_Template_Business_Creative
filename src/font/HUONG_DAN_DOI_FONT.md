# Hướng dẫn đổi font Google

Toàn bộ font website và CV lấy từ **một file**: [`config.ts`](./config.ts).

## Cách đổi nhanh

1. Mở [Google Fonts](https://fonts.google.com/) → chọn font → copy **tên font** (vd: `Be Vietnam Pro`).
2. Sửa trong `src/font/config.ts`:

```ts
export const fonts = {
  sans: { family: "Be Vietnam Pro", weights: [400, 500, 600, 700] },
  display: { family: "Be Vietnam Pro", weights: [600, 700] },
  accent: { family: "Lora", weights: [400], italic: true },
};
```

3. Lưu → `npm run dev` hoặc deploy.

## Ba vai trò font

| Vai trò | Dùng cho | Class Tailwind |
|---------|----------|----------------|
| `sans` | Thân chữ CV, toolbar, nút | `font-sans` |
| `display` | Họ tên, tiêu đề mục, tên dự án | `font-playfair` |
| `accent` | Tagline nghiêng, trích dẫn | `font-serif` |

## Preset có sẵn

Trong `config.ts` có `presets`: `creative`, `classic`, `minimal`, `editorial`, `vietnamese`.

```ts
import { presets } from "./config";

export const fonts = { ...presets.minimal };
```

## `weights` và `italic`

- `weights`: các độ đậm cần dùng — chỉ khai báo những gì font hỗ trợ trên Google Fonts.
- `italic: true`: tải thêm kiểu nghiêng (cho tagline / accent).

Ví dụ font chỉ có 400 và 700:

```ts
sans: { family: "Oswald", weights: [400, 700] },
```

## Tiếng Việt

Chọn font có hỗ trợ **Vietnamese** trên Google Fonts (bộ lọc Languages). Preset `vietnamese` dùng **Be Vietnam Pro** + **Lora**.

## Lưu ý

- Tên `family` phải **khớp chính xác** với Google Fonts (có dấu cách, viết hoa đúng).
- Không cần sửa `layout.tsx`, `tailwind.config.ts` hay component — chỉ `config.ts`.
- Tải font qua CDN Google; cần internet lần đầu khi mở site.

## Ví dụ: chỉ đổi tiêu đề sang Bebas Neue

```ts
display: { family: "Bebas Neue", weights: [400] },
```

Giữ `sans` và `accent` như cũ.

# Hướng dẫn đổi màu

Toàn bộ màu website và CV lấy từ **một file**: [`theme.ts`](./theme.ts).

## Cách đổi nhanh

1. Mở `src/color/theme.ts`.
2. Sửa mã hex trong object `brand` (màu chính) và `cv` (màu chữ).
3. Cập nhật `rgb` nếu bạn đổi `charcoal`, `coral`, `gold` hoặc `cream` (dùng cho độ trong suốt).
4. Lưu file và làm mới trình duyệt.

Không cần sửa `globals.css` hay `tailwind.config.ts` trừ khi thêm tên màu mới.

## Ý nghĩa từng nhóm

### `brand` — Thương hiệu & CV

| Tên | Dùng cho |
|-----|----------|
| `charcoal` | Header CV, sidebar, nút in chính |
| `warm`, `espresso` | Gradient sidebar (tối → sáng dần) |
| `coral` | Vị trí ứng tuyển, số mục, viền, bullet, nút active |
| `terracotta` | Vai trò dự án, link phụ |
| `gold` | Nhãn “Portfolio & CV”, badge thời gian |
| `cream` | Nền cột nội dung CV |
| `blush` | Nền pill công cụ, khung in ảnh |
| `mist` | Nền trang web bên ngoài CV |
| `paper` | Nền trắng CV |

### `cv` — Chữ

| Tên | Dùng cho |
|-----|----------|
| `ink` | Tiêu đề đậm |
| `body` | Đoạn văn chính |
| `muted` | Chữ phụ, bullet |
| `line` | Viền, kẻ ngăn |

### `rgb` — Trong suốt

Các hiệu ứng `rgba(..., 0.14)` cần dãy `R, G, B`. Ví dụ `#e85d4c` → `232, 93, 76`.

Tra cứu nhanh: mở màu trên [google.com/search?q=hex+to+rgb](https://www.google.com/search?q=hex+to+rgb) hoặc Figma.

## Preset có sẵn

Trong `theme.ts` có object `presets` (creative, navy, editorial). Để dùng preset **navy**:

```ts
export const brand = { ...presets.navy };
```

## Ví dụ: đổi accent sang xanh lá

```ts
coral: "#16a34a",
terracotta: "#15803d",
```

Và trong `rgb`:

```ts
coral: "22, 163, 74",
```

## Lưu ý in PDF

Bật **In nền** (background graphics) khi xuất PDF để giữ màu sidebar và header.

## File liên quan (tự đồng bộ)

- `src/app/layout.tsx` — inject biến CSS từ `theme.ts`
- `tailwind.config.ts` — class `bg-brand-coral`, `text-cv-body`, …
- `src/app/globals.css` — dùng `var(--brand-*)`

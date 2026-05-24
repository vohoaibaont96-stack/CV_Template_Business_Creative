# CV Template — Business Creative

Mẫu CV **một trang A4** cho **designer**, **content creator** và **visual brand** — editorial, portfolio-driven.

## Layout chuẩn ngành sáng tạo

| Vùng | Nội dung |
|------|----------|
| Header tối | Họ tên, vị trí, tagline, portfolio link |
| Sidebar trái (~33%) | Ảnh, năng lực sáng tạo, certs, ngôn ngữ |
| Main phải (~67%) | Mục tiêu → Học vấn → **Case study** → Hoạt động |

## Điểm nhấn thiết kế

- Palette **charcoal + coral + gold**
- Typography Google Fonts — `src/font/config.ts`
- Dự án dạng **case study** (Behance, chiến dịch social)
- Gallery portfolio — trang 2 khi in

## Ngôn ngữ

- Nhập **tiếng Việt** trong `src/data/cv.ts`
- Nút **English** → dịch tự động (Lingva / MyMemory)
- Tùy chọn: `MYMEMORY_EMAIL` trong `.env` (xem `.env.example`)

## Dữ liệu & hướng dẫn

| File | Mục đích |
|------|----------|
| `src/data/cv.ts` | Nội dung CV |
| `src/data/gallery.ts` | Ảnh carousel portfolio |
| `src/data/HUONG_DAN_NHAP_LIEU.md` | Hướng dẫn nhập liệu chi tiết |
| `src/color/HUONG_DAN_DOI_MAU.md` | Đổi màu |
| `src/font/HUONG_DAN_DOI_FONT.md` | Đổi font |
| `src/avatar/HUONG_DAN_ANH_DAI_DIEN.md` | Ảnh đại diện |

## Chỉnh sửa & xem

Sửa `src/data/cv.ts` → lưu → làm mới trình duyệt. Deploy qua Vercel: import repo GitHub, push để cập nhật.

## In PDF

**In / Xuất PDF** hoặc Ctrl+P → **A4** → **bật In nền** (background graphics).

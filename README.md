# CV Template — Business Creative × Tech Engineering

Mẫu CV **một trang A4** cho sinh viên Tech — phong cách **business-creative**: năng động, có chiều sâu thị giác, vẫn **chuẩn ATS** (text thật, không thanh % kỹ năng). Deploy trên **Vercel**.

## Điểm nhấn thiết kế

- Header navy gradient + tagline serif + chip điểm mạnh
- Sidebar tối với skill pills — cảm giác portfolio chuyên nghiệp
- Cột phải editorial: đánh số mục (01–04), project cards có accent bar
- Typography: **Plus Jakarta Sans** + **Instrument Serif**
- Màu: navy, ocean blue, accent cyan — tin cậy & năng động

## Ngôn ngữ

- Nhập liệu **chỉ bằng tiếng Việt** trong `src/data/cv.ts`.
- Nút **English** → dịch tự động sang tiếng Anh (nhãn mục + nội dung CV).
- **Dịch miễn phí** (không API key): ưu tiên [Lingva](https://github.com/tardisphere/Lingva-Translate), dự phòng [MyMemory](https://mymemory.translated.net/).
- Tùy chọn: `MYMEMORY_EMAIL` trong `.env` để tăng giới hạn dự phòng (xem `.env.example`).

## Dữ liệu

| File | Mục đích |
|------|----------|
| `src/data/cv.ts` | Nội dung CV (tiếng Việt) |
| `src/data/HUONG_DAN_NHAP_LIEU.md` | Hướng dẫn nhập liệu |

## Chạy local

```bash
npm install
npm run dev
```

## In PDF

**In / Xuất PDF** hoặc `Ctrl+P` → **A4** → bật **In nền** (background graphics).

## Deploy Vercel

Import repo GitHub → Next.js → Deploy. Sửa `cv.ts` và push để cập nhật.

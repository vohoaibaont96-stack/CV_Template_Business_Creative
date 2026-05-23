# Hướng dẫn nhập liệu — Business Creative × Tech Engineering

Tất cả nội dung CV hiển thị trên website được lấy từ **một file duy nhất**: `src/data/cv.ts`.

## Ngôn ngữ

- **Chỉ nhập liệu bằng tiếng Việt** trong `cv.ts` (họ tên, mô tả, dự án, mục tiêu…).
- Trên website, bấm **English** để **tự động dịch toàn bộ** sang tiếng Anh (tiêu đề mục + nội dung CV).
- Dịch vụ **miễn phí, không cần API key**: ưu tiên **Lingva** (mã nguồn mở), dự phòng **MyMemory**.
- Email, SĐT, URL GitHub/LinkedIn và tên công nghệ (React, Docker…) **không bị dịch**.
- Bấm **Tiếng Việt** để quay lại bản gốc ngay lập tức.
- (Tùy chọn) Thêm `MYMEMORY_EMAIL` trong `.env` nếu Lingva tạm lỗi — xem `.env.example`.

## Cách chỉnh sửa nhanh

1. Mở `src/data/cv.ts`.
2. Thay các giá trị trong dấu `[...]` bằng thông tin thật của bạn.
3. Chạy `npm run dev` để xem trước, hoặc deploy lên Vercel để cập nhật bản production.

## Cấu trúc dữ liệu

### `header` — Thông tin đầu trang

| Trường | Mô tả |
|--------|--------|
| `fullName` | Họ tên (nên VIẾT HOA trên CV in) |
| `position` | Vị trí ứng tuyển, ví dụ: `Frontend Developer Intern` |
| `tagline` | **1 câu** thể hiện năng lượng & thái độ làm việc (chủ động, sẵn sàng đóng góp) |
| `highlights` | Mảng **3–4** từ khóa ngắn (chip dưới tên): `["React", "Agile", "Problem Solver"]` |
| `phone`, `email`, `address` | Liên hệ |
| `github` | **Bắt buộc** — URL đầy đủ GitHub |
| `linkedin` | URL LinkedIn |

### `technicalSkills` — Kỹ năng chuyên môn (cột trái)

Mỗi mảng là một nhóm, hiển thị dạng danh sách (không dùng thanh %):

- `languages` — Ngôn ngữ lập trình
- `frameworks` — Framework/thư viện
- `tools` — Công cụ, hệ điều hành, cloud
- `databases` — Cơ sở dữ liệu

**Lưu ý:** Chỉ liệt kê kỹ năng bạn tự tin trả lời khi phỏng vấn.

### `certifications` — Chứng chỉ (tùy chọn)

Mảng object `{ name, detail? }`. Để trống `[]` nếu chưa có chứng chỉ.

### `languages` — Ngoại ngữ

`{ name, level }` — Mô tả mức độ bằng câu ngắn (ví dụ: đọc hiểu tài liệu kỹ thuật).

### `careerObjective` — Mục tiêu nghề nghiệp

Một chuỗi **2–3 câu**: mong muốn thực tập, đóng góp kỹ năng, học hỏi.

### `education` — Học vấn

| Trường | Ghi chú |
|--------|---------|
| `school`, `major`, `period` | Bắt buộc |
| `gpa` | Chỉ thêm nếu ≥ 3.0/4.0; bỏ trường hoặc để `undefined` nếu thấp hơn |

### `projects` — Dự án (quan trọng nhất)

Thiết kế sẵn cho **2 dự án**; có thể thêm phần tử thứ 3 nhưng cần giữ CV **đúng 1 trang A4** khi in.

| Trường | Ghi chú |
|--------|---------|
| `name`, `role`, `period` | Tiêu đề dự án |
| `techStack` | Mảng công nghệ cốt lõi |
| `summary` | 1–2 câu mô tả hệ thống |
| `bullets` | 2–4 bullet theo STAR/XYZ (hành động + kết quả số liệu nếu có) |
| `result` | Kết quả, điểm, bài học |
| `githubUrl` | Link source (khuyến khích) |

**Ví dụ bullet XYZ:** *Tối ưu truy vấn SQL bằng index → giảm 20% thời gian tải trang.*

### `activities` — Hoạt động phụ (tùy chọn)

Hackathon, CLB, tình nguyện. Mảng rỗng `[]` nếu không có.

## In / xuất PDF

Trên trình duyệt: **Ctrl+P** (hoặc Cmd+P) → chọn **Lưu dưới dạng PDF**.

- Khổ giấy: **A4**
- Lề: **Mặc định** hoặc **Tối thiểu**
- Bật **In nền** (Background graphics) nếu muốn giữ màu cột trái

## Deploy lên Vercel

1. Đẩy repo lên GitHub.
2. Import project trên [vercel.com](https://vercel.com) — framework **Next.js** (tự nhận).
3. Mỗi lần sửa `cv.ts` và push, Vercel tự build lại.

## ATS (máy quét CV)

- Website dùng text thật (không ảnh chữ), font hệ thống, cấu trúc heading rõ.
- Khi nộp CV file, nên xuất PDF từ trình duyệt hoặc copy sang `.docx` đơn giản nếu nhà tuyển dụng yêu cầu.

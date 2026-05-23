# Thư mục ảnh Portfolio

Đặt ảnh portfolio của bạn tại đây (`jpg`, `png`, `webp`, `svg`).

## Cách thêm ảnh mới

1. Copy file vào `public/gallery/` (ví dụ: `my-project-01.jpg`).
2. Mở `src/data/gallery.ts` và thêm:

```ts
{
  src: "/gallery/my-project-01.jpg",
  alt: "Mô tả ngắn cho accessibility",
  caption: "Tên dự án · Năm", // tùy chọn
},
```

3. Lưu file và refresh trang web — carousel (cuối trang) tự động hiển thị tất cả ảnh.

**Khi in PDF:** **Tất cả** ảnh trong danh sách — **3 ảnh mỗi hàng** (hàng 1: 3 ảnh, hàng 2: 3 ảnh, …), trang sau CV.

## Ảnh demo

Các file `demo-*.svg` là mẫu minh họa — có thể xóa và thay bằng ảnh thật của bạn.

## Gợi ý

- Tỷ lệ: **16:9** hoặc **4:3** cho đồng nhất trên carousel.
- Kích thước: ~1200–1600px chiều rộng là đủ cho web.
- Đặt tên file không dấu, không khoảng trắng (dùng `-`).

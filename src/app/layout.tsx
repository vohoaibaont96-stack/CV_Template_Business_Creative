import type { Metadata } from "next";
import { getThemeCssBlock } from "@/color/theme";
import { getFontCssBlock, getGoogleFontsUrl } from "@/font/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Creative — CV Designer & Content Creator",
  description:
    "Mẫu CV một trang A4 cho thiết kế hình ảnh, sáng tạo nội dung và visual brand — business creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleFontsUrl = getGoogleFontsUrl();

  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={googleFontsUrl} />
        <style
          dangerouslySetInnerHTML={{
            __html: `${getThemeCssBlock()}\n${getFontCssBlock()}`,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

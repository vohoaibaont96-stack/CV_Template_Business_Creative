import type { Metadata } from "next";
import { Instrument_Serif, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

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
  return (
    <html
      lang="vi"
      className={`${jakarta.variable} ${playfair.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}

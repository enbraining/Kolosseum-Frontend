import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";

const inter = LocalFont({
    src: "../public/fonts/PretendardVariable.woff2",
  });

export const metadata: Metadata = {
  title: "역사 기록 프로젝트",
  description: "처음과 끝을 기록할 콜로세움",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

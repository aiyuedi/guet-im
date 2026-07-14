import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "桂林电子科技大学 · 智能制造工程",
  description: "桂林电子科技大学智能制造工程专业——面向中国制造2025，聚焦智能装备、工业互联网与数字孪生。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}

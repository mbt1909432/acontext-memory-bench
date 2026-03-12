import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acontext Memory Benchmark",
  description: "基于 LongMemEval 测试 Acontext 长期记忆能力",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

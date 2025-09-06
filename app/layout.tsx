import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewMyArticle",
  description: "Participe de um congresso e seja avaliado!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-bt">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: "--font-instrument-sans",
  display: "swap",
})

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
    <html lang="pt-bt" className={instrumentSans.variable}>
      <body className={`antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

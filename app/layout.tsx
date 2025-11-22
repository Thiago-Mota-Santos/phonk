import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritmo Que Balança",
  description: "Sinta o poder do Plonk: batidas modificadas misturadas com o melhor do funk brasileiro. Uma experiência sonora única.",
  openGraph: {
    title: "Ritmo Que Balança",
    description: "Sinta o poder do Plonk: batidas modificadas misturadas com o melhor do funk brasileiro. Uma experiência sonora única.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Ritmo Que Balança - Plonk Brasil",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritmo Que Balança",
    description: "Sinta o poder do Plonk: batidas modificadas misturadas com o melhor do funk brasileiro. Uma experiência sonora única.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

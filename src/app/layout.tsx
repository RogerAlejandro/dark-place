import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import { BackgroundProvider } from "@/contexts/BackgroundContext";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dark Place - Fondos Oscuros',
  description: 'Colección de fondos oscuros inspirados en el espacio y universo 🚀🌒, para probar en sitios web ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white min-h-screen`}>
        <BackgroundProvider>
          {children}
          <Analytics />
        </BackgroundProvider>
      </body>
    </html>
  )
}

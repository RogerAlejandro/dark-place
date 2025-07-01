import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import { BackgroundProvider } from "@/contexts/BackgroundContext";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DarkPaz - Fondos Oscuros para Desarrolladores',
  description: 'Colección de fondos oscuros modernos para tus proyectos web',
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
        </BackgroundProvider>
      </body>
    </html>
  )
}

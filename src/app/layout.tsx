import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#2a2a2a36,#000)]"></div>
        </div>
        {children}
      </body>
    </html>
  )
}

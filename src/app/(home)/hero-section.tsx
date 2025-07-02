"use client"

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useBackground } from "@/contexts/BackgroundContext"

export function HeroSection() {
  const { resetBackground } = useBackground();
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="flex h-[30vh] justify-center mb-6">
          <div className="relative h-full w-auto aspect-square">
            <Image
              src="/logoico.webp"
              alt="DarkPaz Logo"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
        <h1 className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
          Dark
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 md:text-xl">
          Colección de fondos oscuros modernos para tus proyectos web. Haz clic en &quot;Preview&quot; para ver cómo se ve o &quot;Copiar&quot; para obtener el código.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/30 to-transparent rounded-lg opacity-0 group-hover:opacity-70 blur-sm transition-all duration-300 group-hover:duration-500"></div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="relative bg-gray-900 hover:bg-gray-800 border-gray-700 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://github.com/RogerAlejandro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub
              </a>
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 via-blue-400/40 to-blue-600/40 rounded-lg opacity-0 group-hover:opacity-70 blur-sm transition-all duration-300 group-hover:duration-500"></div>
            <Button
              variant="default"
              size="lg"
              className="relative bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => resetBackground()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                <path d="M16 16h5v5"></path>
              </svg>
              Reset Background
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

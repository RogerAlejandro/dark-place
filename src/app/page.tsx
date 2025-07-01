"use client"

import { HeroSection } from "./(home)/hero-section"
import { BackgroundsSection } from "./(home)/backgrounds-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BackgroundsSection />
    </main>
  )
}

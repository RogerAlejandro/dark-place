'use client';

import { Button } from '@/components/ui/button';
import { HeroSection } from "./(home)/hero-section"
import { BackgroundsSection } from "./(home)/backgrounds-section"

type BackgroundSnippet = {
  id: string;
  name: string;
  code: string;
};

const backgroundSnippets: BackgroundSnippet[] = [
  {
    id: 'gradient-1',
    name: 'Gradient Radial',
    code: '<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>',
  },
  // Más fondos se agregarán aquí
];

export default function Home() {
  const handlePreview = (code: string) => {
    // Implementar vista previa
    console.log('Preview:', code);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    // Aquí podrías agregar un toast de confirmación
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      <BackgroundsSection />
    </main>
  );
}

'use client';

import { Button } from "@/components/ui/button"
import backgrounds from "@/data/backgrounds.json"
import { useBackground } from "@/contexts/BackgroundContext";

interface BackgroundSnippet {
  id: string
  name: string
  code: string
}

// Combinar todos los fondos en un solo array
const backgroundSnippets: BackgroundSnippet[] = [
  ...backgrounds.gradients,
  ...backgrounds.effects,
  ...backgrounds.grids,
]

export function BackgroundsSection() {
  const { setCurrentBackground } = useBackground();

  const handlePreview = (code: string) => {
    setCurrentBackground(code);
  }

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      // Aquí podrías agregar un toast de confirmación
      console.log('Código copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar el código:', err);
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Nuestra Colección
        </h2>
        <div className="grid min-h-[calc(100vh-20rem)] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {backgroundSnippets.map((snippet) => (
            <div 
              key={snippet.id}
              className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-lg border border-gray-800/30 transition-all hover:border-gray-700/50"
            >
              <div className="absolute inset-0 -z-10">
                <div 
                  className="h-full w-full"
                  dangerouslySetInnerHTML={{ __html: snippet.code }}
                />
              </div>
              <div className="relative z-10 flex h-full items-center justify-center p-4">
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gray-900/90 hover:bg-gray-800/90 backdrop-blur-sm border-gray-700/50 text-white shadow-lg"
                    onClick={() => handlePreview(snippet.code)}
                  >
                    Preview
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gray-900/90 hover:bg-gray-800/90 backdrop-blur-sm border-gray-700/50 text-white shadow-lg"
                    onClick={() => handleCopy(snippet.code)}
                  >
                    Copiar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

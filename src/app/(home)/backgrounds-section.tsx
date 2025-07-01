'use client';

import { Button } from "@/components/ui/button"

type BackgroundSnippet = {
  id: string
  name: string
  code: string
}

const backgroundSnippets: BackgroundSnippet[] = [
  // Gradientes radiales
  {
    id: 'gradient-blue',
    name: 'Blue Radial',
    code: '<div class="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3b82f6_100%)]"></div>',
  },
  {
    id: 'gradient-purple',
    name: 'Purple Radial',
    code: '<div class="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#8b5cf6_100%)]"></div>',
  },
  
  // Patrones de cuadrícula
  {
    id: 'dark-grid',
    name: 'Dark Grid',
    code: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div></div>',
  },
  {
    id: 'slate-grid',
    name: 'Slate Grid',
    code: '<div class="relative h-full w-full bg-slate-950"><div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>',
  },
  
  // Patrones de puntos
  {
    id: 'dot-pattern',
    name: 'Dot Pattern',
    code: '<div class="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>',
  },
  {
    id: 'dot-pattern-dense',
    name: 'Dense Dots',
    code: '<div class="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:12px_12px]"></div>',
  },
  
  // Efectos especiales
  {
    id: 'radial-glow',
    name: 'Radial Glow',
    code: '<div class="relative h-full w-full bg-black"><div class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_400px_at_50%_50%,#3b82f640,#00000000)]"></div></div>',
  },
  {
    id: 'diagonal-lines',
    name: 'Diagonal Lines',
    code: '<div class="relative h-full w-full bg-black"><div class="absolute inset-0 bg-[linear-gradient(45deg,#1e1e1e_25%,transparent_25%),linear-gradient(-45deg,#1e1e1e_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1e1e1e_75%),linear-gradient(-45deg,transparent_75%,#1e1e1e_75%)] bg-[size:20px_20px]"></div></div>',
  }
]

export function BackgroundsSection() {
  const handlePreview = (code: string) => {
    // Implementar vista previa
    console.log('Preview:', code)
  }

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    // Aquí podrías agregar un toast de confirmación
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

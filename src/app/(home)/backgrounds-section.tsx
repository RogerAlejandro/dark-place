'use client'

import { Button } from "@/components/ui/button"

type BackgroundSnippet = {
  id: string
  name: string
  code: string
}

const backgroundSnippets: BackgroundSnippet[] = [
  {
    id: 'gradient-1',
    name: 'Gradient Radial',
    code: '<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>',
  },
  // Más fondos se agregarán aquí
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
    <section className="py-20">
      <div className="container mx-auto px-4">
    
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {backgroundSnippets.map((snippet) => (
            <div 
              key={snippet.id}
              className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <div 
                  className="h-full w-full"
                  dangerouslySetInnerHTML={{ __html: snippet.code }}
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="mb-4 text-lg font-medium">{snippet.name}</h3>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gray-800/50 hover:bg-gray-700/50"
                    onClick={() => handlePreview(snippet.code)}
                  >
                    Preview
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gray-800/50 hover:bg-gray-700/50"
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

'use client';

import { Button } from '@/components/ui/button';

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
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          DarkPaz
        </h1>
        <p className="mx-auto max-w-2xl text-gray-400 mb-6">
          Colección de fondos oscuros modernos para tus proyectos web. Haz clic en &quot;Preview&quot; para ver cómo se ve o &quot;Copiar&quot; para obtener el código.
        </p>
        <div className="flex gap-6 justify-center mt-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/30 to-transparent rounded-lg opacity-0 group-hover:opacity-70 blur-sm transition-all duration-300 group-hover:duration-500"></div>
            <Button 
              variant="outline"
              size="default"
              className="relative bg-gray-900 hover:bg-gray-800 border-gray-700 px-6 py-2 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => {}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              GitHub
            </Button>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 via-blue-400/40 to-blue-600/40 rounded-lg opacity-0 group-hover:opacity-70 blur-sm transition-all duration-300 group-hover:duration-500"></div>
            <Button 
              variant="default"
              size="default"
              className="relative bg-blue-600 hover:bg-blue-700 px-6 py-2 text-base font-medium transition-all duration-300 hover:scale-105"
              onClick={() => {}}
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
                  onClick={() => handlePreview(snippet.code)}
                  className="bg-gray-800/50 hover:bg-gray-700/50"
                >
                  Preview
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleCopy(snippet.code)}
                  className="bg-gray-800/50 hover:bg-gray-700/50"
                >
                  Copiar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

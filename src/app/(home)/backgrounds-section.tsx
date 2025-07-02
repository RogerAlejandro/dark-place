'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useBackground } from "@/contexts/BackgroundContext";
import { motion, AnimatePresence } from 'framer-motion';

// Definir la estructura de un snippet de fondo
interface BackgroundSnippet {
  id: string;
  name: string;
  code: string;
  category?: string;
}

// Definir el tipo para los fondos importados
interface BackgroundsData {
  gradients: BackgroundSnippet[];
  effects: BackgroundSnippet[];
  grids: BackgroundSnippet[];
  tops: BackgroundSnippet[];
  dots?: BackgroundSnippet[];
}

// Importar los fondos como un módulo
import rawBackgrounds from "@/data/backgrounds.json";

// Función para combinar todos los fondos en un solo array
function getAllBackgrounds(): BackgroundSnippet[] {
  const backgrounds = rawBackgrounds as unknown as BackgroundsData;
  const allSnippets: BackgroundSnippet[] = [];
  
  // Agregar cada categoría al array final
  Object.values(backgrounds).forEach(category => {
    if (Array.isArray(category)) {
      allSnippets.push(...category);
    }
  });
  
  return allSnippets;
}

const backgroundSnippets = getAllBackgrounds();

export function BackgroundsSection() {
  const { setCurrentBackground } = useBackground();
  const [notification, setNotification] = useState({ show: false, message: '' });

  const handlePreview = (code: string) => {
    setCurrentBackground(code);
    // Desplazarse al hero section
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleCopy = async (code: string, name: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setNotification({ show: true, message: `¡Código de "${name}" copiado!` });
      
      // Ocultar notificación después de 5 segundos
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
      
    } catch (err) {
      console.error('Error al copiar el código:', err);
      setNotification({ show: true, message: 'Error al copiar el código' });
      
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
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
                    onClick={() => handleCopy(snippet.code, snippet.name)}
                  >
                    Copiar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Notificación */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transform"
          >
            <div className="flex items-center space-x-3 rounded-lg bg-gray-900/95 px-6 py-4 shadow-2xl backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-emerald-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-100">{notification.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

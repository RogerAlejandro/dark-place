"use client"

import { createContext, useContext, ReactNode, useState } from 'react';

interface BackgroundContextType {
  currentBackground: string;
  setCurrentBackground: (bg: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [currentBackground, setCurrentBackground] = useState<string>('');

  return (
    <BackgroundContext.Provider value={{ currentBackground, setCurrentBackground }}>
      <div 
        className="fixed inset-0 -z-50 transition-colors duration-300"
        style={currentBackground ? { 
          background: currentBackground.includes('gradient') ? 
            currentBackground.match(/background:(.*?);/)?.[1]?.trim() || currentBackground : 
            'none'
        } : {}}
      >
        {currentBackground && (
          <div 
            className="absolute inset-0 -z-10"
            dangerouslySetInnerHTML={{ __html: currentBackground }}
          />
        )}
      </div>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}

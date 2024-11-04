"use client";
import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define un tipo para el contexto
interface ViewContextType {
  view: 'student' | 'teacher';
  toggleView: () => void;
}

// Crea el contexto con un valor por defecto
const ViewContext = createContext<ViewContextType | undefined>(undefined);

// Proveedor del contexto
export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<'student' | 'teacher'>('student'); // Valor por defecto

  const toggleView = () => {
    setView((prevView) => (prevView === 'student' ? 'teacher' : 'student'));
  };

  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
};

// Hook para usar el contexto
export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};

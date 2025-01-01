// src/context/ContextProvider.tsx

'use client';

import React, { createContext, useState, ReactNode } from 'react';

type TContextMasterProvider = {
  children: ReactNode;
};

type TContextMaster = {
  showAddOrcamento: boolean;
  showOrcamentos: boolean;
  visibleCount: number;
  searchTerm: string;
  setShowAddOrcamento: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOrcamentos: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

// Criação do contexto com valores padrão
const ContextMaster = createContext<TContextMaster>({
  showAddOrcamento: false,
  showOrcamentos: false,
  visibleCount: 3,
  searchTerm: '',
  setShowAddOrcamento: () => {},
  setShowOrcamentos: () => {},
  setVisibleCount: () => {},
  setSearchTerm: () => {},
});

export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  const [showAddOrcamento, setShowAddOrcamento] = useState<boolean>(false)
  const [showOrcamentos, setShowOrcamentos] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Valor do Contexto
  const contextValue: TContextMaster = {
    showAddOrcamento, setShowAddOrcamento,
    showOrcamentos, setShowOrcamentos,
    visibleCount, setVisibleCount,
    searchTerm, setSearchTerm,
  };

  return (
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  );
}
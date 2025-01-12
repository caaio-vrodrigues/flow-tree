// src/context/ContextProvider.tsx

'use client';

import React, { createContext, useState, ReactNode } from 'react';

type TContextMasterProvider = {
  children: ReactNode;
};

type TContextMaster = {
  showDropdown: boolean,
  searchValue: string,
  filteredDataLegth: number,
  visibleCount: number,
  setFilteredDataLegth: React.Dispatch<React.SetStateAction<number>>,
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>,
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
};

const ContextMaster = createContext<TContextMaster>({
  showDropdown: false,
  searchValue: '',
  filteredDataLegth: 0,
  visibleCount: 3,
  setFilteredDataLegth: () => {},
  setVisibleCount: () => {},
  setShowDropdown: () => {},
  setSearchValue: () => {},
});

export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  // Orcamentos.tsx
  const [filteredDataLegth, setFilteredDataLegth] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // ControlsElements.tsx
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const contextValue: TContextMaster = {
    showDropdown, setShowDropdown,
    searchValue, setSearchValue,
    filteredDataLegth, setFilteredDataLegth,
    visibleCount, setVisibleCount,
  };

  return (
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  );
};
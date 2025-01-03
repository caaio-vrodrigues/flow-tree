// src/context/ContextProvider.tsx

'use client';

import React, { createContext, useState, ReactNode } from 'react';

type TContextMasterProvider = {
  children: ReactNode;
};

type TContextMaster = {
  showDropdown: boolean,
  searchValue: string,
  filteredDataLegth: number;
  loading: boolean;
  showAddOrcamento: boolean;
  showOrcamentos: boolean;
  visibleCount: number;
  setFilteredDataLegth: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddOrcamento: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOrcamentos: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const ContextMaster = createContext<TContextMaster>({
  showDropdown: false,
  searchValue: '',
  filteredDataLegth: 0,
  loading: false,
  showAddOrcamento: false,
  showOrcamentos: false,
  visibleCount: 3,
  setFilteredDataLegth: () => {},
  setLoading: () => {},
  setShowAddOrcamento: () => {},
  setShowOrcamentos: () => {},
  setVisibleCount: () => {},
  setShowDropdown: () => {},
  setSearchValue: () => {},
});

export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  const [filteredDataLegth, setFilteredDataLegth] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [showAddOrcamento, setShowAddOrcamento] = useState<boolean>(false);
  const [showOrcamentos, setShowOrcamentos] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // ControlsElements.tsx
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const contextValue: TContextMaster = {
    showDropdown, setShowDropdown,
    searchValue, setSearchValue,
    filteredDataLegth, setFilteredDataLegth,
    loading, setLoading,
    showAddOrcamento, setShowAddOrcamento,
    showOrcamentos, setShowOrcamentos,
    visibleCount, setVisibleCount,
  };

  return (
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  );
};
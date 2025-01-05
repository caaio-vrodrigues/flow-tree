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
  loading: boolean,
  showAddOrcamento: boolean,
  visibleCount: number,
  showEstoque: boolean,
  showFluxoPagamentos: boolean,
  showNotas: boolean,
  showFaturas: boolean,
  showBoletos: boolean,
  showFornecedores: boolean,
  showClientes: boolean,
  showOrcamentos: boolean,
  showObras: boolean,
  showContratos: boolean,
  setFilteredDataLegth: React.Dispatch<React.SetStateAction<number>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setShowAddOrcamento: React.Dispatch<React.SetStateAction<boolean>>,
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>,
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  setShowEstoque: React.Dispatch<React.SetStateAction<boolean>>,
  setShowFluxoPagamentos: React.Dispatch<React.SetStateAction<boolean>>,
  setShowNotas: React.Dispatch<React.SetStateAction<boolean>>,
  setShowFaturas: React.Dispatch<React.SetStateAction<boolean>>,
  setShowBoletos: React.Dispatch<React.SetStateAction<boolean>>,
  setShowFornecedores: React.Dispatch<React.SetStateAction<boolean>>,
  setShowClientes: React.Dispatch<React.SetStateAction<boolean>>,
  setShowOrcamentos: React.Dispatch<React.SetStateAction<boolean>>,
  setShowObras: React.Dispatch<React.SetStateAction<boolean>>,
  setShowContratos: React.Dispatch<React.SetStateAction<boolean>>,
};

const ContextMaster = createContext<TContextMaster>({
  showDropdown: false,
  searchValue: '',
  filteredDataLegth: 0,
  loading: false,
  showAddOrcamento: false,
  visibleCount: 3,
  showEstoque: false,
  showFluxoPagamentos: false,
  showNotas: false,
  showFaturas: false,
  showBoletos: false,
  showFornecedores: false,
  showClientes: false,
  showOrcamentos: true,
  showObras: false,
  showContratos: false,
  setFilteredDataLegth: () => {},
  setLoading: () => {},
  setShowAddOrcamento: () => {},
  setShowOrcamentos: () => {},
  setVisibleCount: () => {},
  setShowDropdown: () => {},
  setSearchValue: () => {},
  setShowEstoque: () => {},
  setShowFluxoPagamentos: () => {},
  setShowNotas: () => {},
  setShowFaturas: () => {},
  setShowBoletos: () => {},
  setShowFornecedores: () => {},
  setShowClientes: () => {},
  setShowContratos: () => {},
  setShowObras: () => {},
});

export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  const [filteredDataLegth, setFilteredDataLegth] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [showAddOrcamento, setShowAddOrcamento] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // ControlsElements.tsx
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  // MenuNavegação.tsx
  const [showEstoque, setShowEstoque] = useState<boolean>(false);
  const [showFluxoPagamentos, setShowFluxoPagamentos] = useState<boolean>(false);
  const [showNotas, setShowNotas] = useState<boolean>(false);
  const [showFaturas, setShowFaturas] = useState<boolean>(false);
  const [showBoletos, setShowBoletos] = useState<boolean>(false);
  const [showFornecedores, setShowFornecedores] = useState<boolean>(false);
  const [showClientes, setShowClientes] = useState<boolean>(false);
  const [showOrcamentos, setShowOrcamentos] = useState<boolean>(true);
  const [showObras, setShowObras] = useState<boolean>(false);
  const [showContratos, setShowContratos] = useState<boolean>(false);

  const contextValue: TContextMaster = {
    showDropdown, setShowDropdown,
    searchValue, setSearchValue,
    filteredDataLegth, setFilteredDataLegth,
    loading, setLoading,
    showAddOrcamento, setShowAddOrcamento,
    visibleCount, setVisibleCount,
    showEstoque, setShowEstoque,
    showFluxoPagamentos, setShowFluxoPagamentos,
    showNotas, setShowNotas,
    showFaturas, setShowFaturas,
    showBoletos, setShowBoletos,
    showFornecedores, setShowFornecedores,
    showClientes, setShowClientes,
    showOrcamentos, setShowOrcamentos,
    showObras, setShowObras,
    showContratos, setShowContratos,
  };

  return (
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  );
};
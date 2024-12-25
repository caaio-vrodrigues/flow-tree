import React, { createContext, useState, ReactNode } from 'react';

// Interfaces
interface IFluxoPagamentos {
  doc: string;
  doc_id: number;
  forma_pagamento: string;
  fornecedor: string;
  id: number;
  obra: string;
  observacao: string;
  parcela_atual: number;
  parcelas_totais: number;
  situacao_pagamento: string;
  valor: number;
}

interface ITestData {
  id: number;
  fornecedor: string;
  valor: number;
  situacao: string;
  data: Date; // Pode ser string, dependendo de como você manipula datas
}

// Tipos para o Contexto
type TContextMasterProvider = {
  children: ReactNode;
};

type TContextMaster = {
  showAddLancamento: boolean;
  showFluxoPagamentos: boolean;
  showFornecedores: boolean;
  showEstoque: boolean;
  showOrcamentos: boolean;
  dataTblFluxoPagamentos: IFluxoPagamentos[] | null;
  dataTblTest: ITestData[] | null;
  setShowAddLancamento: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFluxoPagamentos: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFornecedores: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEstoque: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOrcamentos: React.Dispatch<React.SetStateAction<boolean>>;
  setDataTblFluxoPagamentos: React.Dispatch<React.SetStateAction<IFluxoPagamentos[] | null>>;
  setDataTblTest: React.Dispatch<React.SetStateAction<ITestData[] | null>>;
};

// Criação do contexto com valores padrão
const ContextMaster = createContext<TContextMaster>({
  showAddLancamento: false,
  showFluxoPagamentos: false,
  showFornecedores: false,
  showEstoque: false,
  showOrcamentos: false,
  dataTblFluxoPagamentos: null,
  dataTblTest: null,
  setShowAddLancamento: () => {},
  setShowFluxoPagamentos: () => {},
  setShowFornecedores: () => {},
  setShowEstoque: () => {},
  setShowOrcamentos: () => {},
  setDataTblFluxoPagamentos: () => {},
  setDataTblTest: () => {},
});

// Exportação do Contexto e Provider
export default ContextMaster;

export function ContextMasterProvider({ children }: TContextMasterProvider): React.ReactNode {
  // Estados
  const [dataTblFluxoPagamentos, setDataTblFluxoPagamentos] = useState<IFluxoPagamentos[] | null>(null);
  const [dataTblTest, setDataTblTest] = useState<ITestData[] | null>(null);

  // Estados de visibilidade
  const [showAddLancamento, setShowAddLancamento] = useState<boolean>(false);
  const [showFluxoPagamentos, setShowFluxoPagamentos] = useState<boolean>(false);
  const [showOrcamentos, setShowOrcamentos] = useState<boolean>(false);
  const [showEstoque, setShowEstoque] = useState<boolean>(false);
  const [showFornecedores, setShowFornecedores] = useState<boolean>(false);

  // Valor do Contexto
  const contextValue: TContextMaster = {
    showAddLancamento,
    setShowAddLancamento,
    showFluxoPagamentos,
    setShowFluxoPagamentos,
    dataTblFluxoPagamentos,
    setDataTblFluxoPagamentos,
    dataTblTest,
    setDataTblTest,
    showOrcamentos,
    setShowOrcamentos,
    showEstoque,
    setShowEstoque,
    showFornecedores,
    setShowFornecedores,
  };

  return (
    <ContextMaster.Provider value={contextValue}>
      {children}
    </ContextMaster.Provider>
  );
}
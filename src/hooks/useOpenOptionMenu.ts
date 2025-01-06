// src/components/header/right-block/navigation-menu/hooks/useOpenOptionMenu.ts

// react 
import { useContext } from "react";

// context
import ContextMaster from "@/context/ContextProvider";

type TuseOpenOptMenu = {
  clickedOption: string,
};

export const useOpenOptionMenu = () => {
  const {
    setShowEstoque, setShowFluxoPagamentos, setShowNotas, setShowFaturas,
    setShowBoletos, setShowFornecedores, setShowClientes, setShowOrcamentos,
    setShowObras, setShowContratos, setLoading, setShowAddOrcamento, 
    setShowDropdown, setSearchValue, setVisibleCount
  } = useContext(ContextMaster);

  const setFalse = [
    {descr: 'Estoque', func: setShowEstoque}, 
    {descr: 'Fluxo Pagamentos', func: setShowFluxoPagamentos}, 
    {descr: 'Notas', func: setShowNotas}, 
    {descr: 'Faturas', func: setShowFaturas},
    {descr: 'Boletos', func: setShowBoletos}, 
    {descr: 'Fornecedores', func: setShowFornecedores}, 
    {descr: 'Clientes', func: setShowClientes}, 
    {descr: 'Orçamentos', func: setShowOrcamentos},
    {descr: 'Obras', func: setShowObras}, 
    {descr: 'Contratos', func: setShowContratos}, 
  ];

  const handleOptionClick = ({ clickedOption }: TuseOpenOptMenu) => {
    setLoading(false);
    setShowAddOrcamento(false);
    setShowDropdown(false);
    setSearchValue('');
    setVisibleCount(3);

    setFalse.map(({descr, func}) => {
      func(false);
      if(descr === clickedOption){
        func(true);
      };
    });
  };

  return { handleOptionClick };
};
// src/components/main/orcamentos/Orcamentos.tsx

'use client'

// react
import { useContext } from 'react';

// context
import ContextMaster from '@/context/ContextProvider';

// components
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';
import { MostrarMais } from './mostrar-mais/MostrarMais';
import { FiltroOrcamentos } from './filtro-orcamentos/FiltroOrcamentos';

// data
import { orcamentosData } from '@/data/data-test/orcamentos-data';

// utils
import { funcSearch } from '@/utils/funcs/funcSearch';
import { isValidOrcamento } from '@/utils/search-validation/isValidOrcamento';

export const Orcamentos = () => {
  const { 
    visibleCount, searchValue, filteredDataLegth,
    setVisibleCount, setSearchValue, setFilteredDataLegth,
  } = useContext(ContextMaster);

  const handleSelect = (selectedOrcamento: string | number) => {
    setSearchValue(selectedOrcamento.toString());
  };

  const validOrcamentos = orcamentosData.filter(isValidOrcamento);

  return (
    <section>
      <ControlsElements 
        funcSearch={({ value }) => funcSearch({ value, setSearchValue })}
        onSelect={handleSelect}
        page={'orcamentos'}/>
      <FiltroOrcamentos 
        orcamentosData={validOrcamentos}
        searchValue={searchValue}
        setFilteredDataLegth={setFilteredDataLegth}
        visibleCount={visibleCount}/>
      <MostrarMais
        orcamentosDataLeng={filteredDataLegth} 
        setVisibleCount={setVisibleCount} 
        visibleCount={visibleCount}/>
    </section>
  );
};
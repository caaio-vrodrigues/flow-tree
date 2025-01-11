// src/components/main/orcamentos/Orcamentos.tsx

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
import { funcSearch } from '@/utils/funcSearch';
import { isValidOrcamento } from '@/utils/search-validation/isValidOrcamento';

export const Orcamentos = () => {
  const { 
    visibleCount, searchValue, showAddOrcamento, filteredDataLegth,
    setVisibleCount, setSearchValue, setShowAddOrcamento, setFilteredDataLegth,
  } = useContext(ContextMaster);

  const handleSelect = (selectedOrcamento: string | number) => {
    setSearchValue(selectedOrcamento.toString());
  };

  const validOrcamentos = orcamentosData.filter(isValidOrcamento);

  return (
    <section>
      <ControlsElements 
        funcSetAdd={setShowAddOrcamento} 
        funcSetClose={setShowAddOrcamento}
        funcSearch={({ value }) => funcSearch({ value, setSearchValue })}
        onSelect={handleSelect}/>
      <FiltroOrcamentos 
        orcamentosData={validOrcamentos}
        searchValue={searchValue}
        showAddOrcamento={showAddOrcamento}
        setFilteredDataLegth={setFilteredDataLegth}
        visibleCount={visibleCount}/>
      {!showAddOrcamento && 
        <MostrarMais
          orcamentosDataLeng={filteredDataLegth} 
          setVisibleCount={setVisibleCount} 
          visibleCount={visibleCount}/>}
    </section>
  );
};
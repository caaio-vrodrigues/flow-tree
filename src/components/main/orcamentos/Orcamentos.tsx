// src/components/main/orcamentos/Orcamentos.tsx

// react
import { useContext } from 'react';

// context
import ContextMaster from '@/context/ContextProvider';

// components
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';
import { MostrarMais } from './mostrar-mais/MostrarMais';
import { FiltroOrcamentos } from './filtro-orcamentos/FiltroOrcamentos';

// styles
import styles from './Orcamentos.module.css';

// data
import { orcamentosData } from '@/data/data-test/orcamentos-data';

// utils
import { funcSearch } from '@/utils/funcSearch';
import { isValidOrcamento } from './utils/isValidOrcamento';

export const Orcamentos = () => {
  const { 
    visibleCount, searchValue, showAddOrcamento, loading, filteredDataLegth,
    setVisibleCount, setSearchValue, setShowAddOrcamento, setLoading,
    setFilteredDataLegth,
  } = useContext(ContextMaster);

  const funcBack = () => {
    setShowAddOrcamento(false); 
    setSearchValue('');
  };

  const handleSelect = (selectedOrcamento: string | number) => {
    setSearchValue(selectedOrcamento.toString());
  };

  const validOrcamentos = orcamentosData.filter(isValidOrcamento);

  return (
    <section>
      <ControlsElements 
        funcBack={funcBack} 
        funcAdd={setShowAddOrcamento} 
        funcSearch={({ value }) => funcSearch({ value, setSearchValue, setLoading })} 
        options={validOrcamentos}
        onSelect={handleSelect}
        setLoading={setLoading}/>
      {loading ? 
        <div className={styles.loader}>Carregando...</div> 
        : <>
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
        </>}
    </section>
  );
};
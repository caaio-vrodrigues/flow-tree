// react
import { useContext } from 'react';

// context
import ContextMaster from '@/context/ContextProvider';

// components
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';
// import { FiltroPagamentos } from './filtro-pagamentos/FiltroPagamentos';
// import { MostrarMais } from '@/utils/mostrar-mais/MostrarMais';

// styles
import styles from './FluxoPagamentos.module.css';

// data
import { fluxoPagamentosData } from '@/data/data-test/fluxo-pagamentos-data';

// utils
import { funcSearch } from '@/utils/funcSearch';
import { isValidPagamento } from '@/utils/search-validation/isValidPagamento';

export const FluxoPagamentos = () => {
  const {
    setShowAddPagamento, setSearchValue
  } = useContext(ContextMaster);

  const handleSelect = (selectedOrcamento: string | number) => {
    setSearchValue(selectedOrcamento.toString());
  };

  const validPagamentos = fluxoPagamentosData.filter(isValidPagamento);

  return <>
    <section className={styles.secFluxoPagamentos}>
      <ControlsElements 
        funcSetAdd={setShowAddPagamento} 
        funcSetClose={setShowAddPagamento}
        funcSearch={({ value }) => funcSearch({ value, setSearchValue })}
        onSelect={handleSelect}
        options={validPagamentos}/>
    </section>
  </>
};
// src/components/main/fluxo-pagamentos/FluxoPagamentos.tsx

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

// utils
import { funcSearch } from '@/utils/funcs/funcSearch';

export const FluxoPagamentos = () => {
  const { setSearchValue } = useContext(ContextMaster);

  const handleSelect = (selectedOrcamento: string | number) => {
    setSearchValue(selectedOrcamento.toString());
  };

  return <>
    <section className={styles.secFluxoPagamentos}>
      <ControlsElements 
        funcSearch={({ value }) => funcSearch({ value, setSearchValue })}
        onSelect={handleSelect}/>
    </section>
  </>
};
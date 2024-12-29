// src/components/main/orcamentos/mostrar-mais/MostrarMais.tsx

//react
import { Dispatch, SetStateAction } from 'react';


import styles from './MostrarMais.module.css';

type TMostarMais = {
  visibleCount: number,
  orcamentosDataLeg: number,
  setVisibleCount: Dispatch<SetStateAction<number>>,
}

export const MostrarMais = ({ visibleCount, orcamentosDataLeg, setVisibleCount}: TMostarMais) => {
  const showMore = () => {
    setVisibleCount((prevCount: number) => prevCount + 3);
  };

  return(<>
    {visibleCount < orcamentosDataLeg && (
      <button className={styles.butShowMore} onClick={showMore}>
        Mostrar mais +
      </button>
    )}
  </>)
}
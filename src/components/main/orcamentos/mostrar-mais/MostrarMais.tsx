// src/components/main/orcamentos/mostrar-mais/MostrarMais.tsx

// react
import React from 'react';

// styles
import styles from './MostrarMais.module.css';

type TMostrarMaisProps = {
  orcamentosDataLeng: number;
  setVisibleCount: (count: number) => void;
  visibleCount: number;
};

export const MostrarMais: React.FC<TMostrarMaisProps> = ({ 
  orcamentosDataLeng, setVisibleCount, visibleCount 
}) => {

  return (
    <div className={styles.butShowMore}>
      {visibleCount < orcamentosDataLeng && 
        <button 
          onClick={() => setVisibleCount(visibleCount + 3)} 
          className={styles.showMoreButton}>
            Mostrar Mais
        </button>}
    </div>
  );
};
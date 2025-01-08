

// react
import React from 'react';

// styles
import styles from './MostrarMais.module.css';

type TMostrarMaisProps = {
  dataLeng: number;
  setVisibleCount: (count: number) => void;
  visibleCount: number;
};

export const MostrarMais = (props: TMostrarMaisProps) => {
  const { 
    dataLeng, setVisibleCount, visibleCount 
  } = props;

  return (
    <div className={styles.butShowMore}>
      {visibleCount < dataLeng && 
        <button 
          onClick={() => setVisibleCount(visibleCount + 3)} 
          className={styles.showMoreButton}>
            Mostrar +
        </button>}
    </div>
  );
};
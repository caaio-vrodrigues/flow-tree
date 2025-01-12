// src/app/global-error.tsx

'use client';

// react
import React from 'react';

// styles
import styles from '@/styles/styles.module.css';

type TErrorProps = {
  error: Error;
  reset: () => void;
};

const GlobalError = ({ error, reset }: TErrorProps) => {
  return (
    <div className={styles.error}>
      <h1>Ocorreu um erro :(</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
};

export default GlobalError;
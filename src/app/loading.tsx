// src/app/loading.tsx

'use client';

import React from 'react';

//styles
import styles from './styles/styles.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h1>Carregando...</h1>
      <p>Aguarde um momento enquanto carregamos os dados.</p>
      <div className={styles.spinner}></div> {/* Spinner visual */}
    </div>
  );
};

export default Loading;
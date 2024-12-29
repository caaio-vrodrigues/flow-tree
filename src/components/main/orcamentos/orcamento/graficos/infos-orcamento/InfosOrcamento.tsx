// src/components/main/orcamentos/orcamento/graficos/grafico-infos/InfosOrcamento.tsx

import React from 'react';
import styles from './InfosOrcamento.module.css';
import { formatMoeda } from '@/utils/formatMoeda';
import { formatDate } from '@/utils/formatDate';

type TGraficoInfos = {
  valor_fechado?: number,
  valor_estip_gasto?: number,
  dataInicio?: Date | string | null, // Aceita null agora
  prazoTermino?: Date | string | null, // Aceita null agora
  children: React.ReactNode;
};

export const InfosOrcamento = ({ 
  valor_fechado, valor_estip_gasto, dataInicio, prazoTermino, children 
}: TGraficoInfos) => {
  return (
    <div className={styles.wrapH2}>
      <h2>
        {dataInicio ? 'Início da obra:' : 'Valor fechado:'}
        <span className={styles.spanH2}>
          {dataInicio ? formatDate(dataInicio) : formatMoeda(valor_fechado)}
        </span>
      </h2>
      <h2>
        {prazoTermino ? 'Previsão de término:' : 'Custo estipulado:'}
        <span className={styles.spanH2}>
          {prazoTermino ? formatDate(prazoTermino) : formatMoeda(valor_estip_gasto)}
        </span>
      </h2>
      <div className={styles.wrapGrafico}>
        {children}
      </div>
    </div>
  );
};
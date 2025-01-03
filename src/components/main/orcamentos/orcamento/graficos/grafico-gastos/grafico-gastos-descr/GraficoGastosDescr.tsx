// src/components/main/orcamentos/orcamento/graficos/grafico-gastos/grafico-gastos-descr/GraficoGastosDescr.tsx

// react
import React from 'react';

// funcs
import { formatMoeda } from '@/utils/formatMoeda';

// styles
import styles from './GraficoGastosDescr.module.css';

type TGraficoGastosDescr = {
  colors: string[];
  porcentagens: {
    GastoMaterial: number;
    GastoServiço: number;
    GastoCombustível: number;
    GastoAlimentação: number;
  };
  valorDisponivel: number;
  lucroAtual: number;
  percentualLucro: number;
  gastoTotal: number;
};

export const GraficoGastosDescr = (props: TGraficoGastosDescr) => {
  const { 
    colors, porcentagens, valorDisponivel, 
    lucroAtual, percentualLucro, gastoTotal, 
  } = props;

  return (
    <div className={styles.legenda}>
      <ul className={styles.listaLegenda}>
        {Object.entries(porcentagens).map(([key, value], index) => (
          <li key={index}>
            <div className={styles.wrapLiInside}>
              <span
                className={styles.circulo}
                style={{ backgroundColor: colors[index] }} />
              <h3>{`${key}: `}</h3>
            </div>
            <p>{formatMoeda(valorDisponivel)}</p>
            <p className={styles.pPercent}>
              Percentual equivalente: {value.toFixed(2)}%
            </p>
          </li>
        ))}
      </ul>
      <div className={styles.wrapLucroEGastosH2}>
        <h4>
          Lucro Atual: {formatMoeda(lucroAtual)} ({percentualLucro.toFixed(2)}%)
        </h4>
        <h4>Gastos totais: {formatMoeda(gastoTotal)}</h4>
      </div>
    </div>
  );
};
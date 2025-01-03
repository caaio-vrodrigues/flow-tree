// src/components/main/orcamentos/orcamento/graficos/grafico-gastos/GraficoGastos.tsx

// react
import React from 'react';

// styles
import styles from './GraficoGastos.module.css';

// utils
import { calcularGastos } from './utils/calcularGastos';
import { criarSegmentosGrafico } from '../grafico-tempo/utils/criarSegmentosGrafico';
import { calcularAngulos } from '../grafico-tempo/utils/calcularAngulos';

//componentes
import { GraficoGastosDescr } from './grafico-gastos-descr/GraficoGastosDescr';

type TGraficoGastos = {
  gastos: {
    valor_fechado: number;
    valor_estip_gasto: number;
    gasto_material_obra: number;
    gasto_servico_obra: number;
    gasto_combustivel: number;
    gasto_alimentacao: number;
  };
};

export const GraficoGastos = ({ gastos }: TGraficoGastos ) => {
  const colors = [ '#4388ce', '#77a2b0', '#acdbe1', '#495f81', '#f6f5f0' ];

  const {
    porcentagens, gastoTotal, valorDisponivel,
    percentualDisponivel, lucroAtual, percentualLucro,
  } = calcularGastos({...gastos});

  const angles = calcularAngulos({
    porcentagens,
    disponivel: percentualDisponivel,
  });

  return <>
    <svg
      className={styles.svgGraphic}
      viewBox="0 0 220 220"
      aria-labelledby="graficoGastosTitle graficoGastosDesc">
        <title id="graficoGastosTitle">Gráfico de Gastos</title>
        <desc id="graficoGastosDesc">
          Gráfico de pizza mostrando a distribuição de gastos em relação ao valor estipulado.
        </desc>
        {angles.map((angle, index) => (
          <path
            key={index}
            d={criarSegmentosGrafico({ startAngle: angle[0], endAngle: angle[1] })}
            fill={colors[index]}
            className={styles.pieSegment}/>
        ))}
    </svg>
    <GraficoGastosDescr 
      colors={colors} 
      porcentagens={porcentagens}
      valorDisponivel={valorDisponivel}
      lucroAtual={lucroAtual}
      percentualLucro={percentualLucro}
      gastoTotal={gastoTotal}/>
  </>
};
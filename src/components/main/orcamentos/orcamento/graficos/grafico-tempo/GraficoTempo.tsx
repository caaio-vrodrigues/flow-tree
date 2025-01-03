// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/GraficoTempo.tsx

// react
import React, { useEffect, useState } from 'react';

// styles
import styles from './GraficoTempo.module.css';

// utils
import { calcularTempo } from './utils/calcularTempo';
import { calcularPorcentagemTempo } from './utils/calcularPorcentagemTempo';
import { criarSegmentosGrafico } from './utils/criarSegmentosGrafico';
import { calcularAngulos } from './utils/calcularAngulos';

// components
import { GraficoTempoDescr } from './grafico-tempo-descr/GraficoTempoDescr';

type TGraficoTempo = {
  tempo: {
    dataInicio: Date | null; 
    prazoTermino: Date | null;
  };
};

export const GraficoTempo = ({ tempo }: TGraficoTempo) => {

  const [tempoCalculado, setTempoCalculado] = useState({
    tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0,
  });

  const { tempoGasto, tempoDisponivel, tempoTotal } = tempoCalculado;
  const { dataInicio, prazoTermino } = tempo;
  const porcentagens = calcularPorcentagemTempo({ tempoGasto, tempoTotal });  
  const angulos = calcularAngulos(porcentagens);
  const colors = ['#f6f5f0', '#4388ce'];

  useEffect(() => {
    setTempoCalculado(calcularTempo({dataInicio, prazoTermino}));
  }, [dataInicio, prazoTermino]);

  return <>
    <svg
      className={styles.svgGraphic}
      viewBox="0 0 220 220"
      aria-labelledby="graficoTempoTitle graficoTempoDesc">
        <title id="graficoTempoTitle">Gráfico de Tempo</title>
        <desc id="graficoTempoDesc">
          Um gráfico de pizza mostrando a distribuição do tempo total para a obra e o tempo gasto.
        </desc>
        {angulos.map((angle, index) => (
          <path
            key={index}
            d={criarSegmentosGrafico({startAngle: angle[0], endAngle: angle[1]})}
            fill={colors[index % colors.length]} // Garantindo que o índice não exceda as cores disponíveis
            className={styles.pieSegment}/>
        ))}
    </svg>
    <GraficoTempoDescr 
      colors={colors} 
      porcentagens={porcentagens} 
      tempoDisponivel={tempoDisponivel} 
      tempoGasto={tempoGasto} 
      tempoTotal={tempoTotal}/>
  </>
};
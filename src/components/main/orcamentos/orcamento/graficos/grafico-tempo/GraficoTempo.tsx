// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/GraficoTempo.tsx

import React, { useEffect, useState } from 'react';
import styles from './GraficoTempo.module.css'; // Importando CSS Module

type TempoProps = {
  dataInicio: Date | null;  // Aceitando null
  prazoTermino: Date | null; // Aceitando null
};

export const GraficoTempo: React.FC<{ tempo: TempoProps }> = ({ tempo }) => {
  const { dataInicio, prazoTermino } = tempo;

  const [tempoCalculado, setTempoCalculado] = useState({
    tempoGasto: 0,
    tempoDisponivel: 0,
    tempoTotal: 0,
  });

  useEffect(() => {
    const calcularTempo = () => {
      const now = new Date();

      // Validação das datas de início e término
      if (!dataInicio || !prazoTermino) {
        console.error("Data de início ou de término inválida");
        return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
      }

      if (dataInicio >= prazoTermino) {
        console.error("A data de início deve ser anterior à data de término.");
        return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
      }

      const tempoGasto = Math.max(0, Math.min(now.getTime(), prazoTermino.getTime()) - dataInicio.getTime());
      const tempoTotal = Math.max(0, prazoTermino.getTime() - dataInicio.getTime());
      const tempoDisponivel = Math.max(0, tempoTotal - tempoGasto);

      return {
        tempoGasto,
        tempoDisponivel,
        tempoTotal,
      };
    };

    setTempoCalculado(calcularTempo());
  }, [dataInicio, prazoTermino]);

  const { tempoGasto, tempoDisponivel, tempoTotal } = tempoCalculado;

  // Cálculo da porcentagem de tempo total e tempo gasto
  const porcentagens = {
    tempoTotal: tempoTotal > 0 ? (tempoTotal / (tempoTotal + tempoGasto)) * 100 : 0,
    tempoGasto: tempoTotal > 0 ? (tempoGasto / (tempoTotal + tempoGasto)) * 100 : 0,
  };

  // Função para calcular os ângulos de cada segmento
  const calculateAngles = (percentages: Record<string, number>): [number, number][] => {
    const angles: [number, number][] = [];
    let cumulativeAngle = 0;

    for (const percentage of Object.values(percentages)) {
      const angle = (percentage / 100) * 360;
      angles.push([cumulativeAngle, cumulativeAngle + angle]);
      cumulativeAngle += angle;
    }

    return angles;
  };

  const angles = calculateAngles(porcentagens);

  // Função para criar os segmentos do gráfico
  const createPath = (startAngle: number, endAngle: number): string => {
    const radius = 100; // Raio do gráfico
    const x1 = 100 + radius * Math.cos((Math.PI / 180) * startAngle);
    const y1 = 100 + radius * Math.sin((Math.PI / 180) * startAngle);
    const x2 = 100 + radius * Math.cos((Math.PI / 180) * endAngle);
    const y2 = 100 + radius * Math.sin((Math.PI / 180) * endAngle);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M100,100 L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
  };

  // Cores para os segmentos
  const colors = ['#f6f5f0', '#4388ce']; // Tempo Total e Tempo Gasto

  const diasRestantes = tempoDisponivel / (1000 * 60 * 60 * 24); // Converte de milissegundos para dias

  return (
    <>
      <svg
        className={styles.svgGraphic}
        viewBox="0 0 220 220"
        aria-labelledby="graficoTempoTitle graficoTempoDesc"
      >
        <title id="graficoTempoTitle">Gráfico de Tempo</title>
        <desc id="graficoTempoDesc">
          Um gráfico de pizza mostrando a distribuição do tempo total para a obra e o tempo gasto.
        </desc>
        {angles.map((angle, index) => (
          <path
            key={index}
            d={createPath(angle[0], angle[1])}
            fill={colors[index % colors.length]} // Garantindo que o índice não exceda as cores disponíveis
            className={styles.pieSegment}
          />
        ))}
      </svg>
      <div className={styles.legenda}>
        <h2>Dias restantes para execução da obra: {diasRestantes.toFixed(0)} dias</h2>
        <ul className={styles.listaLegenda}>
          <li>
            <div className={styles.wrapLiInside}>
              <span
                className={styles.circulo}
                style={{ backgroundColor: colors[0] }} />
              <h4>Tempo Total: </h4>
            </div>
            <p>{(tempoTotal / (1000 * 60 * 60 * 24)).toFixed(0)} dias</p>
            <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoTotal.toFixed(2)}%</p>
          </li>
          <li>
            <div className={styles.wrapLiInside}>
              <span
                className={styles.circulo}
                style={{ backgroundColor: colors[1] }} />
              <h4>Tempo Gasto: </h4>
            </div>
            <p>{(tempoGasto / (1000 * 60 * 60 * 24)).toFixed(0)} dias</p>
            <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoGasto.toFixed(2)}%</p>
          </li>
        </ul>
      </div>
    </>
  );
};
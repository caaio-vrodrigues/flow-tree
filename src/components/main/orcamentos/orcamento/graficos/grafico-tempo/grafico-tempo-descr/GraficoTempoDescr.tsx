// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/grafico-tempo-descr/GraficoTempoDescr.tsx

// styles
import styles from './GraficoTempoDescr.module.css';

type TGraficoTempoDescr = {
  colors: string[]; 
  tempoTotal: number; 
  tempoGasto: number; 
  tempoDisponivel: number;
  porcentagens: { 
    tempoTotal: number; 
    tempoGasto: number;
  };
};

export const GraficoTempoDescr = ({ 
  colors, tempoTotal, tempoGasto, tempoDisponivel, porcentagens
}: TGraficoTempoDescr) => {

  const diasRestantes = tempoDisponivel / (1000 * 60 * 60 * 24);

  return <>
    <div className={styles.legenda}>
      <ul className={styles.listaLegenda}>
        <li>
          <div className={styles.wrapLiInside}>
            <span
              className={styles.circulo}
              style={{ backgroundColor: colors[0] }} />
            <h3>Tempo Total: </h3>
          </div>
          <p>{(tempoTotal / (1000 * 60 * 60 * 24)).toFixed(0)} dias</p>
          <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoTotal.toFixed(2)}%</p>
        </li>
        <li>
          <div className={styles.wrapLiInside}>
            <span
              className={styles.circulo}
              style={{ backgroundColor: colors[1] }} />
            <h3>Tempo Gasto: </h3>
          </div>
          <p>{(tempoGasto / (1000 * 60 * 60 * 24)).toFixed(0)} dias</p>
          <p className={styles.pPercent}>Percentual equivalente: {porcentagens.tempoGasto.toFixed(2)}%</p>
        </li>
      </ul>
      <h2>Dias restantes para execução da obra: {diasRestantes.toFixed(0)} dias</h2>
    </div>
  </>
};
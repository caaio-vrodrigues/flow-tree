
// styles
import styles from '../OrcamentosInfosBasic.module.css';

// utils
import { formatMoeda } from '@/utils/formatMoeda';
import { formatDate } from '@/utils/formatDate';

type TValoresPrazos = {
  inicio_execucao: Date | null,
  previsao_termino: Date | null,
  valor_fechado: number,
  valor_estip_gasto: number,
};

export const ValoresPrazos = (props: TValoresPrazos) => {
  const { 
    inicio_execucao, previsao_termino, valor_fechado, valor_estip_gasto 
  } = props;
  
  return <>
    <div className={styles.wrapH2InfosCliente}>
      <h2>Início da obra: 
        <span className={styles.spanH2}>{formatDate(inicio_execucao)}</span>
      </h2>
      <h2>Previsão de término: 
        <span className={styles.spanH2}>{formatDate(previsao_termino)}</span>
      </h2>
      <h2>Valor fechado: 
        <span className={styles.spanH2}>{formatMoeda(valor_fechado)}</span>
      </h2>
      <h2>Custo estipulado: 
        <span className={styles.spanH2}>{formatMoeda(valor_estip_gasto)}</span>
      </h2>
    </div>
  </>
};
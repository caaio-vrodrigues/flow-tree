// src/components/main/orcamentos/orcamento/orcamento-infos-basic/OrcamentosInfosBasic.tsx

// utils
import { formatDate } from '@/utils/formatDate';
import { formatMoeda } from '@/utils/formatMoeda';

// styles
import styles from './OrcamentosInfosBasic.module.css';

type TOrcamentosInfosBasic = {
  data_emissao: Date,
  cliente: string,
  cnpj_cliente: string,
  situacao_orcamento: string,
  inicio_execucao: Date | null,
  previsao_termino: Date | null,
  valor_fechado: number,
  valor_estip_gasto: number,
};

export const OrcamentosInfosBasic = ({ 
  data_emissao, cliente, cnpj_cliente, situacao_orcamento,
  inicio_execucao, previsao_termino, valor_estip_gasto, valor_fechado,
}: TOrcamentosInfosBasic) => {
  return(<>
    <div className={styles.wrapH2InfosCliente}>
      <h2>Emitido:
        <span className={styles.spanH2}>
          {formatDate(data_emissao)}
        </span>
      </h2>
      <h2>
        Cliente:
        <span className={styles.spanH2}>
          {cliente}
        </span>
      </h2>
      <h2>
        CNPJ:
        <span className={styles.spanH2}>
          {cnpj_cliente}
        </span>
      </h2>
      <h2>
        Situação:
        <span className={styles.spanH2}>
          {situacao_orcamento}
        </span>
      </h2>
    </div>
    <div className={styles.wrapH2InfosCliente}>
      <h2>
        Início da obra: <span className={styles.spanH2}>{formatDate(inicio_execucao)}</span>
      </h2>
      <h2>
        Previsão de término: <span className={styles.spanH2}>{formatDate(previsao_termino)}</span>
      </h2>
      <h2>
        Valor fechado: <span className={styles.spanH2}>{formatMoeda(valor_fechado)}</span>
      </h2>
      <h2>
        Custo estipulado: <span className={styles.spanH2}>{formatMoeda(valor_estip_gasto)}</span>
      </h2>
    </div>
  </>);
};
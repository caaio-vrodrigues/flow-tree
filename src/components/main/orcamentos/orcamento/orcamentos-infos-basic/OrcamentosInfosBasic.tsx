// src/components/main/orcamentos/orcamento/orcamento-infos-basic/OrcamentosInfosBasic.tsx

// utils
import { formatDate } from '@/utils/formatDate';

// styles
import styles from './OrcamentosInfosBasic.module.css';

type TOrcamentosInfosBasic = {
  data_emissao: Date,
  cliente: string,
  cnpj_cliente: string,
  situacao_orcamento: string,
};

export const OrcamentosInfosBasic = ({ 
  data_emissao, cliente, cnpj_cliente, situacao_orcamento
}: TOrcamentosInfosBasic) => {
  return(
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
  );
};
// src/components/main/orcamentos/orcamento/orcamento-infos-basic/OrcamentosInfosBasic.tsx

// components
import { ValoresPrazos } from './valores-prazos/ValoresPrazos';

// utils
import { formatDate } from '@/utils/funcs/formatDate';

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

export const OrcamentosInfosBasic = (props: TOrcamentosInfosBasic) => {
  const { 
    data_emissao, cliente, cnpj_cliente, situacao_orcamento,
    inicio_execucao, previsao_termino, valor_estip_gasto, valor_fechado,
  } = props;
  
  const InfosBasic = <>
    <div className={styles.wrapH2InfosCliente}>
      <h2>Emitido:
        <span className={styles.spanH2}>{formatDate(data_emissao)}</span>
      </h2>
      <h2>Cliente:
        <span className={styles.spanH2}>{cliente}</span>
      </h2>
      <h2>CNPJ:
        <span className={styles.spanH2}>{cnpj_cliente}</span>
      </h2>
      <h2>Situação:
        <span className={styles.spanH2}>{situacao_orcamento}</span>
      </h2>
    </div>
  </>

  return <>
    {InfosBasic}
    <ValoresPrazos 
      inicio_execucao={inicio_execucao} 
      previsao_termino={previsao_termino} 
      valor_estip_gasto={valor_estip_gasto} 
      valor_fechado={valor_fechado}/>
  </>;
};
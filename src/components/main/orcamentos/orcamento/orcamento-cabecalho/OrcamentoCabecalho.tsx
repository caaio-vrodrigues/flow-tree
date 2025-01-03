// src/components/main/orcamentos/orcamento/orcamento-cabecalho/OrcamentoCabecalho.tsx

//styles
import styles from './OrcamentoCabecalho.module.css';

//components
import { CustomButton } from '@/utils/custom-button/CustomButton';

//icon
import { faBoxArchive, faEdit } from '@fortawesome/free-solid-svg-icons';

type TOrcamentoCabecalho = {
  num_orcam: number | string,
  obra: string,
};

export const OrcamentoCabecalho = ({ num_orcam, obra }: TOrcamentoCabecalho) => {
  return (
    <div className={styles.wrapH1AndButtons}>
      <h1>Orçamento nº {num_orcam} - 
        <span>{obra}</span>
      </h1>
      <div className={styles.wrapButtons}>
        <CustomButton 
          icon={faBoxArchive}
          msgToolTipe='Estoque'
          onClick={() => {}}/>
        <CustomButton 
          icon={faEdit}
          msgToolTipe='Editar'
          onClick={() => {}}/>
      </div>
    </div>
  );
};
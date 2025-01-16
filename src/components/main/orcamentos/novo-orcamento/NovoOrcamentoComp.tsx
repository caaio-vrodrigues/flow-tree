'use client';

// styles
import styles from './NovoOrcamentoComp.module.css';

// components
import { CustomButton } from '@/utils/custom-button/CustomButton';
import { FormAddOrcamento } from './form-add-orcamento/FormAddOrcamento';

// icon
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const NovoOrcamentoComp = () => {
  return (
    <main className={styles.mainNovoOrcam}>
      <div className={styles.wrapContent}>
        <CustomButton 
          msgToolTipe='Voltar'
          icon={faArrowLeft}
          linkVoltar='/orcamentos'/>
        <FormAddOrcamento/>        
      </div>
    </main>
  );
};
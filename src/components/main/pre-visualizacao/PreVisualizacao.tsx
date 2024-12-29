// src/components/main/pre-visualizacao/PreVisualizacao.tsx

//styles
import styles from './PreVisualizacao.module.css';

//components
import { PreviewPagamentos } from "./prview-pagamentos/PreviewPagamentos";

export const PreVisualizacao = () => {
  return(
    <section className={styles.secPrevisu}>
      <PreviewPagamentos/>
    </section>
  );
};
// src/components/main/Main.tsx

//styles
import styles from './Main.module.css';

//components
import { PreviewPagamentos } from './prview-pagamentos/PreviewPagamentos';
import { Orcamentos } from './orcamentos/Orcamentos';

export const Main = () => {
  return(
    <main className={styles.main}>
      <h1 className={styles.h1MainSEO}>Análises e Recursos</h1>
      <div className={styles.wrapMainContent}>
        <PreviewPagamentos/>
        <Orcamentos/>
      </div>
    </main>
  );
};
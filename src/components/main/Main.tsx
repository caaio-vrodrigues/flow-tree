// src/components/main/Main.tsx

//styles
import styles from './Main.module.css';

//components
import { PreVisualizacao } from './pre-visualizacao/PreVisualizacao';
import { Orcamentos } from './orcamentos/Orcamentos';

export const Main = () => {
  return(
    <main className={styles.main}>
      <div className={styles.wrapMainContent}>
        <PreVisualizacao/>
        <Orcamentos/>
      </div>
    </main>
  );
};
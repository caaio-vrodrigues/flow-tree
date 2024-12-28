import styles from './Main.module.css';

//components
import { PreVisualizacao } from './pre-visualizacao/PreVisualizacao';

export const Main = () => {
  return(
    <main className={styles.main}>
      <div className={styles.wrapMainContent}>
        <PreVisualizacao/>
      </div>
    </main>
  )
}
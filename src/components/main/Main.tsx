// src/components/main/Main.tsx

//react
import { ReactNode } from 'react'; // Importando o ReactNode

//styles
import styles from './Main.module.css';

//components
import { PreviewPagamentos } from './prview-pagamentos/PreviewPagamentos';

type TMain = {
  children?: ReactNode;
};

export const Main = ({ children }: TMain) => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapMainContent}>
        {children ? children : <PreviewPagamentos/>}
      </div>
    </main>
  );
};
// src/components/main/Main.tsx

// react
import { useContext } from 'react';

//styles
import styles from './Main.module.css';

//components
import { PreviewPagamentos } from './prview-pagamentos/PreviewPagamentos';
import { Orcamentos } from './orcamentos/Orcamentos';
import { Estoque } from './estoque/Estoque';
import { FluxoPagamentos } from './fluxo-pagamentos/FluxoPagamentos';
import { NotasFiscais } from './notas-fiscais/NotasFiscais';
import { Faturas } from './faturas/Faturas';
import { Boletos } from './boletos/Boletos';
import { Fornecedores } from './fornecedores/Fornecedores';
import { Clientes } from './clientes/Clientes';
import { Obras } from './obras/Obras';
import { Contratos } from './contratos/Contratos';

// context
import ContextMaster from '@/context/ContextProvider';

export const Main = () => {
  const { 
    showEstoque, showFluxoPagamentos, showNotas, showFaturas, showBoletos, 
    showFornecedores, showClientes, showOrcamentos, showObras, showContratos,
  } = useContext(ContextMaster);

  return(
    <main className={styles.main}>
      <h1 className={styles.h1MainSEO}>Análises e Recursos</h1>
      <div className={styles.wrapMainContent}>
        <PreviewPagamentos/>
        {showEstoque && <Estoque/>}
        {showFluxoPagamentos && <FluxoPagamentos/>}
        {showNotas && <NotasFiscais/>}
        {showFaturas && <Faturas/>}
        {showBoletos && <Boletos/>}
        {showFornecedores && <Fornecedores/>}
        {showClientes && <Clientes/>}
        {showOrcamentos && <Orcamentos/>}
        {showObras && <Obras/>}
        {showContratos && <Contratos/>}
      </div>
    </main>
  );
};
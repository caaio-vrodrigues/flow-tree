// src/components/main/orcamentos/novo-orcamento/form-add-orcamento/FormAddOrcamento.tsx

// styles
import styles from './FormAddOrcamento.module.css';

export const FormAddOrcamento = () => {
  return (
    <form className={styles.formAddOrcamento}>
      <div className={styles.containerInputs}>
        <div className={styles.wrapInpuAndLabel}>
          <label htmlFor="orcamentoNome">Nome do Orçamento:</label>
          <input type="text" id="orcamentoNome" name="orcamentoNome" />
        </div>
        <div className={styles.wrapInpuAndLabel}>
          <label htmlFor="orcamentoValor">Valor:</label>
          <input type="text" id="orcamentoValor" name="orcamentoValor" />
        </div>
        <div className={styles.wrapInpuAndLabel}>
          <label htmlFor="orcamentoDescricao">Descrição:</label>
          <input type="text" id="orcamentoDescricao" name="orcamentoDescricao" />
        </div>
        <div className={styles.wrapInpuAndLabel}>
          <label htmlFor="orcamentoData">Data:</label>
          <input type="text" id="orcamentoData" name="orcamentoData" />
        </div>
        <div className={styles.wrapInpuAndLabel}>
          <label htmlFor="orcamentoResponsavel">Responsável:</label>
          <input type="text" id="orcamentoResponsavel" name="orcamentoResponsavel" />
        </div>
      </div>
      <button type="submit">Adicionar Orçamento</button>
    </form>
  );
};
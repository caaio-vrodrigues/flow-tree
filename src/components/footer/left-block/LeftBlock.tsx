//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './LeftBlock.module.css';

export const LeftBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.leftBlock}`}>
      <h1>Descrições</h1>
      <div>
        <h2>Objetivo: </h2>
        <p>{`Esse sistema web é um modelo feito com o intuito de organizar dados em geral como: fornecer prévias, levantamentos, acompanhamento de fluxo de caixa, orçamentos, organização de documentos, dados de clientes/fornecedores, estoque... Sendo que, quaisquer outors tipos de informações que sejam relevantes podem ser geradas através de novas funcionalidades implementadas.`}</p>
        <h2>{`Desenvolvimento e Design no Front-End:`}</h2>
        <p>Caio Vinicius Rodrigues</p>
        <h2>Programação Back-End:</h2>
        <p>Caio Vinicius Rodrigues</p>
        <h2>Administração de Banco de Dados:</h2>
        <p>Caio Vinicius Rodrigues</p>
      </div>
    </section>
  )
}
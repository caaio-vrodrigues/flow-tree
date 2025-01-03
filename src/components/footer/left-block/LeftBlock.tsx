// components/footer/left-block/LeftBlock.tsx

//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './LeftBlock.module.css';

export const LeftBlock = () => {
  const pText1 = `Esse sistema web é um modelo feito com o intuito de organizar dados em geral, como: fornecer prévias, levantamentos, acompanhamento de fluxo de caixa, orçamentos, organização de documentos e dados de clientes/fornecedores, estoque... 
  Quaisquer outors tipos de informações que sejam relevantes podem ser facilmente geradas implementando novas funcionalidades.`;

  const pText2 = `'Todo o design foi desenvolvido de forma pura utilizando as ferramentas nativas do html, css e javascript.'`;

  return(
    <section className={`${footStyles.footBlocks} ${styles.leftBlock}`}>
      <h1>Descrições</h1>
      <div>
        <h2>Objetivo: </h2>
        <p>{pText1}</p>
        <p>{pText2}</p>
        <h2>{`Desenvolvimento e Design no Front-End, Programação Back-End e Administração de Banco de Dados:`}</h2>
        <p>Caio Vinicius Rodrigues</p>
      </div>
    </section>
  )
}
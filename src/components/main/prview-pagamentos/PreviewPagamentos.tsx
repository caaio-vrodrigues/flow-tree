// src/components/main/pre-visualizacao/preview-pagamentos/PreviewPagamentos.tsx

// hooks
import { useOpenOptionMenu } from '@/hooks/useOpenOptionMenu';

//styles
import styles from './PreviewPagamentos.module.css';

//data
import { previsoesPagamentos } from '@/data/data-test/previsoes-pagamentos';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const PreviewPagamentos = () => {
  const { handleOptionClick } = useOpenOptionMenu();
  
  return(
    <section className={styles.secPreviewPag}>
      <button onClick={() => handleOptionClick()}>
        <h1>Fluxo Pagamentos <FontAwesomeIcon icon={faArrowRight}/></h1>
      </button>
      <div className={styles.wrapArticlesPagamentos}>
        {previsoesPagamentos.map(prev => {
          return (
            <article key={prev.id}>
              <h2>{prev.title}</h2>
              <h3>R$ {prev.value}</h3>
            </article>
          )})}
      </div>
    </section>
  );
};

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faTree } from '@fortawesome/free-solid-svg-icons';

//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './CenterBlock.module.css';

export const CenterBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.centerBlock}`}>
      <div className={styles.wrapCopy}>
        <h1>Flow Tree Sistem</h1>
        <FontAwesomeIcon icon={faTree}/>
      </div>
      <div className={styles.wrapCopy}>
        <h1>Caio Vinicius Rodrigues</h1>
        <FontAwesomeIcon icon={faCopyright}/>
      </div>
    </section>
  )
}
// components/footer/center-block/CenterBlock.tsx

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './CenterBlock.module.css';

export const CenterBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.centerBlock}`}>
      <div className={styles.wrapLogo}>
        <FontAwesomeIcon icon={faTree}/>
        <h1 className={styles.logoH1}>SFlow Tree</h1>
      </div>
      <div className={styles.wrapCopy}>
        <h2 className={styles.copyH1}>Caio Vinicius Rodrigues</h2>
        <svg 
          className={styles.iconCopy}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512">
          <path 
          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
          fill='currentColor'/>
        </svg>
      </div>
    </section>
  )
}
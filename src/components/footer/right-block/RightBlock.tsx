
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//styles
import footStyles from '@/components/footer/Footer.module.css';
import styles from './RightBlock.module.css';

export const RightBlock = () => {
  return(
    <section className={`${footStyles.footBlocks} ${styles.rightBlock}`}>
      <FontAwesomeIcon icon={faEnvelope}/>
    </section>
  )
}
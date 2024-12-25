//styles
import styles from './LeftBlock.module.css';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';


export const LeftBlock = () => {
  return (
    <div className={`${styles.leftBlock}`}>
      <div className={styles.wrapLogo}>
        <FontAwesomeIcon icon={faTree}/>
        <p>Flow Tree</p>
      </div>
    </div>
  );
};
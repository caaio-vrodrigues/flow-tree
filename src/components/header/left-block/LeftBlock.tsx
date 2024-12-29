// src/components/header/left-block/LeftBlock.tsx

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
        <span>SFlow Tree</span>
      </div>
    </div>
  );
};
import Link from "next/link";

import styles from '@/styles/styles.module.css';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icon
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return <>
    <div className={styles.notFound}>
      <h1>404 - Página Indisponível</h1>
      <Link 
        className={styles.linkHome} 
        href={'/'}>
        <span>
          <FontAwesomeIcon 
            className={styles.arrowLeftIcon}
            icon={faArrowLeft}/>
          Voltar para Home
        </span>
      </Link>
    </div>
  </>
};

export default NotFound;
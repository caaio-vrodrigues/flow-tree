// src/components/header/right-block/RightBlock.tsx

//styles
import styles from './RightBlock.module.css';

//component
import { IconsComp } from './icons-comp/IconsComp';

export const RightBlock = () => {
  return(
    <div className={`${styles.rightBlock}`}>
      <IconsComp/>
    </div>
  );
};
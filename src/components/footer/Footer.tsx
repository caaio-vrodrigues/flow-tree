// components/footer/Footer.tsx

import { LeftBlock } from './left-block/LeftBlock';
import { CenterBlock } from './center-block/CenterBlock';
import { RightBlock } from './right-block/RightBlock';

//styles
import styles from './Footer.module.css';

export const Footer = () => 
  <footer className={styles.foot}>
    <div className={styles.wrapFootBlocks}>
      <LeftBlock/>
      <CenterBlock/>
      <RightBlock/>
    </div>
  </footer>
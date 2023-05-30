import { Container } from '@/components';
import styles from './Loader.module.scss';
import { FC } from 'react';


export const Loader: FC = () => {

  return (
    <Container>
      <div className={styles.loader}>
        <div className={styles['loadingio-spinner-spin-iv77lwh27og']}>
          <div className={styles["ldio-4vlqa9t6l2s"]}>
            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
          </div></div>
      </div>
    </Container>
  )
};

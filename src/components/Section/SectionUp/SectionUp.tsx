import { SecUp } from '../Section';
import styles from './SectionUp.module.scss';

type Props = {
  SecUp: SecUp;
};
export const SectionUp = ({ SecUp }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={SecUp.img} alt={SecUp.img} className={styles.img} />
      <div className={styles.block}>
        <h2 className={styles.block__title}>{SecUp.title}</h2>
        <p className={styles.block__text}>{SecUp.text[0]}</p>
        <p className={styles.block__text}>{SecUp.text[1]}</p>
      </div>
    </div>
  );
};

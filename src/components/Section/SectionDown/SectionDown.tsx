import { SecDown } from '../Section';
import styles from './SectionDown.module.scss';

type Props = {
  SecDown: SecDown;
};

export const SectionDown = ({ SecDown }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h2 className={styles.block__title}>{SecDown.title}</h2>
        <p className={styles.block__text}>{SecDown.text[0]}</p>
        <p className={styles.block__text}>{SecDown.text[1]}</p>
      </div>
      <img src={SecDown.img} alt={SecDown.img} className={styles.img} />
    </div>
  );
};

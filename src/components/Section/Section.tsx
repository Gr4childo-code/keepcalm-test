import styles from './Section.module.scss';
import { TitleExtra } from '../global/TitleExtra/TitleExtra';
import { SectionUp } from './SectionUp/SectionUp';
import { SectionDown } from './SectionDown/SectionDown';

export type SecUp = {
  text: string[];
  img: string;
  title: string;
};
export type SecDown = SecUp;
type Props = {
  titleExtra: string;

  SecUp: SecUp;
  SecDown: SecDown;
};
export const Section = ({ SecUp, SecDown, titleExtra }: Props) => {
  return (
    <section className={styles.section}>
      <TitleExtra text={titleExtra} />
      <SectionUp SecUp={SecUp} />
      {/* <div className={styles.section__block1}>
        <img src={SecUp.img} alt={SecUp.img} className={styles.section__block1__left__img} />
        <div className={styles.section__block1__right}>
          <h2 className={styles.section__title}>{SecUp.title}</h2>
          <p className={styles.section__text}>{SecUp.text[0]}</p>
          <p className={styles.section__text}>{SecUp.text[1]}</p>
        </div>
      </div> */}
      <SectionDown SecDown={SecDown} />
    </section>
  );
};

import styles from './TitleExtra.module.scss';

type Props = {
  text: string;
};

export const TitleExtra = ({ text }: Props) => {
  return <p className={styles.titleExtra}>{text}</p>;
};

import styles from './Header.module.scss';
import logo_word from '@/assets/logo_word.svg';
import logo_icon from '@/assets/logo_icon.svg';
import phone from '@/assets/phone.svg';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}>
          <img src={logo_icon} alt={logo_icon} className={styles.header__logo__icon} />
          <img src={logo_word} alt={logo_word} className={styles.header__logo__word} />
        </div>
        <div className={styles.header__phone}>
          <img src={phone} alt={phone} className={styles.header__phone__icon} />
          <p className={styles.header__phone__text}>+7 (495) 495-49-54</p>
        </div>
      </div>
    </header>
  );
};

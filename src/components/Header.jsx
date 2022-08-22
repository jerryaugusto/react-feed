import styles from './Header.module.css';

import igniteLogo from '../assets/logo-symbol.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" title='Ignite Logo' />
    </header>
  );
}
import React from "react";
import styles from './styles.module.scss';

import { AppButton } from '../../global-components-controller';
import ThemeSwitcher from "./ThemeSwitcher";

const TheHeader = () => {
  

  return (
    <header className={styles.header}>
      <div className={`${styles.header__wrapper} app__container`}>
        <div className={styles.header__logo}>
          Polemica
          <div className={styles.header__logo__underline}/>
        </div>
        <ThemeSwitcher/>
        <AppButton>Войти</AppButton>
        <AppButton outlined>Зарегестрироваться</AppButton>
      </div>
    </header>
  );
}

export default TheHeader;

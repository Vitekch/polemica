import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

import { ActionButton } from '../../global-components-controller';
import ThemeSwitcher from "./ThemeSwitcher";

const TheHeader = () => {
  

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        Polemica
        <div className={styles.header__logo__underline}/>
      </div>
      <ThemeSwitcher/>
      <ActionButton>Войти</ActionButton>
      <ActionButton outlined>Зарегестрироваться</ActionButton>
    </header>
  );
}

export default TheHeader;

import React, { useState } from 'react';

import { AppCard, AppButton, AppTextField } from '../../../components/global-components-controller';

import styles from './forms.module.scss';
import { mdiEye } from '@mdi/js';

interface IProps {
  switchSingUp: () => void;
}

const SignInForm: React.FunctionComponent<IProps> = (props: IProps) => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AppCard
      style={{
        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 120
        }}
    >
      <div className={styles['auth-form__container']}>
        <div className={styles['auth-form__title']}>
          Вход
        </div>
        <AppTextField
          value={login}
          label='Логин'
          onInput={(v: string) => setLogin(v)}
        />
        <AppTextField
          value={password}
          type={ showPassword ? 'text' : 'password'}
          label='Пароль'
          onInput={(v: string) => setPassword(v)}
          appendAction={{
            icon: mdiEye,
            onClick: () => {setShowPassword(!showPassword)},
          }}
        />
        <div className={styles['auth-form__actions']}>
          <AppButton block={true}>Вход</AppButton>
          <a onClick={props.switchSingUp}>Еще нет аккаунта?</a>
        </div>
      </div>
    </AppCard>
  )
}

export default SignInForm;

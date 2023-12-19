import React, { useState } from 'react';

import { AppCard, AppButton, AppTextField } from '../../../components/global-components-controller';

import styles from './forms.module.scss';
import { mdiEye } from '@mdi/js';

interface IProps {
  switchSignIn: () => void;
}

const SignUpForm: React.FunctionComponent<IProps> = (props: IProps) => {

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
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
          Регистрация
        </div>
        <AppTextField
          value={login}
          label='Логин'
          onInput={(v: string) => setLogin(v)}
        />
        <AppTextField
          value={email}
          label='E-mail'
          onInput={(v: string) => setEmail(v)}
        />
        <AppTextField
          value={password}
          type={ showPassword ? 'text' : 'password'}
          label='Пароль'
          appendAction={{
            icon: mdiEye,
            onClick: () => {setShowPassword(!showPassword)},
          }}
          onInput={(v: string) => setPassword(v)}
        />
        <AppTextField
          value={passwordRepeat}
          type={ showPassword ? 'text' : 'password'}
          label='Повторите пароль'
          appendAction={{
            icon: mdiEye,
            onClick: () => {setShowPassword(!showPassword)},
          }}
          onInput={(v: string) => setPasswordRepeat(v)}
        />
        <div className={styles['auth-form__actions']}>
          <AppButton block={true}>Подтвердить</AppButton>
          <a onClick={props.switchSignIn}>Уже есть аккаунт?</a>
        </div>
      </div>
    </AppCard>
  )
}

export default SignUpForm;

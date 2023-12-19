import React from 'react';

import styles from './styles.module.scss';

import { IInputProps } from './interfaces';
import Icon from '@mdi/react';

const AppTextField: React.FunctionComponent<IInputProps> = (props: IInputProps) => {

  const type = props.type || 'text';

  return (
    <div>
      <div className={styles['app-input__label']}>
        {props.label}
      </div>
      <div className={styles['app-input__container']}>
        <input
          type={type}
          className={styles['app-input__field']}
          onInput={(ev) => {props.onInput(ev.currentTarget.value)}}
        />
        {
          props.appendAction && 
            <button
              className={styles['app-input__append-action']}
              onClick={props.appendAction.onClick}
            >
              <Icon
                path={props.appendAction.icon}
                size="24px"
              />
            </button>
        }
      </div>
    </div>
  )
}

export default AppTextField;
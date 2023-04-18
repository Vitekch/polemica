import React from 'react'

import { classesNames, ClassesObj } from '../../../helpers/formatClasses';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  outlined?: boolean;
}

const ActionButton: React.FunctionComponent<Props> = (props: Props) => {

  const btnClasses: ClassesObj = {
    [styles['action-button']]: true,
    [styles.outlined]: !!props.outlined,
  };

  return (
    <button
      className={classesNames(btnClasses)}
      onClick={() => {props.onClick}}
    >
      {props.children}
    </button>
  )
}

export default ActionButton;

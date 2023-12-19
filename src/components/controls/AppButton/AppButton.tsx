import React from 'react'

import { classesNames, ClassesObj } from '../../../helpers/formatClasses';

import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  outlined?: boolean;
  block?: boolean;
}

const AppButton: React.FunctionComponent<IProps> = (props: IProps) => {

  const btnClasses: ClassesObj = {
    [styles['action-button']]: true,
    [styles.outlined]: !!props.outlined,
    [styles.block]: !!props.block,
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

export default AppButton;

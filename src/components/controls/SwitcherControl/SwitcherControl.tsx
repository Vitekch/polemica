import React from 'react';
import { classesNames, ClassesObj } from '../../../helpers/formatClasses';

import Icon from '@mdi/react';

import styles from './styles.module.scss';

interface Props {
  value: boolean,
  setValue: (value: boolean) => void,
  icon?: string,
}

const SwitcherControl: React.FunctionComponent<Props> = (props: Props) => {

  const thumbClasses: ClassesObj = {
    [styles.switcher__thumb]: true,
    [styles.active]: !!props.value,
  };

  const icon = props.icon
    ? <Icon path={props.icon} size="12px" color='white'/>
    : null;

  return (
    <div
      className={styles.switcher__container}
      onClick={() => props.setValue(!props.value)}
    >
      <div className={classesNames(thumbClasses)}>
        {icon}
      </div>
    </div>
  );
};

export default SwitcherControl;

import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode,
  style?: React.CSSProperties,
}

const AppCard: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div className={styles.app__card} style={props.style}>
      {props.children}
    </div>
  )
};

export default AppCard;

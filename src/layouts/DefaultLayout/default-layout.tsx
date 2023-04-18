import React from 'react';
import TheHeader from '../../components/layout/TheHeader/TheHeader';

type Props = {
  children: JSX.Element,
};

const DefaultLayout:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <TheHeader/>
      <main>{ props.children }</main>
    </>
  );
};

export default DefaultLayout;
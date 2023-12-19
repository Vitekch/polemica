import React from 'react';
import TheHeader from '../../components/layout/TheHeader/TheHeader';

interface IProps {
  children: JSX.Element,
}

const DefaultLayout:React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      <TheHeader/>
      <main>
        <div className="app__container">
          { props.children }
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
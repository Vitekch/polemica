import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';

import { AppSwitcher } from '../../global-components-controller';

import { mdiMoonWaxingCrescent, mdiWhiteBalanceSunny } from '@mdi/js';
import { switchTheme } from '../../../store/modules/global';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.global.darkTheme);
  useEffect(
    () => {
      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    [isDarkTheme]
  );

  return (
    <AppSwitcher
      value={isDarkTheme}
      setValue={() => dispatch(switchTheme())}
      icon={isDarkTheme ? mdiMoonWaxingCrescent : mdiWhiteBalanceSunny}
    />
  )
};

export default ThemeSwitcher;

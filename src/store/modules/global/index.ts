import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../index';

const LOCAL_STORAGE_KEY = 'app-config';

interface IGlobalState {
  darkTheme: boolean,
}

const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
const defaultState: IGlobalState = {
  darkTheme: false,
};

const initialState: IGlobalState = savedState
  ? JSON.parse(savedState)
  : defaultState;
console.log(initialState);
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      console.log(state);
    },
  },
});

export const { switchTheme } = globalSlice.actions;

export const getDarkThemeState = (state: RootState) => state.global.darkTheme; 

export default globalSlice.reducer;

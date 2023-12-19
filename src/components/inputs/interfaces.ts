import React from 'react';

interface IAppendAction {
  icon: string;
  onClick: () => void;
}

export interface IInputProps {
  value?: string | number;
  label?: string;
  type?: 'text' | 'password';
  appendAction?: IAppendAction;
  onInput: (v: string) => void;
}

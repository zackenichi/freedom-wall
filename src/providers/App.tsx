import { FC } from 'react';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { ThemeProvider } from './Theme';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

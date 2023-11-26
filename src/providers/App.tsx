import { FC } from 'react';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { ThemeProvider } from './Theme';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

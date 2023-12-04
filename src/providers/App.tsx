import { FC } from 'react';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { ThemeProvider } from './Theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../app/store';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

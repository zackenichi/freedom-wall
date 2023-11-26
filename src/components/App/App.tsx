import { Box } from '@mui/material';
import { FC, Suspense } from 'react';
import { Header } from '../Header';

import { Routes, Route, Navigate } from 'react-router-dom';
import { routes as appRoutes } from '../../routes';

import { Footer } from '../Footer';
import { ContentArea } from '../ContentArea';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateAreas: `"header" "main" "footer"`,
        p: 2,
      }}
      id="appContainer"
      role="main"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: 'main',
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ContentArea>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ContentArea>
        </Suspense>
      </Box>
      <Box
        sx={{
          gridArea: 'footer',
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export { App };

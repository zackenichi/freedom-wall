import { Box } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"header" "main"`,
      }}
      id="appContainer"
      role="main"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        header
      </Box>
      <Box
        sx={{
          gridArea: 'main',
        }}
      >
        content
      </Box>
    </Box>
  );
};

export { App };

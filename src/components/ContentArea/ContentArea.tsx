import { Box, Grid } from '@mui/material';
import { PropsWithChildren } from '../../resources/interfaces/PropsWithChildren';
import { FC } from 'react';

const ContentArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        gridArea: 'main',
        maxHeight: 'calc(100vh - 64px)',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export { ContentArea };

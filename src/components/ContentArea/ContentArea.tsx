import { Box, Grid, Typography } from '@mui/material';
import { PropsWithChildren } from '../../resources/interfaces/PropsWithChildren';
import { FC } from 'react';
import { ScrollWrap } from '../ScrollWrap';

const ContentArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        gridArea: 'main',
        maxHeight: 'calc(100vh - 64px)',
        p: 4,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} marginBottom="50px">
          <Typography variant="h1" textAlign="center">
            Write anything—it disappears in 10 minutes!
          </Typography>
        </Grid>
        <ScrollWrap>
          <Grid item xs={12} md={12}>
            {children}
          </Grid>
        </ScrollWrap>
      </Grid>
    </Box>
  );
};

export { ContentArea };

import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Navigation } from '../Navigation';

const Header: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        <Typography>Logo</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Navigation />
      </Grid>
    </Grid>
  );
};

export { Header };

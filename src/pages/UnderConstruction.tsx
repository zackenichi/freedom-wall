import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Countdown } from '../components/CountDown';

const UnderConstruction: FC = () => {
  // Set the target date to December 15
  const targetDate = new Date('December 15, 2023 00:00:00 GMT+08:00');

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
      marginTop="100px"
    >
      <Grid item xs={12}>
        <Typography variant="h1" textAlign="center">
          A New Chapter Awaits
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          We're Crafting Something Special.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Countdown targetDate={targetDate} />
      </Grid>
    </Grid>
  );
};

export { UnderConstruction };

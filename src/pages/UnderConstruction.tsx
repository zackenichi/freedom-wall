import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Countdown } from '../components/CountDown';

const UnderConstruction: FC = () => {
  // Set the target date to 7 days ahead from the current date
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

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
          Crafting Excellence in Progress
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="center">
          We're Building Something Extraordinary. Stay Tuned for a Grand
          Unveiling!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Countdown targetDate={targetDate} />
      </Grid>
    </Grid>
  );
};

export { UnderConstruction };

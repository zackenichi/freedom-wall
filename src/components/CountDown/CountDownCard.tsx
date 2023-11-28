import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface CountDownCardProps {
  remainingTime: number;
  label: string;
}

const CountDownCard: FC<CountDownCardProps> = ({ remainingTime, label }) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" textAlign="center" color="primary">
              {remainingTime}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" textAlign="center" color="primary">
              {label}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { CountDownCard };

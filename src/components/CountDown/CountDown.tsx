import { Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { CountDownCard } from './CountDownCard';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" spacing={2} marginTop="50px">
        <Grid item xs={6} md={3}>
          <CountDownCard remainingTime={timeRemaining.days} label="Days" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CountDownCard remainingTime={timeRemaining.hours} label="Hours" />
        </Grid>
        <Grid item xs={6} md={3}>
          <CountDownCard
            remainingTime={timeRemaining.minutes}
            label="Minutes"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CountDownCard
            remainingTime={timeRemaining.seconds}
            label="Seconds"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export { Countdown };

import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => {
  const d = new Date();
  let year = d.getFullYear();

  const copyright = `Copyright © ${year} Paramount Book`;

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center', p: 2 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginBottom="10px"
      >
        <Grid item xs={12} md={4}>
          <Typography variant="body1" textAlign="center">
            {copyright}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Footer };

import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocMed = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton
        aria-label="github"
        href="https://github.com/zackenichi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="facebook"
        href="https://www.facebook.com/zacsalazardev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        aria-label="linkedin"
        href="https://www.linkedin.com/in/zac-salazar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </IconButton>
    </Stack>
  );
};

const Footer: FC = () => {
  const d = new Date();
  let year = d.getFullYear();

  const copyright = `Copyright © ${year} ZacKenichi`;

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center', p: 2 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginBottom="10px"
      >
        <Grid item xs={12}>
          <Typography variant="body1" textAlign="center">
            {copyright}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SocMed />
        </Grid>
      </Grid>
    </Box>
  );
};

export { Footer };

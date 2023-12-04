import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
      <AppBar
        position="static"
        // sx={{ background: 'transparent' }}
        // elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid
              item
              xs={8}
              md={8}
              onClick={handleLogoClick}
              sx={{ cursor: 'pointer ', display: 'flex', alignItems: 'center' }}
            >
              <MessageIcon fontSize="large" />
              <Typography
                variant="h2"
                component="div"
                sx={{ ml: 1 }}
                color="white"
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };

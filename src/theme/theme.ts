import { ThemeOptions, createTheme } from '@mui/material/styles';
import colors from './colors';

const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: 'Poppins, sans-serif',
      },
      h1: {
        fontSize: '1.5rem',
        fontWeight: 800,
        color: colors.primary,
        '@media (max-width: 768px)': {
          fontSize: '1.2rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '1rem',
        },
      },
      h2: {
        fontSize: '1.2rem',
        fontWeight: 800,
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '1rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.8rem',
        },
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '1rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '2rem',
        },
      },
      h4: {
        fontSize: '0.8rem',
        fontWeight: 600,
        color: colors.primary,
        '@media (max-width: 768px)': {
          fontSize: '0.6rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.6rem',
        },
      },
      body1: {
        fontSize: '0.9rem',
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '0.8rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.6rem',
        },
      },
      body2: {
        fontSize: '0.8rem',
        fontWeight: 400,
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '0.6rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.6rem',
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        // height: '2.5rem',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        textTransform: 'none',
      },
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.cardbg,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.info,
    },
    warning: {
      main: colors.warning,
    },
  },
  components: componentOverrides,
});

export { theme };

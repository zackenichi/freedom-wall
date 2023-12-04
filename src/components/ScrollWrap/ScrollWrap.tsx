import { FC } from 'react';
import { PropsWithChildren } from '../../resources/interfaces/PropsWithChildren';
import { Box } from '@mui/material';
import colors from '../../theme/colors';

const ScrollWrap: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        paddingRight: '8px',
        overflowY: 'auto',
        maxHeight: '60vh',
        height: '100%',
        width: '100%',
        padding: '0 10px',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: colors.primary,
          borderRadius: '4px',
          backgroundClip: 'content-box',
          border: '2px solid transparent',
        },
        '&::-webkit-scrollbar-track': {
          //   background: 'linear-gradient(to bottom, #9A3E96, #000000)',
          //   borderRadius: '4px',
        },
      }}
    >
      {children}
    </Box>
  );
};

export { ScrollWrap };

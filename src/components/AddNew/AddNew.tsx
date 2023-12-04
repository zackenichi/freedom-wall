import { Button, useMediaQuery } from '@mui/material';
import { FC } from 'react';

import AddIcon from '@mui/icons-material/Add';

const AddNew: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
      {isMobile ? 'Add' : 'Add New'}
    </Button>
  );
};

export { AddNew };

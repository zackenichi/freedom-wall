import { Button, useMediaQuery } from '@mui/material';
import { FC } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setOpenAdd } from '../../features/ui/uiSlice';

const AddNew: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch(setOpenAdd(true));
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<AddIcon />}
      onClick={handleAddNew}
    >
      {isMobile ? 'Add' : 'Add New'}
    </Button>
  );
};

export { AddNew };

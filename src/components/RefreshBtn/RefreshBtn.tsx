import { FC } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import { IconButton } from '@mui/material';

const RefreshBtn: FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <IconButton onClick={handleRefresh}>
      <CachedIcon />
    </IconButton>
  );
};

export { RefreshBtn };

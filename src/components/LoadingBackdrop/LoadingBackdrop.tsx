import { Backdrop, CircularProgress } from '@mui/material';
// import { RootState } from '../../app/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { setIsLoading } from '../../features/ui/uiSlice';

const LoadingBackdrop = () => {
  //   const dispatch = useDispatch();

  //   const isLoading = useSelector((state: RootState) => state.ui.isLoading);

  //   const handleClose = () => {
  //     dispatch(setIsLoading(false));
  //   };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      //   onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export { LoadingBackdrop };

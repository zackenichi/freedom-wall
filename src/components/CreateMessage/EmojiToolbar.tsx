import {
  Box,
  Grid,
  IconButton,
  Modal,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenEmoji } from '../../features/ui/uiSlice';
import { RootState } from '../../app/store';
import CloseIcon from '@mui/icons-material/Close';
import emoji from './Emoji';
import { setMessage, setTitle } from '../../features/message/messageSlice';
import SelectedField from '../../resources/enums/SelectedField';

const EmojiList: FC = () => {
  const dispatch = useDispatch();

  const selectedField = useSelector(
    (state: RootState) => state.draftMessage.selectedField
  );

  const title = useSelector((state: RootState) => state.draftMessage.title);
  const message = useSelector((state: RootState) => state.draftMessage.message);

  const selectionStart = useSelector(
    (state: RootState) => state.draftMessage.selectionStart
  );

  const handleInsert = (item: string) => {
    console.log('insert: ', item);

    if (selectedField === SelectedField.Title) {
      const updatedTitle =
        title.slice(0, selectionStart) + item + title.slice(selectionStart);
      dispatch(setTitle(updatedTitle));
    } else if (selectedField === SelectedField.Message) {
      const updatedMessage =
        message.slice(0, selectionStart) + item + message.slice(selectionStart);
      dispatch(setMessage(updatedMessage));
    }
  };

  return (
    <Grid container spacing={2}>
      {emoji.map((item) => {
        return (
          <Grid item xs={4} key={item}>
            <IconButton onClick={() => handleInsert(item)}>
              <Typography variant="h3">{item}</Typography>
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

const EmojiToolbar: FC = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const dispatch = useDispatch();

  const openEmoji = useSelector((state: RootState) => state.ui.openEmoji);

  const handleClose = () => {
    dispatch(setOpenEmoji(false));
  };

  return (
    <Modal open={openEmoji} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: isMobile ? '0%' : '20%',
          left: isMobile ? '0%' : '10%',
          // transform: 'translate(-50%, -50%)',
          width: isMobile ? '100vw' : '20vw',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 4,
          p: 4,
          height: isMobile ? '100vh' : 'auto',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <Typography variant="h2">Emoji</Typography>
          </Grid>
          <Grid item xs={2}>
            <Tooltip title="Close">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <EmojiList />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export { EmojiToolbar };

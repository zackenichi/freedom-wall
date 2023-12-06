import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setOpenAdd } from '../../features/ui/uiSlice';
import { useCreateMessageMutation } from '../../features/api/message/messageApiSlice';

const TITLE_MAX_CHARS = 70;
const MSG_MAX_CHARS = 240;

const CreateMessage: FC = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const openAdd = useSelector((state: RootState) => state.ui.openAdd);

  const [title, setTitle] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [titleCount, setTitleCount] = useState<number>(0);
  const [messageCount, setMessageCount] = useState<number>(0);

  const [addMessage] = useCreateMessageMutation();

  const handleClose = () => {
    dispatch(setOpenAdd(false));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleCount(e.target.value.length);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setMessageCount(e.target.value.length);
  };

  const handleClear = () => {
    setTitle('');
    setMessage('');
    setTitleCount(0);
    setMessageCount(0);
  };

  const handleSend = async () => {
    try {
      dispatch(setOpenAdd(false));

      await addMessage({ title, content: message, createdAt: new Date() });
      handleClear();
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  return (
    <Modal
      open={openAdd}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Slide in={openAdd}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: isMobile ? '0%' : '20%',
            left: isMobile ? '0%' : '30%',
            // transform: 'translate(-50%, -50%)',
            width: isMobile ? '100vw' : '40vw',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 4,
            p: 4,
            height: isMobile ? '100vh' : 'auto',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h2">New Message</Typography>
            </Grid>
            <Grid item xs={2} textAlign="right">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                variant="standard"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                inputProps={{
                  maxLength: TITLE_MAX_CHARS,
                }}
                helperText={`${titleCount}/${TITLE_MAX_CHARS}`}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="filled"
                fullWidth
                multiline
                minRows={isMobile ? 10 : 4}
                value={message}
                onChange={handleMessageChange}
                inputProps={{
                  maxLength: MSG_MAX_CHARS,
                }}
                helperText={`${messageCount}/${MSG_MAX_CHARS}`}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth onClick={handleClear}>
                Clear
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSend}
                disabled={titleCount < 3}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Slide>
    </Modal>
  );
};

export { CreateMessage };

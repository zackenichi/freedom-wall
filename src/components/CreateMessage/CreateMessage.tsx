import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Slide,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC, useRef } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setOpenAdd, setOpenEmoji } from '../../features/ui/uiSlice';
import { useCreateMessageMutation } from '../../features/api/message/messageApiSlice';
import SelectedField from '../../resources/enums/SelectedField';
import {
  setMessage,
  setMessageCount,
  setSelectedField,
  setSelectionStart,
  setTitle,
  setTitleCount,
} from '../../features/message/messageSlice';

import { Timestamp } from 'firebase/firestore';

const TITLE_MAX_CHARS = 70;
const MSG_MAX_CHARS = 240;

const CreateMessage: FC = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const openAdd = useSelector((state: RootState) => state.ui.openAdd);
  const title = useSelector((state: RootState) => state.draftMessage.title);
  const message = useSelector((state: RootState) => state.draftMessage.message);
  const titleCount = useSelector(
    (state: RootState) => state.draftMessage.titleCount
  );
  const messageCount = useSelector(
    (state: RootState) => state.draftMessage.messageCount
  );

  const selectedField = useSelector(
    (state: RootState) => state.draftMessage.selectedField
  );

  // detecting which index of string we are in
  const titleInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  const [addMessage] = useCreateMessageMutation();

  const handleClose = () => {
    dispatch(setOpenAdd(false));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
    dispatch(setTitleCount(e.target.value.length));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMessage(e.target.value));
    dispatch(setMessageCount(e.target.value.length));
  };

  const handleClear = () => {
    dispatch(setTitle(''));
    dispatch(setMessage(''));
    dispatch(setTitleCount(0));
    dispatch(setMessageCount(0));
  };

  const handleSend = async () => {
    try {
      dispatch(setOpenAdd(false));

      const createdAtTimestamp = Timestamp.now();

      await addMessage({
        title,
        content: message,
        createdAt: createdAtTimestamp,
        reacts: {
          like: 0,
          heart: 0,
          funny: 0,
          dislike: 0,
        },
      });
      handleClear();
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const showEmoji = () => {
    dispatch(setOpenEmoji(true));
  };

  const updateSelectionStart = (field: SelectedField) => {
    dispatch(setSelectedField(field));
    let inputRef =
      field === SelectedField.Title ? titleInputRef : messageInputRef;

    // if we select at beginning of string, index will be 0
    // which is falsy, therefore, returning a -1 will be a good flag
    // to say we are targeting before the current array
    if (inputRef.current) {
      dispatch(setSelectionStart(inputRef.current.selectionStart || -1));
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
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {selectedField !== SelectedField.None && (
                  <Tooltip title="Insert emoji">
                    <IconButton onClick={showEmoji}>
                      <AddReactionIcon />
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title="Close">
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="title"
                inputRef={titleInputRef}
                label="Title"
                variant="standard"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                inputProps={{
                  maxLength: TITLE_MAX_CHARS,
                }}
                helperText={`${titleCount}/${TITLE_MAX_CHARS}`}
                onSelect={() => updateSelectionStart(SelectedField.Title)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                inputRef={messageInputRef}
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
                onSelect={() => updateSelectionStart(SelectedField.Message)}
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

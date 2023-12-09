import { Grid } from '@mui/material';
import { FC } from 'react';

import { BoardItem } from '../components/BoardItem';
import { CreateMessage, EmojiToolbar } from '../components/CreateMessage';
import { useFetchMessagesQuery } from '../features/api/message/messageApiSlice';
import { LoadingBackdrop } from '../components/LoadingBackdrop';

const Board: FC = () => {
  const { data: messages, isFetching } = useFetchMessagesQuery(
    {},
    { refetchOnFocus: true, pollingInterval: 60 * 1000 }
  );

  if (isFetching) {
    return <LoadingBackdrop />;
  }

  return (
    <Grid container spacing={2}>
      <>
        {messages &&
          messages.map((message) => {
            const { id, title, content, reacts } = message;

            return (
              <Grid item md={3} sm={6} xs={12} key={id}>
                <BoardItem
                  id={id}
                  title={title}
                  content={content}
                  reacts={reacts}
                />
              </Grid>
            );
          })}
      </>
      <CreateMessage />
      <EmojiToolbar />
    </Grid>
  );
};

export { Board };

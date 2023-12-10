import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import BoardMessage from '../../resources/interfaces/BoardMessage';

import PushPinIcon from '@mui/icons-material/PushPin';
import { Reaction } from './Reaction';
import { useAddReactionMutation } from '../../features/api/message/messageApiSlice';

const BoardItem: FC<BoardMessage> = ({ id, title, content, reacts }) => {
  const [addReaction] = useAddReactionMutation();

  const handleReacts = async (reactionName: string) => {
    try {
      const updatedReactions = { ...reacts };
      (updatedReactions as any)[reactionName] += 1;

      await addReaction({
        messageId: id,
        reacts: updatedReactions,
      });
    } catch (error) {
      console.error('Error adding reaction:', error);
    }
  };

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item xs={10}>
            <Typography variant="h2" sx={{ wordBreak: 'break-all' }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <PushPinIcon fontSize="small" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
              {content}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Reaction reacts={reacts} onReactionClick={handleReacts} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { BoardItem };

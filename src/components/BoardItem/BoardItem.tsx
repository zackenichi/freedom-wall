import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import BoardMessage from '../../resources/interfaces/BoardMessage';

import PushPinIcon from '@mui/icons-material/PushPin';

const BoardItem: FC<BoardMessage> = ({ title, content }) => {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item xs={10}>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <PushPinIcon fontSize="small" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{content}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export { BoardItem };

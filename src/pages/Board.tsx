import { Grid } from '@mui/material';
import { FC } from 'react';

import { BoardItem } from '../components/BoardItem';

const Board: FC = () => {
  const messages = [
    {
      id: 1,
      title: 'title1',
      content: 'Lorem ipsum dolor sit amet',
      createdAt: '2021-10-01 00:00:00',
      updatedAt: '2021-10-01 00:00:00',
    },
    {
      id: 2,
      title: 'title2',
      content: 'consectetur adipiscing elit.',
      createdAt: '2021-10-01 00:00:00',
      updatedAt: '2021-10-01 00:00:00',
    },
    {
      id: 3,
      title: 'title3',
      content: 'Vivamus venenatis pretium condimentum. ',
      createdAt: '2021-10-01 00:00:00',
      updatedAt: '2021-10-01 00:00:00',
    },
    {
      id: 4,
      title: 'title4',
      content: 'Proin nec leo sed nisi varius aliquet a vitae massa.',
      createdAt: '2021-10-01 00:00:00',
      updatedAt: '2021-10-01 00:00:00',
    },
    {
      id: 5,
      title: 'title5',
      content: 'Vestibulum eu nulla at augue bibendum porta.',
      createdAt: '2021-10-01 00:00:00',
      updatedAt: '2021-10-01 00:00:00',
    },
    {
      id: 6,
      title: 'title6',
      content: 'Cras consectetur cursus laoreet.',
      createdAt: '2021-10-01 00:00:00',
      updatedAt: '2021-10-01 00:00:00',
    },
  ];

  return (
    <Grid container spacing={2}>
      {messages.map((message) => {
        const { id, title, content } = message;

        return (
          <Grid item md={3} sm={6} xs={12} key={id}>
            <BoardItem title={title} content={content} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { Board };

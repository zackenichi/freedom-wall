import { Badge, Grid, IconButton, SvgIconTypeMap } from '@mui/material';
import { FC } from 'react';

import { OverridableComponent } from '@mui/material/OverridableComponent';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface ReactionItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  count: number;
  color: string;
  onClick: () => void;
}

const ReactionItem: FC<ReactionItemProps> = ({
  Icon,
  count,
  color,
  onClick,
}) => {
  return (
    <Grid item md={3}>
      <Badge badgeContent={count} color="primary">
        <IconButton onClick={onClick}>
          <Icon fontSize="medium" sx={{ color: count > 0 ? color : 'auto' }} />
        </IconButton>
      </Badge>
    </Grid>
  );
};

interface ReactionProps {
  reacts: {
    like: number;
    heart: number;
    funny: number;
    dislike: number;
  };
  onReactionClick: (reactionName: string) => void;
}

const Reaction: FC<ReactionProps> = ({ reacts, onReactionClick }) => {
  const options = [
    {
      name: 'like',
      icon: ThumbUpIcon,
      count: reacts.like,
      color: '#4267B2',
    },
    {
      name: 'heart',
      icon: FavoriteIcon,
      count: reacts.heart,
      color: '#e74c3c',
    },
    {
      name: 'funny',
      icon: EmojiEmotionsIcon,
      count: reacts.funny,
      color: '#f39c12',
    },

    {
      name: 'dislike',
      icon: ThumbDownIcon,
      count: reacts.dislike,
      color: '#c0392b',
    },
  ];

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {options.map((item) => {
        return (
          <ReactionItem
            key={item.name}
            Icon={item.icon}
            count={item.count}
            color={item.color}
            onClick={() => onReactionClick(item.name)}
          />
        );
      })}
    </Grid>
  );
};

export { Reaction };

interface BoardMessage {
  id: string;
  title: string;
  content: string;
  reacts: {
    like: number;
    heart: number;
    funny: number;
    dislike: number;
  };
}

export default BoardMessage;

const SingleComment = ({ comment }) => {
  return (
    <li>
      {comment.comment} - <strong>Voto: {comment.rate}</strong>
    </li>
  );
};

export default SingleComment;

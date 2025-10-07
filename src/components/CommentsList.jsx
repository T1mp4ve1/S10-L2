import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <ul>
      {comments.map((c) => (
        <SingleComment key={c._id} comment={c} />
      ))}
    </ul>
  );
};

export default CommentsList;

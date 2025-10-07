const SingleComment = ({ comment }) => {
  const rateColor = (rate) => {
    if (rate < 3) return "text-danger";
    if (rate === 3) return "text-warning";
    return "text-success";
  };
  const rateIcon = (rate) => {
    if (rate < 3) return <i className="bi bi-x-circle"></i>;
    if (rate === 3) return <i className="bi bi-exclamation-circle-fill"></i>;
    return <i className="bi bi-check-circle"></i>;
  };

  return (
    <li>
      {comment.comment} -{" "}
      <strong>
        Voto:{" "}
        <span className={rateColor(comment.rate)}>
          {comment.rate} {rateIcon(comment.rate)}
        </span>
      </strong>
    </li>
  );
};

export default SingleComment;

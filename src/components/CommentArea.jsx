import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGU2NTZmMzAyMjAwMTUxMDgwY2QiLCJpYXQiOjE3NTk0MDg0MzYsImV4cCI6MTc2MDYxODAzNn0.240kSrbfjNhaGPmd2qpzL_9IvsqKzY5tOLFi81LXYCs",
          },
        }
      );
      if (res.ok) {
        const dataRecived = await res.json();
        setComments(dataRecived);
        console.log("Commenti recevuti", dataRecived);
      } else {
        throw new Error("Errore nei dati");
      }
    } catch (err) {
      console.log("Fetch:", err);
    }
  };

useEffect(() => {
  fetchComments();
}, [asin])

  return (
    <div id="commentArea" className="text-light p-2 sticky-top">
      <h3>Commenti del libro selezionato:</h3>
      <CommentsList comments={comments} />
      <AddComment asin={asin} />
    </div>
  );
};
export default CommentArea;

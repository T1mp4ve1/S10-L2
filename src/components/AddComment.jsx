import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMGU2NTZmMzAyMjAwMTUxMDgwY2QiLCJpYXQiOjE3NTk0MDg0MzYsImV4cCI6MTc2MDYxODAzNn0.240kSrbfjNhaGPmd2qpzL_9IvsqKzY5tOLFi81LXYCs",
          },
          body: JSON.stringify({
            comment,
            rate,
            elementId: asin,
          }),
        }
      );

      if (res.ok) {
        console.log("Commento inviato");
        setComment("");
        setRate(1);
      } else {
        throw new Error("Errore nel commento");
      }
    } catch (err) {
      console.log("Errore:", err);
    }
  };

  return (
    <div>
      <Form onSubmit={addComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;

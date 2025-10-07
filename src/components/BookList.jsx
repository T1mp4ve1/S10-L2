import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Col, Form, Row, Alert } from "react-bootstrap";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook((prevState) =>
      prevState?.asin === book.asin ? null : book
    );
  };

  useEffect(() => {}, [selectedBook]);

  return (
    <>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Row xs={5}>
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col key={b.asin}>
                  <SingleBook
                    book={b}
                    isSelected={selectedBook?.asin === b.asin}
                    onSelect={() => handleBookSelect(b)}
                  />
                </Col>
              ))}
          </Row>
        </Col>

        <Col xs={3} className="bg-dark rounded-3 sticky-top">
          {selectedBook ? (
            <CommentArea asin={selectedBook.asin} />
          ) : (
            <Alert
              id="alertFixed"
              variant="secondary"
              className="text-center mt-3 sticky-top"
            >
              Seleziona un libro per vedere i commenti
            </Alert>
          )}
        </Col>
      </Row>
    </>
  );
};

export default BookList;

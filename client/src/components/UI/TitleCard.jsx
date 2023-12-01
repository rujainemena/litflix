import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// this code was injected into the google API

function TitleCard() {
  return (
    <Card style={{ margin: "auto" }}>
      {book.image ? (
        <Card.Img
          src={book.image}
          alt={`The cover for ${book.title}`}
          variant="top"
        />
      ) : null}

      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item className="small">
          Authors: {book.authors}{" "}
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      {Auth.loggedIn() && (
        <Card.Body>
          {/* Save book buttong */}
          <Button
            disabled={savedBookIds?.some(
              (savedBookId) => savedBookId === book.bookId
            )}
            className="btn-block btn-info"
            onClick={() => handleSaveBook(book.bookId)}
          >
            {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
              ? "Already saved!"
              : "Save Book"}
          </Button>

          <Card.Link href="#">Movie Link / Button</Card.Link>
        </Card.Body>
      )}
    </Card>
  );
}

//original API card CSS framework found in SearchBooks.jsx

/*return (
              <Col style={{ margin: "10px", width: "18rem", padding: "15px" }} md="4" key={book.bookId}>
                <Card border="dark">
                  {book.image ? (
                    <Card.Img
                      src={book.image}
                      alt={`The cover for ${book.title}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                  
                    <Card.Title>{book.title}</Card.Title>
                    <p className="small">Authors: {book.authors}</p>
                    
                    <Card.Text>{book.description}</Card.Text>
                   
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedBookIds?.some(
                          (savedBookId) => savedBookId === book.bookId
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveBook(book.bookId)}
                      >
                        {savedBookIds?.some(
                          (savedBookId) => savedBookId === book.bookId
                        )
                          ? "Already saved!"
                          : "Save Book!"}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );*/

export default TitleCard;

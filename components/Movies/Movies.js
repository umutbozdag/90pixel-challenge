import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col, Spinner, CardDeck } from "react-bootstrap";
import movieStore from "../../store/movieStore";

const Movies = (props) => (
  <Row>
    <Container>
      <Row>
        <Col className="text-center">
          {movieStore.loading ? (
            <Spinner className="mt-5" animation="border" />
          ) : (
            ""
          )}
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {movieStore.error ? <p>{movieStore.error}</p> : ""}
        </Col>
      </Row>
    </Container>
    <Row>
      {props.movies &&
        props.movies.map((movie) => (
          <Col key={movie.imdbID} sm>
            <MovieCard key={movie.imdbID} movie={movie} />
          </Col>
        ))}
    </Row>
  </Row>
);

export default Movies;

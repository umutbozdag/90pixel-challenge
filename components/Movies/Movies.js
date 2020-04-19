import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import store from "../../store/movieStore";

const Movies = (props) => (
  <Row>
    {props.movies &&
      props.movies.map((movie) => (
        <Col key={movie.imdbID} sm>
          <MovieCard key={movie.imdbID} movie={movie} />
        </Col>
      ))}
  </Row>
);

export default Movies;

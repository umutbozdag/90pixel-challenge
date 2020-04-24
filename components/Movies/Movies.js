import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import movieStore from "../../store/movieStore";
import MovieCardSkeleton from "../MovieCardSkeleton/MovieCardSkeleton";
import { toast, ToastContainer } from "react-toastify";
import styles from "./movies.module.scss";
toast.configure();
export default function Movies(props) {
  return (
    <Row>
      <Container>
        <Row className="d-flex justify-content-center">
          {movieStore.loading
            ? [1, 2, 3, 4, 5, 6, 7].map((skeleton) => (
                <Row>
                  <Col>
                    <MovieCardSkeleton key={skeleton} />
                  </Col>
                </Row>
              ))
            : ""}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            {movieStore.getError ? (
              <span className={styles.error}>
                {movieStore.getError} Try again.
              </span>
            ) : (
              ""
            )}
            <ToastContainer />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          {props.movies &&
            props.movies.map((movie) => (
              <Row noGutters={true}>
                <Col key={movie.imdbID}>
                  <MovieCard key={movie.imdbID} movie={movie} />
                </Col>
              </Row>
            ))}
        </Row>
      </Container>
    </Row>
  );
}

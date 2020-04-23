import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col, Spinner, CardDeck, Toast } from "react-bootstrap";
import movieStore from "../../store/movieStore";
import { useState } from "react";
import MovieCardSkeleton from "../MovieCardSkeleton/MovieCardSkeleton";

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
            {movieStore.error ? <p>{movieStore.error}</p> : ""}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          {props.movies &&
            props.movies.map((movie) => (
              <Row>
                <Col key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </Col>
              </Row>
            ))}
        </Row>
      </Container>
    </Row>
  );
}

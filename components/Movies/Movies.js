import MovieCard from "../MovieCard/MovieCard";
import { Container, Row, Col, Spinner, CardDeck, Toast } from "react-bootstrap";
import movieStore from "../../store/movieStore";
import { useState } from "react";

export default function Movies(props) {
  return (
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

import fetch from "isomorphic-unfetch";
import Nav from "../../components/Navbar/Navbar";
import { observer } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import "./movie-detail.module.scss";
import styles from "./movie-detail.module.scss";
@observer
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      poster,
      genre,
      plot,
      rating,
      director,
      country,
      type,
      actors,
      time,
    } = this.props.movie;

    return (
      <div>
        <Nav />
        <Container className={styles.movieContainer}>
          <Row>
            <Col md={4} className="mt-5">
              <img src={poster} alt={title} />
            </Col>
            <Col sm={4} md={8} className="mt-5">
              <h2>{title}</h2>
              <p>
                <span>Plot: </span> {plot}
              </p>
              <Row>
                <Col>
                  <p>
                    <span> Genre: </span> {genre}
                  </p>
                </Col>
                <Col>
                  <p>
                    <span> Time: </span> {time}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span>Rating: </span>
                    {rating}
                  </p>
                </Col>
                <Col>
                  <p>
                    <span>Director: </span>
                    {director}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span>Country: </span>
                    {country}
                  </p>
                </Col>
                <Col>
                  <p>
                    <span>Type: </span>
                    {type}
                  </p>
                </Col>
              </Row>

              <div className={styles.actors}>
                <span> Actors: </span>
                {actors &&
                  actors.map((actor, i) => (
                    <p className={styles.actor} key={i}>
                      {actor}
                    </p>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Movie.getInitialProps = async ({ query }) => {
  let singleMovie = await fetch(
    `https://www.omdbapi.com/?i=${query.id}&apikey=6d0bdde0`
  )
    .then((res) => res.json())
    .then((result) => {
      const movieDetail = {
        title: result.Title,
        year: result.Year,
        time: result.Runtime,
        language: result.Language,
        rating: result.imdbRating,
        type: result.Type,
        genre: result.Genre,
        actors: result.Actors.split(", "),
        poster: result.Poster,
        plot: result.Plot,
        director: result.Director,
        country: result.Country,
      };
      return movieDetail;
    });
  return { movie: singleMovie };
};

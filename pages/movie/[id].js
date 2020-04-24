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
      language,
    } = this.props.movie;

    return (
      <div>
        <Nav />
        <Container className={styles.movieContainer}>
          <Row>
            <Col lg={5} sm={6} md={7} className="mt-5">
              <img
                src={
                  poster !== "N/A"
                    ? poster
                    : "https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png"
                }
                className={styles.detailPoster}
                alt={title}
              />
            </Col>
            <Col lg={7} sm={6} md={6} className="mt-5">
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
              <Row>
                <Col>
                  <div>
                    <span> Actors: </span>
                    {actors}
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p>
                    <span>Language: </span>
                    {language}
                  </p>
                </Col>
              </Row>
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
        actors: result.Actors,
        poster: result.Poster,
        plot: result.Plot,
        director: result.Director,
        country: result.Country,
      };
      console.log(result);
      return movieDetail;
    });
  return { movie: singleMovie };
};

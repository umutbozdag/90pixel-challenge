import fetch from "isomorphic-unfetch";
import Nav from "../../components/Navbar/Navbar";
import { observer } from "mobx-react";
import movieTrailer from "movie-trailer";
import { Container, Row, Col } from "react-bootstrap";
import "./movie-detail.module.scss";
@observer
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Row>
            <Col md={4} className="mt-5">
              <img src={this.props.movie.poster} alt={this.props.movie.Title} />
            </Col>
            <Col sm={4} md={8} className="mt-5">
              <h2>{this.props.movie.title}</h2>
              <p>{this.props.movie.plot}</p>
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
      console.log(result);
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
      };
      return movieDetail;
    });
  //   let trailer = await movieTrailer(singleMovie.Title).then((result) => result);
  return { movie: singleMovie };
};

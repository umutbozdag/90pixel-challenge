import fetch from "isomorphic-unfetch";
import Nav from "../../components/Navbar/Navbar";
import { observer } from "mobx-react";
import movieTrailer from "movie-trailer";

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
        {console.log(this.props)}
        <p>Movie: {this.props.movie.Title}</p>
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
      return result;
    });
  //   let trailer = await movieTrailer(singleMovie.Title).then((result) => result);
  return { movie: singleMovie };
};

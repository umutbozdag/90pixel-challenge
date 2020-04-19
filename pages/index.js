import fetch from "isomorphic-unfetch";
import Movies from "../components/Movies/Movies";
import Search from "../components/Search/Search";
import { Container } from "react-bootstrap";
import movieStore from "../store/movieStore";
import { observer } from "mobx-react";
import Nav from "../components/Navbar/Navbar";

@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      input: "",
      type: "movie",
    };
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  searchMovies = async () => {
    await movieStore.addToSearchList(
      this.state.input,
      this.state.year,
      this.state.type
    );
  };

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Explore</h1>
          <Search onChange={this.onChange} searchMovies={this.searchMovies} />
          <Movies movies={[...movieStore.searchResult]}></Movies>
        </Container>
      </div>
    );
  }
}

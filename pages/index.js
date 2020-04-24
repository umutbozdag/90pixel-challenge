import fetch from "isomorphic-unfetch";
import Movies from "../components/Movies/Movies";
import Search from "../components/Search/Search";
import { Container, Button, Row, Col } from "react-bootstrap";
import movieStore from "../store/movieStore";
import { observer } from "mobx-react";
import Nav from "../components/Navbar/Navbar";
import Arrow from "../components/Arrow/Arrow";
@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      input: "",
      type: "movie",
      page: 1,
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.searchMovies();
    }
  };

  searchMovies = async () => {
    const { input, year, type, page } = this.state;
    if (input === "") return;
    this.setState({ page: 1 });

    await movieStore.addToSearchList(input, year, type, page);
  };

  onPageChange = (e) => {
    const { name } = e.target;
    if (name === "buttonLeft") {
      this.setState({ page: this.state.page - 1 }, () => {
        const { input, year, type, page } = this.state;
        movieStore.addToSearchList(input, year, type, page);
      });
    } else {
      this.setState({ page: this.state.page + 1 }, () => {
        const { input, year, type, page } = this.state;
        movieStore.addToSearchList(input, year, type, page);
      });
    }
  };

  render() {
    const { page } = this.state;
    const pageCount = Math.floor(movieStore.getTotalResult / 10);
    return (
      <div className="app">
        <Nav />
        <Container>
          <h1 className="mt-5 mb-5 text-center">
            Explore Movies, Series, Episodes
          </h1>
          <Search
            handleKeyPress={this.handleKeyPress}
            onChange={this.onChange}
            searchMovies={this.searchMovies}
          />
          <Movies movies={[...movieStore.searchResult]}></Movies>
          {movieStore.searchResult.length !== 0 ? (
            <Container className="mb-3">
              <Row className="d-flex justify-content-between">
                <Arrow>
                  <Button
                    className="arrow-left"
                    name="buttonLeft"
                    disabled={page === 1}
                    onClick={this.onPageChange}
                  >
                    <i className="fas fa-arrow-left"></i>
                  </Button>
                </Arrow>
                <Arrow>
                  <Button
                    className="arrow-right"
                    name="buttonRight"
                    disabled={movieStore.totalResult < 10 || pageCount === page}
                    onClick={this.onPageChange}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </Button>
                </Arrow>
              </Row>
            </Container>
          ) : (
            ""
          )}
        </Container>
      </div>
    );
  }
}

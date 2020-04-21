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
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Container>
          <h1 className="mt-3 mb-4 text-center">
            Explore movies, series, <wbr /> episodes
          </h1>
          <Search />
          <Movies movies={[...movieStore.searchResult]}></Movies>
        </Container>
      </div>
    );
  }
}

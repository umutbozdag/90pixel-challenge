import Nav from "../components/Navbar/Navbar";
import { observer } from "mobx-react";
import Movies from "../components/Movies/Movies";
import { Container } from "react-bootstrap";
import movieStore from "../store/movieStore";

@observer
export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }
  componentDidMount() {
    movieStore.favorites = JSON.parse(localStorage.getItem("favorites"));

    // get from store instead of storage. in the store get from storage.
    // let favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log("FAV FROM LOCAL", movieStore.favorites);
    this.setState({ favorites: movieStore.favorites });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div>
        <Nav />
        <Container>
          Favorites
          <Movies movies={favorites} />
        </Container>
      </div>
    );
  }
}

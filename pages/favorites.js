import Nav from "../components/Navbar/Navbar";
import { observer } from "mobx-react";
import Movies from "../components/Movies/Movies";
import { Container } from "react-bootstrap";
import movieStore from "../store/movieStore";

@observer
export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    movieStore.favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log([...movieStore.favorites]);
  }
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h3 className="mt-4 mb-4">Your Favorites</h3>
          <Movies movies={[...movieStore.favorites]} />
        </Container>
      </div>
    );
  }
}

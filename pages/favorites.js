import Nav from "../components/Navbar/Navbar";
import { observer } from "mobx-react";
import Movies from "../components/Movies/Movies";
import { Container } from "react-bootstrap";
import movieStore from "../store/movieStore";
import Link from "next/link";
import CommonTitle from "../components/CommonTitle/CommonTitle";
@observer
export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    movieStore.favorites = JSON.parse(localStorage.getItem("favorites"));
  }
  render() {
    return (
      <>
        <Nav />
        <Container>
          <CommonTitle>
            <h1 className="text-center mt-5">Your Favorites</h1>
          </CommonTitle>
          <h3 className="mt-3 mb-5"></h3>
          <Movies movies={[...movieStore.favorites]} />
        </Container>
      </>
    );
  }
}

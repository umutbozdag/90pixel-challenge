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
          <h6 className="mt-4 text-center">
            <small> Couldn't you find the thing you are looking for? </small>
            <Link href="/add">
              <a>
                <small>Add it yourself! </small>
              </a>
            </Link>
          </h6>
          <h3 className="mt-4 mb-4"></h3>
          <Movies movies={[...movieStore.favorites]} />
        </Container>
      </>
    );
  }
}

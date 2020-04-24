import Link from "next/link";
import styles from "./movie-card.module.scss";
import { Card, Button, Container } from "react-bootstrap";
import { observer } from "mobx-react";
import movieStore from "../../store/movieStore";
import { toast } from "react-toastify";

@observer
export default class MovieCard extends React.Component {
  addToFav = (movie) => {
    movieStore.addToFav(movie);
    toast.success(`${movie.title} added to the favorites!`);
  };

  removeFromFav = (movie) => {
    movieStore.removeFromFav(movie);
    toast.success(`${movie.title} removed from the favorites!`);
  };

  ratingStyle = (rating) => {
    if (rating >= 7.5) return styles.green;
    else if (rating > 5 && rating < 7.5) return styles.yellow;
    else if (rating === "N/A") return styles.gray;
    else return styles.red;
  };

  render() {
    const { title, poster, year, imdbID, rating, isFav } = this.props.movie;
    const { movie } = this.props;
    return (
      <Container>
        <Card className={`${styles.card} mb-5`}>
          <Card.Img
            className={styles.cardImage}
            variant="top"
            src={
              poster !== "N/A"
                ? poster
                : "https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png"
            }
          />
          <Card.Body>
            <Card.Title className={styles.cardTitle}>{title}</Card.Title>
            <Card.Text>
              <span>{year}</span>
            </Card.Text>
            <Card.Text>
              <span>
                <span
                  className={`${this.ratingStyle(rating)} ${styles.cardRating}`}
                >
                  {rating}
                </span>
              </span>
            </Card.Text>

            <div className="d-flex justify-content-between">
              <Link href="/movie/[id]" as={`/movie/${imdbID}`}>
                <a>
                  <Button variant="primary">Details</Button>
                </a>
              </Link>
              {isFav ? (
                <button
                  className={styles.favButton}
                  onClick={() => this.removeFromFav({ ...movie, isFav: false })}
                >
                  <i className="fas fa-heart"></i>
                </button>
              ) : (
                <button
                  className={styles.favButton}
                  onClick={() => this.addToFav({ ...movie, isFav: true })}
                >
                  <i className="far fa-heart"></i>
                </button>
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

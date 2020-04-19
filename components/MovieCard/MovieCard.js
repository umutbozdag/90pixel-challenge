import Link from "next/link";
import styles from "./movie-card.module.scss";
import { Card, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import movieStore from "../../store/movieStore";

@observer
export default class MovieCard extends React.Component {
  addToFav = (movie) => {
    movieStore.addToFav(movie);
  };

  removeFromFav = (movie) => {
    movieStore.removeFromFav(movie);
  };

  ratingStyle = (rating) => {
    if (rating >= 7.5) return styles.green;
    else if (rating > 5 && rating < 7.5) return styles.yellow;
    else return styles.red;
  };

  render() {
    const { title, poster, year, imdbID, rating, isFav } = this.props.movie;
    const { movie } = this.props;
    return (
      <div>
        <div className={styles.card}>
          <img className={styles.cardImage} src={poster} alt="" />
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardText}>Lorem ipsum dolor sit amet.</p>
            <div className={`${styles.cardRating} ${this.ratingStyle(rating)}`}>
              {rating}
            </div>
            <button>
              {isFav ? (
                <i
                  onClick={() => this.removeFromFav(movie)}
                  class="fas fa-star"
                ></i>
              ) : (
                <i
                  onClick={() => this.addToFav(movie)}
                  className="far fa-star"
                ></i>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

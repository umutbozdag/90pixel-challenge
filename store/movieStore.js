import { computed, observable } from "mobx";

class MovieStore {
  @observable searchResult = [];
  @observable favorites = [];

  @computed get getSearchResult() {
    return this.searchResult;
  }

  @computed get getFavList() {
    return this.favorites;
  }

  pushItemToSearchList = (item) => this.searchResult.push(item);

  setSearchResult = (payload) => (this.searchResult = payload);

  setFavList = (payload) => (this.favorites = payload);

  removeFromFav = (movie) => {
    console.log("REMOVE");
    this.setFavList(this.getFavList.filter((x) => x.imdbID !== movie.imdbID));
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  };

  addToFav = (movie) => {
    this.favorites.push({ ...movie, isFav: true });
    this.setSearchResult(
      this.getSearchResult.filter((x) => x.imdbID !== movie.imdbID)
    );
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
    // let favorites = JSON.parse(localStorage.getItem("favorites"));
    // localStorage.setItem("favorites", JSON.stringify(this.favorites));
    // this.setSearchResult(
    //   this.getSearchResult.filter((x) => x.imdbID !== movie.imdbID)
    // );
  };

  addToSearchList = async (title, year, type) => {
    this.setSearchResult([]);

    fetch(`https://www.omdbapi.com/?s=${title}&apikey=6d0bdde0`)
      .then((res) => res.json())
      .then((result) => {
        return result;
      })
      .then((result) => {
        result.Search.forEach((movie) => {
          fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=6d0bdde0`)
            .then((res) => res.json())
            .then((result) => {
              this.searchResult.push({
                title: result.Title,
                year: result.Year,
                imdbID: result.imdbID,
                type: result.Type,
                poster: result.Poster,
                rating: result.imdbRating,
                plot: result.Plot,
                genre: result.Genre,
                isFav: false,
              });
            });
        });
      })
      .catch((err) => console.log(err));
  };
}

export default new MovieStore();

import { computed, observable, action } from "mobx";
import { API_KEY } from "../service/api";
import { toast } from "react-toastify";
class MovieStore {
  @observable searchResult = [];
  @observable favorites = [];
  @observable loading = false;
  @observable error = "";
  @observable totalResult = 0;

  @computed get getTotalResult() {
    return this.totalResult;
  }

  @computed get getSearchResult() {
    return this.searchResult;
  }

  @computed get getFavList() {
    return this.favorites;
  }

  @computed get isLoading() {
    return this.loading;
  }

  @computed get getError() {
    return this.error;
  }
  pushItemToSearchList = (item) => this.searchResult.push(item);

  setSearchResult = (payload) => (this.searchResult = payload);

  setFavList = (payload) => (this.favorites = payload);

  setError = (payload) => (this.error = payload);

  setLoading = (payload) => (this.loading = payload);

  setTotalResult = (payload) => (this.totalResult = payload);

  @action removeFromFav = (movie) => {
    this.setFavList(this.getFavList.filter((x) => x.imdbID !== movie.imdbID));
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  };

  @action addToFav = (movie) => {
    this.favorites.push(movie);
    this.setSearchResult(
      this.getSearchResult.filter((x) => x.imdbID !== movie.imdbID)
    );
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  };

  @action addToSearchList = async (title, year, type, page) => {
    this.setSearchResult([]);
    this.setLoading(true);
    fetch(
      `https://www.omdbapi.com/?s=${title}&y=${year}&type=${type}&page=${page}&apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.Response === "False") {
          this.setError(result.Error);
          this.setLoading(false);
          this.setSearchResult([]);
          toast.error(`${this.getError} Try again.`);
        }
        this.setTotalResult(result.totalResults);
        return result;
      })
      .then((resultData) => {
        if (!resultData.Search) return;
        resultData.Search.forEach((movie) => {
          fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
            .then((res) => res.json())
            .then((result) => {
              let favorites = JSON.parse(localStorage.getItem("favorites"));
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
        this.setLoading(false);
        this.setError("");
      })
      .catch((err) => {
        this.setError(err);
      });
  };
}

export default new MovieStore();

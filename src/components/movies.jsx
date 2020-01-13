import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Delete from "./delete";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import List from "./list";
class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentGenreId: 0,
    currentPage: 1,
    pageSize: 4
  };
  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
    this.setState({ movies });
  };
  handleLike = id => {
    const movies = this.state.movies.map(m =>
      m._id === id ? { ...m, liked: !m.liked } : m
    );
    this.setState({ movies });
  };
  handlePagination = page => {
    this.setState({ ...this.state, currentPage: page });
  };
  handleGenre = id => {
    this.setState({ ...this.state, currentGenreId: id, currentPage: 1 });
  };
  render() {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      genres,
      currentGenreId
    } = this.state;

    const filteredMovies =
      currentGenreId === 0
        ? allMovies
        : allMovies.filter(m => m.genre._id === currentGenreId);
    const totalCount = filteredMovies.length;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    if (allMovies.length === 0) {
      return <h2>No movies to display!!!</h2>;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <List
              genres={genres}
              currentGenreId={currentGenreId}
              onGenreChange={this.handleGenre}
            />
          </div>

          <div className="col">
            <span>
              <h2>Showing {totalCount} movies</h2>
            </span>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map(movie => {
                    const {
                      _id,
                      title,
                      genre: { name },
                      numberInStock,
                      dailyRentalRate
                    } = movie;
                    return (
                      <tr key={_id}>
                        <td>{title}</td>
                        <td>{name}</td>
                        <td>{numberInStock}</td>
                        <td>{dailyRentalRate}</td>
                        <td>
                          <Like onLike={this.handleLike} movie={movie} />
                          <Delete onDelete={this.handleDelete} id={_id} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Pagination
              totalCount={totalCount}
              currentPage={currentPage}
              pageSize={pageSize}
              onPagination={this.handlePagination}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;

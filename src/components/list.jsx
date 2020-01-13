import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
const List = props => {
  const { genres, currentGenreId, onGenreChange } = props;
  const newGenres = [{ _id: 0, name: "All Genres" }, ...genres];
  return (
    <ul className="list-group">
      {newGenres.map(genre => (
        <li
          onClick={() => onGenreChange(genre._id)}
          key={genre._id}
          className={
            genre._id === currentGenreId
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default List;

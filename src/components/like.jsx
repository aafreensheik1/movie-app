import React, { Component } from "react";
const Like = props => {
  const {
    movie: { _id, liked },
    onLike
  } = props;
  const likeClass = liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      onClick={() => {
        onLike(_id);
      }}
      className={likeClass}
      aria-hidden="true"
    ></i>
  );
};

export default Like;

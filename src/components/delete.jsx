import React, { Component } from "react";
const Delete = props => {
  const { onDelete, id } = props;
  return (
    <i
      className="fa fa-trash "
      aria-hidden="true"
      style={{ cursor: "pointer", color: "red", paddingLeft: "20px" }}
      onClick={() => {
        onDelete(id);
      }}
    ></i>
  );
};

export default Delete;

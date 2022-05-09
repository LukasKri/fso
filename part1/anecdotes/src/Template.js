import React from "react";

const Template = ({ title, anecdote, votesCount }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{anecdote}</div>
      <div>has {votesCount} votes</div>
    </div>
  );
};

export default Template;

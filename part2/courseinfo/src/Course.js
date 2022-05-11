import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course: { name, parts } }) => {
  const sum = parts.reduce((sum, { exercises }) => sum + exercises, 0);

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;

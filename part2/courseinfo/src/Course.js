import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course: { name, parts } }) => {
  let sum = 0;
  parts.forEach(({exercises}) => {
    sum += exercises 
  });

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;

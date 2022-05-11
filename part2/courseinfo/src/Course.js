import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course: { name, parts } }) => {
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
    </>
  );
};

export default Course;

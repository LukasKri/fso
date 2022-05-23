import React from "react";

const Person = ({ person, handleDeleteClick }) => {
  return (
    <div>
      <div>
        {person.name} {person.number}
      </div>
      <button onClick={() => handleDeleteClick(person)}>delete</button>
    </div>
  );
};

export default Person;

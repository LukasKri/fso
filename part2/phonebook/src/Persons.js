import React from "react";
import Person from "./Person";

const Persons = ({ persons, searchInput }) => {
  return (
    <div>
      {persons
        .filter(
          (person) =>
            person.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            searchInput === ""
        )
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </div>
  );
};

export default Persons;

import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import phoneService from "./services/records";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => setSearchInput(event.target.value);
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const resetFormInputs = () => {
    setNewName("");
    setNewNumber("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const foundPerson = persons.find((person) => person.name === newName);

    if (foundPerson) {
      if (
        window.confirm(
          `${personObject.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        phoneService.update(foundPerson.id, personObject);
      }
    } else {
      phoneService.create(personObject).then((returnedRecord) => {
        setPersons(persons.concat(returnedRecord));
        resetFormInputs();
      });
    }
  };

  useEffect(() => {
    phoneService.getAll().then((initialRecords) => setPersons(initialRecords));
  }, [persons]);

  const handleDeleteClick = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneService.deleteRecord(person.id);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <h2>Add a new</h2>
      <PersonForm
        nameValue={newName}
        numberValue={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        onSubmit={handleFormSubmit}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchInput={searchInput}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;

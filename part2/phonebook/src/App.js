import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
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

    const personExists = persons.find((person) => person.name === newName);

    if (personExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      resetFormInputs();
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
      <Persons persons={persons} searchInput={searchInput} />
    </div>
  );
};

export default App;

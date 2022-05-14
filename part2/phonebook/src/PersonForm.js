import React from "react";

const PersonForm = ({
  nameValue,
  numberValue,
  handleNameChange,
  handleNumberChange,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={nameValue} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={numberValue} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;

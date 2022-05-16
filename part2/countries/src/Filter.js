import React from "react";

const Filter = ({ searchInput, handleSearchInput }) => {
  return (
    <div>
      find countries
      <input value={searchInput} onChange={handleSearchInput} />
    </div>
  );
};

export default Filter;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import Filter from "./Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const foundCountriesCondition = countries.filter(({ name: { common } }) =>
    common.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      <div>
        <Filter
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
        />
      </div>
      <div>
        {foundCountriesCondition.length > 10 ? (
          "Too many matches, specify another filter"
        ) : foundCountriesCondition.length === 1 ? (
          <Country foundCountry={foundCountriesCondition[0]} />
        ) : (
          foundCountriesCondition.map(({ name: { official, common } }) => (
            <div key={official}>{common}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

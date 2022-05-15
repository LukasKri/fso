import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [foundCountries, setFoundCountries] = useState([]);

  const foundCountriesCondition = countries.filter(({ name: { common } }) =>
    common.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log(foundCountries);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    setFoundCountries(foundCountriesCondition);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      <div>
        find countries
        <input value={searchInput} onChange={handleSearchInput} />
      </div>
      <div>
        {foundCountries.length > 10 ? (
          "Too many matches, specify another filter"
        ) : foundCountries.length === 1 ? (
          <h1>one</h1>
        ) : (
          foundCountries.map((country) => (
            <div key={country.name.official}>{country.name.common}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

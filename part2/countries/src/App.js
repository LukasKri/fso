import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import Filter from "./Filter";
import CountryList from "./CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const foundCountries = countries?.filter(({ name: { common } }) =>
    common.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleShowButtonClick = (common) => {
    setSearchInput(common);
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
        {foundCountries.length > 10 ? (
          "Too many matches, specify another filter"
        ) : foundCountries.length === 1 ? (
          <Country foundCountry={foundCountries[0]} />
        ) : (
          <CountryList
            countryList={foundCountries}
            handleShowButtonClick={handleShowButtonClick}
          />
        )}
      </div>
    </div>
  );
};

export default App;

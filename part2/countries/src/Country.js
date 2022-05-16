import React from "react";

const Country = ({ foundCountry }) => {
  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <div>capital {foundCountry.capital}</div>
      <div>area {foundCountry.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(foundCountry.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img alt="Country flag" src={foundCountry.flags.png} />
    </div>
  );
};

export default Country;

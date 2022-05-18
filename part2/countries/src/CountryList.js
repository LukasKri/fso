import React from "react";

const CountryList = ({ countryList, handleShowButtonClick }) => {
  return (
    <div>
      {countryList.map(({ name: { official, common } }) => (
        <div key={official}>
          <div>{common}</div>
          <button onClick={() => handleShowButtonClick(common)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;

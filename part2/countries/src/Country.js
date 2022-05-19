import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ foundCountry }) => {
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  console.log("🚀 ~ file: Country.js ~ line 8 ~ Country ~ icon", icon);

  const {
    name: { common },
    capital,
    capitalInfo: { latlng },
    area,
    languages,
    flags: { png },
  } = foundCountry;

  const [lat, lng] = latlng;

  const OPEN_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`;

  useEffect(() => {
    axios.get(OPEN_WEATHER_URL).then((response) => {
      setTemp(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
    });
  }, [OPEN_WEATHER_URL]);

  return (
    <div>
      <h1>{common}</h1>
      <div>capital {capital}</div>
      <div>area {area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img alt="Country flag" src={png} />
      <h3>Weather in {capital}</h3>
      <div>temperature {temp} Celsius</div>
      {icon && (
        <img
          alt="Weather status icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      )}
      <div>wind {wind} m/s</div>
    </div>
  );
};

export default Country;

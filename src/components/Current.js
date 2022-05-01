import axios from "axios";
import React, { useEffect, useState } from "react";
import { formatDate, toHours } from "../helpers/helpers";
import "../components/Current.css";

const Current = ({ coordinates, current, units }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios({
      // Endpoint to get data
      url: `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.lon}`,
      method: "GET",
    }).then((res) => {
      //If city property is empty use other location properties
      if (res.data.city === "") {
        setLocation(`${res.data.locality} | ${res.data.principalSubdivision}`);
      } else {
        setLocation(`${res.data.city}`);
      }
    });
  }, [coordinates]);

  if (location && current) {
    return (
      <div className="current">
        <h2 className="location">{location}</h2>

        <p>{formatDate(current.dt)}</p>
        <p className="temperature">
          {Math.round(current.temp) +
            `\u00b0` +
            (units === "metric" ? "C" : "F")}
        </p>
        <p>(feels like {Math.round(current.feels_like) + `\u00b0`})</p>
        <p>{current.weather[0].description}</p>
        <div className="short-info">
          <p>
            {current.wind_speed.toFixed(1) +
              (units === "metric" ? "m/s" : "mph")}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].description}
          />
          <p>{current.humidity + `\u0025`}</p>
        </div>
        <div className="sun">
          <p>{toHours(current.sunrise)}</p>
          <p>{toHours(current.sunset)}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="current">
        <h2 className="location">
          {coordinates.errorMessage ? coordinates.errorMessage : location}
        </h2>
        <p>No weather data for your location</p>
      </div>
    );
  }
};

export default Current;

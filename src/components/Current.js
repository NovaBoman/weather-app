import axios from "axios";
import React, { useEffect, useState } from "react";

const Current = ({ coordinates, current }) => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    axios({
      // Endpoint to get data
      url: `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.lon}&localityLanguage=sv`,
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

        <p>Day | Date </p>
        <p className="temperature">{Math.round(current.temp)}c</p>
        <p>(feels like {Math.round(current.feels_like)})</p>
        <p>{current.weather[0].main}</p>
        <div className="short-info">
          <p>{current.wind_speed}</p>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].descritption}
          />
          <p>{current.humidity}%</p>
        </div>
        <div className="sun">
          <p>Sunrise</p>
          <p>Sunset</p>
        </div>
      </div>
    );
  } else {
    return (
      <h2 className="location">
        {coordinates.errorMessage ? coordinates.errorMessage : location}
      </h2>
    );
  }
};

export default Current;

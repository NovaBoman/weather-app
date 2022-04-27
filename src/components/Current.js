import axios from "axios";
import React, { useEffect, useState } from "react";

const Current = ({ coordinates }) => {
  const [location, setLocation] = useState("");

  console.log(coordinates);
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

  return (
    <div className="current">
      <h2 className="location">
        {coordinates.errorMessage ? coordinates.errorMessage : location}
      </h2>

      <p>Day | Date </p>
      <p className="temperature">23C</p>
      <p>Sunny</p>
      <div className="short-info">
        <p>Wind</p>
        <p>Icon</p>
        <p>Nederb.</p>
      </div>
    </div>
  );
};

export default Current;

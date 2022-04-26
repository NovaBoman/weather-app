import "./App.css";
import Forecast from "./components/Forecast";
import Current from "./components/Current";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
// const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  // VARIABLES
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
    errorMessage: "",
  });

  const [location, setLocation] = useState("");

  useEffect(() => {
    const getCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        //Success
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        //Error
        (error) => {
          setCoordinates({
            errorMessage:
              "Could not access your location, please check your browser settings",
          });
          console.log(error.message);
        }
      );
    };

    if (navigator.geolocation) {
      getCoordinates();
    } else {
      console.log("No geolocation avaliable");
    }
  }, []);

  useEffect(() => {
    // GET LOCATION NAME BY REVERSE GEOCODING

    const getLocation = () => {
      axios({
        // Endpoint to get data
        url: `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.lat}&longitude=${coordinates.lon}&localityLanguage=sv`,
        method: "GET",
      }).then((res) => {
        //If city property is empty use other location properties
        if (res.data.city === "") {
          setLocation(
            `${res.data.locality} | ${res.data.principalSubdivision}`
          );
        } else {
          setLocation(`${res.data.city}`);
        }
      });
    };
    getLocation();
  });

  console.log(coordinates);
  console.log(location);

  return (
    <div>
      <Header />
      <Current
        location={
          coordinates.errorMessage ? coordinates.errorMessage : location
        }
      />
      <Forecast />
    </div>
  );
};

export default App;

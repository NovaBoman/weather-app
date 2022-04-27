import "./App.css";
import Forecast from "./components/Forecast";
import Current from "./components/Current";
import Header from "./components/Header";
import { useEffect, useState } from "react";
// import axios from "axios";
// const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
    errorMessage: "",
  });

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

  return (
    <div>
      <Header />
      <Current coordinates={coordinates} />
      <Forecast />
    </div>
  );
};

export default App;

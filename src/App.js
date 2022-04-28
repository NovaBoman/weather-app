import "./App.css";
import Forecast from "./components/Forecast";
import Current from "./components/Current";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
    errorMessage: "",
  });

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // FUNCTION DEFINITIONS //

    const getCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        // On Success
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        // On Error
        (error) => {
          setCoordinates({
            errorMessage:
              "Could not access your location, please check your browser settings",
          });
          console.log(error.message);
        }
      );
    };

    // FUNCTION EXECUTION
    if (navigator.geolocation) {
      getCoordinates();
    } else {
      console.log("No geolocation avaliable");
    }
  }, []);

  useEffect(() => {
    const getWeatherData = (lat, lon, units, apiKey) => {
      try {
        const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`;
        axios.get(API_URL).then((res) => {
          setWeatherData(res.data);
        });
      } catch (e) {
        console.log(e);
      }
    };

    if (coordinates) {
      getWeatherData(coordinates.lat, coordinates.lon, "metric", apiKey);
    }
  }, [coordinates]);
  console.log(weatherData.current);
  console.log(weatherData.hourly);

  if (coordinates && weatherData && weatherData.hourly && weatherData.daily) {
    return (
      <div>
        <Header />
        <Current coordinates={coordinates} current={weatherData.current} />
        <Forecast hourly={weatherData.hourly} daily={weatherData.daily} />
      </div>
    );
  }
};

export default App;

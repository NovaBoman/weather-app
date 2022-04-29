import "./App.css";
import Forecast from "./components/Forecast";
import Current from "./components/Current";
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
  const [units, setUnits] = useState("metric");

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
      getWeatherData(coordinates.lat, coordinates.lon, units, apiKey);
    }
  }, [coordinates, units]);

  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  console.log(weatherData.current);
  console.log(weatherData.hourly);

  if (
    coordinates &&
    weatherData &&
    weatherData.hourly &&
    weatherData.daily &&
    units
  ) {
    return (
      <div>
        <div className="header">
          <p>Current</p>
          <div className="settings">
            <button
              className="toggle-units"
              value="metric"
              onClick={toggleUnits}
            >
              {`\u00b0`}C / {`\u00b0`}F
            </button>
          </div>
        </div>

        <Current
          coordinates={coordinates}
          current={weatherData.current}
          units={units}
        />
        <Forecast
          hourly={weatherData.hourly}
          daily={weatherData.daily}
          units={units}
        />
      </div>
    );
  }
};

export default App;

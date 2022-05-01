import React from "react";
import { formatDate, toHours } from "../helpers/helpers";
import "../components/Forecast.css";

const Forecast = ({ hourly, daily, units }) => {
  return (
    <div className="forecast">
      <h2>7 day forecast</h2>
      <div className="overview">
        {daily
          .map((day) => {
            return (
              <div className="overview-card">
                <p>{formatDate(day.dt, "short")}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
                <p>
                  {Math.round(day.temp.max) +
                    `\u00b0` +
                    `/` +
                    Math.round(day.temp.min) +
                    `\u00b0`}
                </p>
              </div>
            );
          })
          .slice(1)}
      </div>
      <h2>24 hour forecast</h2>
      <div className="detail">
        <div className="hourly">
          <table>
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Weather</th>
                <th scope="col">Temp</th>
                <th scope="col">Wind</th>
                <th scope="col">Hum.</th>
              </tr>
            </thead>
            <tbody>
              {hourly
                .map((hour) => {
                  return (
                    <tr>
                      <td>{toHours(hour.dt)}</td>
                      <td>
                        <img
                          src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                          alt={hour.weather[0].description}
                        />
                      </td>
                      <td>{Math.round(hour.temp) + `\u00b0`}</td>
                      <td>
                        {hour.wind_speed.toFixed(1) +
                          (units === "metric" ? "m/s" : "mph")}
                      </td>
                      <td>{hour.humidity + `\u0025`}</td>
                    </tr>
                  );
                })
                .slice(0, 24)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forecast;

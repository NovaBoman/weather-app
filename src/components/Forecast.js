import React from "react";
import { formatDate, toDate } from "../helpers/helpers";

const Forecast = ({ hourly, daily }) => {
  return (
    <div className="forecast">
      <p>Forecast</p>
      <div className="overview">
        {daily.map((day) => {
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
        })}
      </div>
      <p>Detail</p>
      <div className="detail">
        <div className="hourly">
          <table>
            <thead>
              <tr>
                <th scope="col">Time</th>
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
                      <td>{toDate(hour.dt)}</td>
                      <td>{Math.round(hour.temp) + `\u00b0`}</td>
                      <td>{hour.wind_speed.toFixed(1)} m/s</td>
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

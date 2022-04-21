import React from "react";

const Forecast = () => {
  return (
    <div className="forecast">
      <p>Forecast</p>
      <div className="overview">
        <div className="overview-card">Mon.</div>
        <div className="overview-card">Tue.</div>
        <div className="overview-card">wed.</div>
        <div className="overview-card">Thu.</div>
        <div className="overview-card">Fri.</div>
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
                <th scope="col">Prec.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12</td>
                <td>15</td>
                <td>4</td>
                <td>0mm</td>
              </tr>
              <tr>
                <td>13</td>
                <td>15</td>
                <td>3</td>
                <td>0mm</td>
              </tr>
              <tr>
                <td>14</td>
                <td>17</td>
                <td>2</td>
                <td>0mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forecast;

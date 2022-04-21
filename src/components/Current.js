import React from "react";

const Current = () => {
  return (
    <div className="current">
      <h2 className="location">Location</h2>
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

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p>Current</p>
      <div className="settings">
        <label htmlFor="f">F</label>
        <input type="checkbox" id="f"></input>
        <label htmlFor="c">C</label>
        <input type="checkbox" id="c"></input>
      </div>
    </div>
  );
};

export default Header;

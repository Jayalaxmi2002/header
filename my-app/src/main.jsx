import React from "react";

const Main = () => {
  return (
    <main className="main-container">
      <h1>Search across '4.7 Crore+' Businesses</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Betkuli, Karwar"
          className="location-input"
        />
        <input
          type="text"
          placeholder="Search in Karwar"
          className="search-input"
        />
        <button className="search-btn">🔍</button>
      </div>
    </main>
  );
};

export default Main;

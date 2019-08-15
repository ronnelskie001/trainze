import React from "react";

import mapImage from "./../assets/Final_Map2.jpg";

const MapPage = () => {
  return (
    <div className="container">
      <h1 className="header">Map</h1>
      <img src={mapImage} alt="map" className="img" />
    </div>
  );
};

export default MapPage;

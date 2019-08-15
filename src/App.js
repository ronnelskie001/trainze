import React, { useState } from "react";

import TopNav from "./component/navbar";
import HomePage from "./views/home";
import MapPage from "./views/map";
import RoutePage from "./views/route";
import AboutPage from "./views/about";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./App.css";

const App = () => {
  const [changePage, setChangePage] = useState("about");
  const RenderBody = () => {
    switch (changePage) {
      case "home":
        return <HomePage />;
      case "map":
        return <MapPage />;
      case "route":
        return <RoutePage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <>
      <TopNav changePage={changePage} setChangePage={setChangePage} />
      <RenderBody />
    </>
  );
};

export default App;

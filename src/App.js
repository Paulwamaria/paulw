import React, { Fragment } from "react";
import "./App.css";
import Mynav from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Mynav />
        <Footer />
      </div>
  
    </Fragment>
  );
}

export default App;

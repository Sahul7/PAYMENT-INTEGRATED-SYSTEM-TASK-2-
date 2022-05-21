import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
import Home from "./Screens/Home";
import Donate from "./Screens/Donate";
import Navbar from "./Components/Navbar";

function App() {
 
  return (
    <>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/donate" component={Donate} />
      {/* <Footer/> */}
    </>
  );
}

export default App;

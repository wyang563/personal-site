import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Experience from "./pages/Experiences.js";
import NotFound from "./pages/NotFound.js";
import Navbar from "./Navbar.js";
import { navigate } from "@reach/router";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {

  return (
    <>
      <Navbar />
      <Router>
        <Home path='/' />
        <Projects path='/projects' />
        <Experience path='/experience' />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;

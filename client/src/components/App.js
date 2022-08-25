import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Experience from "./pages/Experiences.js";
import NotFound from "./pages/NotFound.js";
import Navbar from "./Navbar.js";
import Blog from "./pages/Blog.js";
import Post1 from "./blog_pages/post1.js";
import Post2 from "./blog_pages/post2.js";
import Post8 from "./blog_pages/post8.js";
import Post7 from "./blog_pages/post7.js";
import Post6 from "./blog_pages/post6.js";
import Post10 from "./blog_pages/post10.js";
import Post12 from "./blog_pages/post12.js";
import Post13 from "./blog_pages/post13.js";
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
        <Blog path="/blog" />
        <Post1 path="/post1" />
        <Post2 path='/post2' />
        <Post8 path='/post8' />
        <Post7 path='/post7' />
        <Post6 path='/post6' />
        <Post10 path='/post10' />
        <Post12 path='/post12' />
        <Post13 path='/post13' />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;

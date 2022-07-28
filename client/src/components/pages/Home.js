import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "./Home.css"
import "../../utilities.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const Home = () => {
  return (
    <>
      <div className="home">
      <div className="about">
        <h2> Welcome, I'm Will</h2>
        <div className="prompt">
          <p>STEM student by day. Writer and philosopher by night. Something in between when I stay up too late.</p>
          <a href="https://www.linkedin.com/in/william-y-5aa6481a2/"> <LinkedInIcon /> </a>
          <a href="mailto:wyyang@mit.edu"> <EmailIcon /> </a>
          <a href="https://github.com/wyang563"> <GithubIcon /> </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
    </>
  );
};

export default Home;

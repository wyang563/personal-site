import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import profile_pic from "/Users/williamyang/Desktop/personalSite/client/src/components/images/photo.png";

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
          <h3>Links to Stuff</h3>
          <a href="https://www.linkedin.com/in/william-y-5aa6481a2/"> <LinkedInIcon /> </a>
          <a href="mailto:willyanglex@gmail.com"> <EmailIcon /> </a>
          <a href="https://github.com/wyang563"> <GithubIcon /> </a>
        </div>
      </div>
      <div className="skills">
        <h1> About Me</h1>
        <img src ={profile_pic} style={{borderRadius: 600}}/>
        <ol className="list">
          <li className="item">
            <h2> So Who Am I?</h2>
            <span>
              <p> I grew up in Massachusetts and am currently attending MIT where I study computer science and mathematics. My interests
              vary greatly though, so I try to learn from a wide array of subjects ranging from group theory to philosophy. A lot of my 
              previous research and independent study work can be found in the Projects/Research section of the website.</p>

              <p>I also have a number of hobbies that I try my best to maintain. I am an avid piano player (who plays poorly as of now), 
                a writer trying to learn the challenging art of creating short stories, and a classic Tetris player who occasionally streams
                on Twitch (no I'm not releasing the Twitch channel here). 
              </p>
            </span>
          </li>
          <li className="item">
            <h2>Experience</h2>
            <span>
              <h3 className='header'>Work:</h3>
              <p> <b>NLmatics Machine Learning Research Engineer </b> - Worked on research in improving document retrieval systems using dual question/contect encoders. My model was incorporated into the NLmatics search engine to improve product performance.</p>
              <p> <b>Biostatistics Researcher </b> - Created a RNA data analysis Python library. Programmed a variety of tools in the library: a regression model, bootstrapping/permutation tests, and heatmap generation.</p>
              <p> <b>Tutoring </b> - Done work in teaching competition and SAT math as well as public speaking. I was also a debate coach/TA in high shcool.</p>
              <h3 className='header'>General Programming:</h3>
              Python, C++, Pytorch, Numpy, Pandas, Selenium
              <h3 className='header'>Frontend/Backend:</h3>
              HTML, CSS, Javascript, ReactJS
              <h3 className='header'>Coursework:</h3>
              Intro to Machine Learning, Design and Analysis of Algorithms, Linear Algebra, Multi-variable Calculus, Differential Eqs, Discrete Math
            </span>
          </li>
          <li className="item">
            <h2>Interesting Websites/Reading</h2>
            <span>
              <h3>Below is a compilation of interesting concepts:</h3>
              <p><a href="https://www.denizcemonduygu.com/philo/browse/"> A History of Philosophy</a> </p>
              <p> <a href="https://xefer.com/wikipedia">All Wiki Articles Lead to Philosophy</a> </p>
              <p><a href="https://en.wikipedia.org/wiki/Special:Random"> Click for a Random Article</a></p>
            </span>
          </li>
        </ol>
      </div>
    </div>
    </>
  );
};

export default Home;

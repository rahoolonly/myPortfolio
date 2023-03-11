import React from "react";
import Skill from "../Skill/Skill";
import "./About.css";

const About = () => {
  return (
    <div style={{ paddingTop: "5rem" }} className="projects">
      <h3 style={{ fontSize: "3.5rem" }}>
        Hi, I'm{" "}
        <span style={{ fontSize: "5rem", color: "orange", fontWeight: "500" }}>
          Rahool Only
        </span>
      </h3>
      <p>I'm 20 years old, web developer, living in Punjab,IN.</p>

      <p>
        Currently, pursuing BCA from a college you might don't know. I know my
        college can not help me to get my dream job. So, I myself started
        focusing on development. I started with HTML, CSS, Javascript. Then I
        started Exploring React - Hooks, NextJS and several other useful
        libraries.
      </p>
      <p>
        Now, My main Aim is to get a tech job. Where I can learn and explore so
        many things
      </p>

      <div className="skills">
        <h3  className="heading">Skills</h3>
       
     <div className="skill">
     <Skill skill={"React"}/>
       <Skill skill={"Node js"}/>
       <Skill skill={"Express"}/>
       <Skill skill={"Bootstrap"}/>
     </div>

     <div className="skill">
     <Skill skill={"Git & Github"}/>
       <Skill skill={"ES6"}/>
       <Skill skill={"No SQL"}/>
       <Skill skill={"CSS"}/>
     </div>
      </div>
    </div>
  );
};

export default About;

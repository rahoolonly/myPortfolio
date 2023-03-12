import React from "react";
import './Footer.css'
import {
  AiFillTwitterSquare,
  AiOutlineLinkedin,AiFillGithub
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        gap: "8rem",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "1.8rem",
          paddingRight: "1rem",
          borderRight: "1px solid black",
        }}
      >
        {" "}
        &copy; Copyright 2023 - Rahool Only{" "}
      </div>
      <div>
        <div style={{gap:"2rem",display:"flex"}} >
       
          <div>
          <Link className="fs-1" target={"blank"} to={"https://twitter.com/rahoolonly"}> <AiFillTwitterSquare /></Link>
           
          </div>
          <div>
          <Link className="fs-1" target={"blank"} to={"https://www.linkedin.com/in/rahool-only-134b4120a"}> <AiOutlineLinkedin /></Link>
           
          </div>
          <div>
          <Link className="fs-1" target={"blank"} to={"https://github.com/rahoolonly/"}>    <AiFillGithub /></Link>
        
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;

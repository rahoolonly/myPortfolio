import React from "react";
import "./Home.css";
import profile from "../images/rahool__1_-removebg-preview.png";
import Project from "../Project/Project";
import project1 from "../images/Screenshot 2023-01-20 124812.png";
import project2 from "../images/Screenshot 2023-03-06 155306.png";
const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container-fluid pt-5">
          <div className="row ">
            <div className="col-md-5 home-text ">
              <h3>Hello I'm</h3>
              <h1>Rahool Only</h1>
              <p>
                Dont ask my{" "}
                <span style={{ fontWeight: "bold", color: "orange" }}>
                  Degree
                </span>
                <br />
                it will not gonna add any value in your life
              </p>
            </div>
            <div className="profile col-md-5">
              <img className="img-fluid " src={profile} alt="" />
            </div>
          </div>
        </div>

        <div className="projects  ">
          <h3 className="heading">Projects</h3>

          <div className="row mt-4 g-5">
            <div className="col-md-6">
              <Project
                project={project1}
                desc={"This a Typing Master. You can check your typing speed"}
                title={"Typing Master"}
              />
            </div>

            <div className="col-md-6">
              <Project
                project={project2}
                desc={
                  "This a Youtube Clone Website. Here, you can watch youtube videos."
                }
                title={"Youthoob Clone"}
              />
            </div>
          </div>

          <a
            style={{ backgroundColor: "orange" }}
            href="#"
            id="button"
            className=" btn btn-primary"
          >
            More Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

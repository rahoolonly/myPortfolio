import React from "react";
import Project from "../Project/Project";
import "./Projects.css";
import project1 from "../images/Screenshot 2023-01-20 124812.png";
import project2 from "../images/Screenshot 2023-03-06 155306.png";

const Projects = () => {
  return (
    <div>
      <div
        style={{ paddingTop: "5rem" }}
        className="projects project-container "
      >
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
      </div>
    </div>
  );
};

export default Projects;

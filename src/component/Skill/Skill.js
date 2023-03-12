import React from "react";
import "./Skill.css"

const Skill = ({ skill }) => {
  return (
    <div>
      <div
        style={{
          borderRadius: "4rem",
          textAlign: "center",
          display:"flex",
          justifyContent:"center",
          width: "10rem",
          border: "1px solid rgb(230, 230, 230)",
        }}
        className="card-body"
      >
        <p className="card-text fs-3">{skill}</p>
      </div>
    </div>
  );
};

export default Skill;

import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({project,desc,title,link}) => {
  return (
    <div>
        <div  className="card">
                <img  src={project} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 style={{color:"#2c2f32", fontSize:"2rem"}} className="card-title">{title}</h4>
                  <p className="card-text">
                  {desc}
                  </p>
                  <Link target={"blank"} to={link} className="btn btn-primary">
                  Live
                  </Link>
                </div>
              </div>
    </div>
  )
}

export default Project
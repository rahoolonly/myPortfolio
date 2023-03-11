import React from 'react'

const Project = ({project,desc,title}) => {
  return (
    <div>
        <div  className="card">
                <img  src={project} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 style={{color:"#2c2f32", fontSize:"2rem"}} className="card-title">{title}</h4>
                  <p className="card-text">
                  {desc}
                  </p>
                  <a href="#" className="btn btn-primary">
                  Explore More
                  </a>
                </div>
              </div>
    </div>
  )
}

export default Project
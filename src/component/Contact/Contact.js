import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div  style={{ paddingTop: "5rem" }} className='contact projects'>

<h3>
    Let's <span style={{color:"orange"}}>Connect</span>
</h3>
<p>Being a self taught coder. I would love to work on a real world project
</p>

<div className="row mt-5">
    <div className="col-md-6">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="fs-4 form-label">Name </label>
  <input type="name" class="fs-4 form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="fs-4 form-label">Email </label>
  <input type="email" class="fs-4 form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="fs-4 form-label">Message</label>
  <textarea class="fs-4 form-control" id="exampleFormControlTextarea1" placeholder='Hi, You look great today' rows="3"></textarea>
</div></div>

<div className="col-md-6"></div>
</div>
    </div>
  )
}

export default Contact
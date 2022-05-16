
import React, { useState } from "react";

import './Signup.style.css'

import axios from 'axios'



function Signup() {

  const [allValues, setAllValues] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });


const handleChange = (event) => {
  const { name, value } = event.target;
  setAllValues({ ...allValues, [name]: value });
};


const handleSubmit = (event) =>{
  event.preventDefault();

        axios.post("https://admin-dashboard-backend.vercel.app/signup",{
          name: allValues.name,
          email: allValues.email,
          address: allValues.address,
          password: allValues.password
        })
        .then(response => {
          console.log(response.data)
          alert("SignUp successfully.")
        })
        .catch(error => console.log(error))
};


    return(
      
            <>
            
      <form style={{border:"1px solid #ccc"}}>
        <div className="container">
          <h1>Sign Up</h1>

          <div>
          <label className="label">Name</label>
          <input type="text" name="name" placeholder="Enter Name" className="name" value={allValues.name} onChange={handleChange} required/>
          </div>

          <div>
          <label className="label">Email</label>
          <input type="text" name="email" placeholder="Enter Email" className="email" value={allValues.email} onChange={handleChange} required/>
          </div>

          <div>
          <label className="label">Address</label>
          <input type="text" name="address" placeholder="Enter Address" className="address" value={allValues.address} onChange={handleChange} required/>
          </div>

          <div>
          <label htmlFor="psw">Password</label>
          <input type="password" name="password" placeholder="Enter Password" className="psw" value={allValues.password} onChange={handleChange} required/>
          </div>

          <div>
          <label htmlFor="psw-repeat">Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="psw-repeat" value={allValues.confirmPassword} onChange={handleChange} required/>
          </div>


          <div className="clearfix">
            <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </form>              
            </>
        
    )  ;
}

export default Signup
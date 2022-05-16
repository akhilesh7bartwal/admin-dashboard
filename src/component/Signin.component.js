
import axios from "axios";
import React, { useState } from "react";

import './Signin.style.css'

function Signin () {

    const [allValues,setAllValues] = useState({
      email:"",
      password:""
    });

    const handleChange = (event) =>{
      console.log(allValues)
      const {name,value} = event.target;
      setAllValues({...allValues, [name]:value});
    };

    const submitHandler = (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:3030/signin", {
          email: allValues.email,
          password: allValues.password,
        })
        .then((response) => {
          console.log(response);
          alert("Signin Successfull");
        })
        .catch((error) => console.log(error));
    };
    
    return(
        <>
        <form style={{border:"1px solid #ccc"}}>
          <div className="container">
            <h1>Sign In</h1>


            <div>
            <label className="label">Email</label>
            <input type="text" name="email"  placeholder="Enter Email" className="email" value={allValues.email} onChange={handleChange}  required/>
            </div>


            <div>
            <label htmlFor="psw">Password</label>
            <input type="password" name="password" placeholder="Enter Password"  className="psw" value={allValues.password} onChange={handleChange} required/>
            </div>


            <div className="clearfix">
              <button type="submit" className="signinbtn" onClick={submitHandler}>Sign In</button>
            </div>
          </div>
        </form>              
        </>
    )
    
}

export default Signin
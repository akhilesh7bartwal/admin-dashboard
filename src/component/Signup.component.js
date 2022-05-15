
import React, { useState } from "react";

import './Signup.style.css'

import axios from 'axios'

function Signup() {

  // constructor(){
  //   super()
  //   this.state={
  //       name:'', 
  //       email:'',
  //       address:'',
  //       password:''
  //   }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //const [submitted, setSubmitted] = useState(false)


const handleName = (event)=>{
  setName (event.target.value)
  //console.log(name)
};

const handleEmail = (event)=>{
  setEmail(event.target.value)
};

const handleAddress = (event) =>{
  setAddress(event.target.value)
};


const handlePassword = (event) =>{
  setPassword(event.target.value)
};

const handleConfirmPassword = (event) =>{
  setConfirmPassword(event.target.value)
};


const handleSubmit = (event) =>{
  event.preventDefault();
  axios.post("http://localhost:3030/signup",{
    name:name,
    email:email,
    address:address,
    password:password
  })
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
};


    return(
      
            <>
            
      <form style={{border:"1px solid #ccc"}}>
        <div className="container">
          <h1>Sign Up</h1>

          <div>
          <label className="label">Name</label>
          <input type="text" placeholder="Enter Name" className="name" value={name} onChange={handleName} required/>
          </div>

          <div>
          <label className="label">Email</label>
          <input type="text" placeholder="Enter Email" className="email" value={email} onChange={handleEmail} required/>
          </div>

          <div>
          <label className="label">Address</label>
          <input type="text" placeholder="Enter Address" className="address" value={address} onChange={handleAddress} required/>
          </div>

          <div>
          <label htmlFor="psw">Password</label>
          <input type="password" placeholder="Enter Password" className="psw" value={password} onChange={handlePassword} required/>
          </div>

          <div>
          <label htmlFor="psw-repeat">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" className="psw-repeat" value={confirmPassword} onChange={handleConfirmPassword} required/>
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
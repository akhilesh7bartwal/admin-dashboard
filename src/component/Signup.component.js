
import React from "react";

import './Signup.style.css'

class Signup extends React.Component {

  


    render(){
        return(
            <>
      <form style={{border:"1px solid #ccc"}}>
        <div className="container">
          <h1>Sign Up</h1>

          <div>
          <label className="label">Name</label>
          <input type="text" placeholder="Enter Name" className="name" required/>
          </div>

          <div>
          <label className="label">Email</label>
          <input type="text" placeholder="Enter Email" className="email" required/>
          </div>

          <div>
          <label className="label">Address</label>
          <input type="text" placeholder="Enter Address" className="address" required/>
          </div>

          <div>
          <label htmlFor="psw">Password</label>
          <input type="password" placeholder="Enter Password" className="psw" required/>
          </div>

          <div>
          <label htmlFor="psw-repeat">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" className="psw-repeat" required/>
          </div>


          <div className="clearfix">
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>              
            </>
        )
    }  
}

export default Signup
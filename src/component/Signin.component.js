
import React from "react";

import './Signin.style.css'

class Signin extends React.Component {


    render(){
        return(
            <>
      <form style={{border:"1px solid #ccc"}}>
        <div className="container">
          <h1>Sign In</h1>


          <div>
          <label className="label">Email</label>
          <input type="text" placeholder="Enter Email" className="email" required/>
          </div>


          <div>
          <label htmlFor="psw">Password</label>
          <input type="password" placeholder="Enter Password" className="psw" required/>
          </div>


          <div className="clearfix">
            <button type="submit" className="signinbtn">Sign In</button>
          </div>
        </div>
      </form>              
            </>
        )
    }  
}

export default Signin
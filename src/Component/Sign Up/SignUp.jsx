import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import './SignUp.css'
import { NavLink } from 'react-router-dom';


function SignUp() {
  return (
    <div className='signupSection'>
        <div className="formContainer">
          <h1>Create Account</h1>
          <div className="buttonContainer">
          <button className='signWithGoogle'>
            <span className="GoogleIcon"><FcGoogle/></span>
            <span className="GoogleContent">SignUp With Google</span>
          </button>
          <button className='signWithGithub'>
            <span className="GithubIcon"><FaGithub /></span>
            <span className="GithubContent">SignUp With Github</span>
          </button>
          </div>
            
          <form action="#">
           <input type="text" name="name" id="name" placeholder='Full Name' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="password" name="password" id="password" placeholder='Password' />
            <input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
            <input id="submitBtn" type="submit" value="Sign Up" />
            <NavLink className='login' to= '/signin'>You have an account? Log in</NavLink>
          </form>
        </div>
    </div>
  )
}

export default SignUp

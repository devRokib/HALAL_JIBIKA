import { NavLink } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
  return (
    <div className='signinSection'>
        <div className="formContainer">
          <h1>Log In</h1>
          <form action="#">
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="password" name="password" id="password" placeholder='Password' />
            <input id="submitBtn" type="submit" value="Log In" />
            <NavLink className='signup' to= '/signup'>You haven't an account? Sign up</NavLink>
          </form>
        </div>
    </div>
  )
}

export default SignIn

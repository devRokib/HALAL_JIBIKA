import './Header.css'
import {  NavLink } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../fireConfige/FirebaseConfig';
import { signOut } from 'firebase/auth';


function Header() {
  const[user] = useAuthState(auth)
  const logout = ()=>{
    signOut(auth)
    
  }
  return (
    <div className='headerSection'>
      <div className="headerContainer">
       
        <div className="headerMenu">
          <nav>
          <input type="checkbox" id='check' />
            <label htmlFor="check" className='checkbtn'><i className="fa-solid fa-bars"></i></label>
              <div className="headerLogo">
                <NavLink to= '/'><h1>HALAL JIBIKA</h1></NavLink>
                </div>
                <ul>
              
              <div className="navMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/jobs/id/favorite">Favorite</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              <div className="signMenu">
                <NavLink>
                {
                  user?<NavLink onClick={logout}>LogOut</NavLink>:<NavLink to="/signin">SignIn</NavLink>
                }
                </NavLink>
                
                <NavLink>
                <span className='UserDisplayName'>{user?.displayName}</span>
                  <span><NavLink to='/signup'>{user?.photoURL?<img   src={user?.photoURL} alt=""/> :"SignUp"}</NavLink>
                </span>
                </NavLink>
                </div>
            </ul>
           
            
          </nav>
         
        </div>
      </div>
    </div>
  )
}

export default Header

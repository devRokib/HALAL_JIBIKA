import './Header.css'
import { NavLink } from 'react-router-dom'
import { IoLogOut } from "react-icons/io5";
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
       <div className="headerLogo">
         <NavLink to= '/'><h1>HALAL JIBIKA</h1></NavLink>
       </div>
        <div className="headerMenu">
          <ul>
            <div className="navMenu">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/favorite">Favorite</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="signMenu">
              {
                user?<NavLink onClick={logout}>LogOut</NavLink>:<NavLink to="/signin">SignIn</NavLink>
              }
              <span className='UserDisplayName'>{user?.displayName}</span>
              
              <span>{user?.photoURL?<img src={user?.photoURL} alt=""/> :<NavLink to= "/signup">SignUp</NavLink>}
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

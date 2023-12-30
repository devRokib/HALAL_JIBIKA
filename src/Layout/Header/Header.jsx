import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
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
              <NavLink to="/signup">SignUp</NavLink>
              <NavLink to="/signin">SignIn</NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

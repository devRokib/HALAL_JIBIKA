import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='headerSection'>
      <div className="headerContainer">
       <div className="headerLogo">
         <NavLink to= '/'><img src="https://i.ibb.co/JtjWwfk/Screenshot-6-removebg-preview.png" alt="Screenshot-6-removebg-preview" border="0"/></NavLink>
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
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/signin">Sign In</NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

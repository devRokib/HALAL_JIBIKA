
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footerSection'>
      <div className="footer">
        <div className="footerColumn">
          <h3>HALAL JIBIKA</h3>
          
          <ul className='footerMenu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/jobs/:id/favorite'>Favorite</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </ul>
        </div>
        <div className="footerColumn">
          <h3>Column 2</h3>
          <p>Content for column 2 goes here.</p>
          <p>Additional content for column 2.</p>
        </div>
        <div className="footerColumn">
          <h3>Column 3</h3>
          <p>Content for column 3 goes here.</p>
          <div>
            <p>Contact Information:</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <hr style={{color:'#fff'}} />
      <div className="footerBottom">
        <p style={{textAlign:'center',color:'#fff', padding:'10px 0'}}>&copy; 2024 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
   
  <nav>
  <div className="nav-wrapper blue">
    <Link to="/" className="brand-logo">Todo</Link>
    <ul id="nav-mobile" className="right">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/singup">Singup</Link></li>
      <li> 
          <button className='btn red'>Logout</button>
      </li>
    </ul>
  </div>
</nav>
      
 )
}

export default NavBar;
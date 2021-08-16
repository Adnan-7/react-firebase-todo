import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import {useHistory} from 'react-router-dom'

const NavBar = ({user}) => {

    const history = useHistory();
 return (
   
  <nav>
  <div className="nav-wrapper blue">
    <Link to="/" className="brand-logo">Todo</Link>
    <ul id="nav-mobile" className="right">
        {
            user ? <li> 
            <button className='btn red' onClick={()=>{
                auth.signOut()
                history.push('/login')
            }}>Logout</button>

        </li>:<> <li><Link to="/login">Login</Link></li>
      <li><Link to="/singup">Singup</Link></li></>
}
      
      
    </ul>
  </div>
</nav>
      
 )
}

export default NavBar;
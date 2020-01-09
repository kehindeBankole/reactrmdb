import React from 'react';
import logo from './images/reactMovie_logo.png'
import tmdb from './images/tmdb_logo.svg'
import { Link } from "@reach/router";


const Nav = (props) => {

return(
  
<div>
<nav className="navbar navbar-dark bg-dark">
  <Link className="navbar-brand" to="/" onClick={props.clicked}>
  <img src={logo} alt="application logo" className="img-fluid" style={{height:"30px"}}/>
  </Link>
  <img src={tmdb} alt="api logo" className="img-fluid" style={{width:"100px",height:"30px"}}/>
</nav>


   </div>
)

};


export default Nav;

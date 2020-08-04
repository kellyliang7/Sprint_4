import React, { Component } from 'react';
import { Link } from 'react-router-dom'

/* export const navBar = () => {
  return ( 
    <div>
      <NavLink>Home</NavLink>
    </div>
  )
}

*/ 

class NavBar extends Component {
  render() {
    return(
      <div>
        <Link to="/home">Home</Link>
      </div>
    )
  }
}

export default NavBar

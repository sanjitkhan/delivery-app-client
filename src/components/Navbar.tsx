import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/datetime">Date & Time</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;
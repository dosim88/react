import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <div>
      <Link to='/'>React blog</Link>
    </div>
  </div>
);

export default Header;
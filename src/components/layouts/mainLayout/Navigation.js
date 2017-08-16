import React from 'react';

import { Link } from 'react-router-dom';

import { index, about, contacts, postCreate } from 'helpers/routes';


const Navigation = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav">
          <li>
            <Link to={index}>Home</Link>
          </li>
          <li>
            <Link to={about()}>About</Link>
          </li>
          <li>
            <Link to={contacts()}>Contacts</Link>
          </li>
          <li>
            <Link to={postCreate()}>Create Post</Link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
);


export default Navigation;


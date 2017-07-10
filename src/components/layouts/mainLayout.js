import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';


const MainLayout = ({ children }) => (
  <div className='container'>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <div className='header'>
    <div>
      <Link to='/'>React blog</Link>
    </div>
  </div>
);

const Footer = () => (
  <div className='footer'>
    Temp footer for react blog
  </div>
);

const GoBackButton = withRouter(({ history }) => (
  <div className='go-back'>
    <button className='btn btn-info' onClick={history.goBack}>Назад</button>
  </div>
));

export default MainLayout;
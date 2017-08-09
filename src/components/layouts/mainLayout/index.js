import React, { PropTypes } from 'react';

import Header from 'components/layouts/mainLayout/Header';
import GoBackButton from 'components/layouts/mainLayout/GoBackButton';
import Footer from 'components/layouts/mainLayout/Footer';

const MainLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <GoBackButton />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
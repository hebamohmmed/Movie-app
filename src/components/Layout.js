import React from 'react';

import Header from './Header';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      test
      <Header />
      {children}
    </div>
  );
};

export default Layout;
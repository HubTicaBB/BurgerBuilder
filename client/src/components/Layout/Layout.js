import React from 'react';
import Aux from '../../hoc/Auxx';

const Layout = props => (
  <Aux>
    <nav className='navbar navbar-dark bg-primary'>Toolbar, SideDrawer, Backdrop</nav>
    <main>
      { props.children }
    </main>
  </Aux>
);

export default Layout;

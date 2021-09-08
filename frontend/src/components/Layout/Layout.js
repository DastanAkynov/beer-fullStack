import React from 'react';
import Menu from '../Menu/Menu';

const Layout = props => {
  return (
    <div>
        <Menu />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
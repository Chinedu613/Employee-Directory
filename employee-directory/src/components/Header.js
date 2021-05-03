import React from 'react';
import logo from '../assets/logo192.png'


function Header () {
    return(
<nav className="navbar navbar-dar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="google.com">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Foo-Co Inc.
    </a>
  </div>
</nav>
    );
}

export default Header;
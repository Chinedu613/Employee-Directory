import React from 'react';
import logo from '../assets/logo192.png'


function Header () {
    return(
<nav class="navbar navbar-dar bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="google.com">
      <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Foo-Co Inc.
    </a>
  </div>
</nav>
    );
}

export default Header;
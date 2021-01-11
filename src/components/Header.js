import React from "react";
import Logo from './utils/Logo'
import NavMenu from "./utils/NavMenu";

const Header = () => {
  return (
    <div>
      <div className='header'>
        <Logo/>
        {window.screen.availWidth < 800 ? "": <NavMenu />}
        
      </div>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { useState } from "react";

import Advice from "./Advice";
import "../styles/components/_header";


    const Header = () => {
      const dropdown = document.querySelector(".dropdown");

      const [isDropdown, setIsDropdown] = useState(false);

      function dropdownToggle() {
        if(isDropdown == false)
          setIsDropdown(true)
        else if(isDropdown == true)
          setIsDropdown(false)
      }
    return ( 
      <header>
        <div className="container container-main row">
          
        <a className="hamburger" onClick={() => dropdownToggle()}>
            <img src="/assets/images/burger-solid.svg" alt="a burger" />
          </a>

          {isDropdown && <div className="dropdown">
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>}


          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/gallery" className="nav__link">
                  <span>Gallery</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/portfolio" className="nav__link">
                  <span>Portfolio</span>
                </Link>
              </li>
            </ul>
          </nav>
         
        </div>
        
        <Advice/>
    </header>
  );
}
 
export default Header;
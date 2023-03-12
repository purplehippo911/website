import { Link } from "react-router-dom";

import Advice from "./Advice";
import "../styles/components/_header";


    const Header = () => {
      const hamburger = document.querySelector(".hamburger");
      const dropdown = document.querySelector(".dropdown");

    return ( 
      <header>
        <div className="container container-main row">
          
          <div className="dropdown">
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>
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
          <a className="hamburger" onClick={() => dropdown.classList.toggle("active")}>
            <img src="/assets/images/burger-solid.svg" alt="a burger" />
          </a>
        </div>
        
        <Advice/>
    </header>
  );
}
 
export default Header;
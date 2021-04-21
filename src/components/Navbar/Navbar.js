import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
    // Create State & SetState Functionality (Initial Value: False)
    const [click, setClick] = useState(false);
    // Toggle Responsive Menu Icon On Click Function
    const toggleClickState = () => setClick(!click);
    // Close Mobile Menu Function
    const closeMobileMenu = () => setClick(false);

    // CreateButton State & SetState Functionality (Initial Value: True)
    const [button, setButton] = useState(true);
    // Show Or Hide Button Depends On Screen Width
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    // Add Event Listener On Window Resize
    window.addEventListener("resize", showButton);
    // Apply showButton Function When Component Loaded
    useEffect(() => {
      showButton();
    }, []);

    // Return View
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>SAFARI <i className="fab fa-typo3" /></Link>
          <div className="navbar-responsive-icon" onClick={toggleClickState}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="navbar-link" onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" className="navbar-link-mobile" onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
          {
            button &&
            <Link to="/signup"><Button buttonStyle="btn--outline" buttonSize="btn--medium">Sign Up</Button></Link>
          }
        </div>
      </nav>
    );
  }
;

export default Navbar;

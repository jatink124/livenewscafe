import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
  const [isMobile,setIsMoblie] = useState(false);
    return (
       <nav className="navbar">
           <h3 className="logo">Logo</h3>
<ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
    <Link to="/" className="home">
<li class="mobile-menu-li">Home</li>
    </Link>
    <Link to="/" className="about">
<li class="mobile-menu-li">About</li>
    </Link>
    <Link to="/" className="skills">
<li class="mobile-menu-li">Skills</li>
    </Link>
    <Link to="/" className="contact">
<li class="mobile-menu-li">Contact</li>
    </Link>
    <Link to="/" className="signup">
<li class="mobile-menu-li">Sign Up</li>
    </Link>

</ul>
<button className="mobile-menu-icon"
onClick={() => setIsMoblie(!isMobile)}
>
    {isMobile ? (
        <i className="fas fa-times"></i>
    ):(
        <i className="fas fa-bars"></i>
    )}
</button>
       </nav>
    );
};

export default Navbar

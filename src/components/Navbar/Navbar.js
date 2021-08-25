import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
  const [isMobile,setIsMoblie] = useState(false);
    return (
       <Nav className="navbar">
           <h3 className="logo">FreshNewsCafe</h3>
<ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
    <Link to="/" className="home">
<li class="mobile-menu-li"><span>Home</span></li>
    </Link>
    <Link to="/" className="india">
<li class="mobile-menu-li"><span>India</span></li>
    </Link>
    <Link to="/" className="world">
<li class="mobile-menu-li"><span>World</span></li>
    </Link>
    <Link to="/" className="entertainment ">
<li class="mobile-menu-li"><span>Entertainment</span></li>
    </Link>
    <Link to="/" className="signup">
<li class="mobile-menu-li"><span>SignUp</span></li>
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
       </Nav>
    );
};

const Nav = styled.div`
display:flex;
flex:1;
// margin-left:25px;
align-items:center;

a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

img{
    height:20px;
}

span{
    font-size: 13px;
    letter-spacing:1.42px;
    color:aliceblue;
    position:relative;

    &:after {
        content:"";
        height:2px;
        background: white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity:0;
       transform-origin: left center;
       transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform: scaleX(0);
    }}
&:hover{
    span:after {
        transform: scaleX(1);
        opacity: 1;
    }
}
}
`
export default Navbar

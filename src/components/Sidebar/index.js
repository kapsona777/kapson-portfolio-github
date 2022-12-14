import {Link,NavLink} from 'react-router-dom'; 
import React from 'react';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome, faUser, faEnvelope,faPhone, faWrench, faUsers,faLocationDot, faQuestionCircle, faBlog} from '@fortawesome/free-solid-svg-icons';
import { faFacebook , faInstagram, faLinkedin, faYoutube,faMailchimp} from '@fortawesome/free-brands-svg-icons'; 
import Dropdown from 'react-bootstrap/Dropdown';
 
const Sidebar = () => (  
    
    <div className="nav-bar">
        <div className='header'>
            <ul id="contactNav">
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faLocationDot} color="#4d4d4e"/>
                        <span>Address</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                        <span>Email</span>
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faPhone} color="#4d4d4e"/>
                        <span>Phone</span>
                    </a>
                </li>  

            </ul>
            <ul id="socialNav">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/akhalikhedva/about/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/akhalikhedva.ge/">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UClPWZQ6pBJsWken3dMR6eAQ">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/akhali_khedva/">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
        {/* <Link className='logo' to='/'>
            <img src = {LogoS} alt='logo' /> 
            <img className="sub-logo" src = {LogoSubtitle} alt='newVision' /> 
        </Link> */}
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/"> 
                <h1>?????????????????????</h1>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link"  >
                <h1 href="/about">??????????????? ?????????????????????</h1>
                <div className="dropdown-content" id="dropdown_content">
                    <h1 href="/about">??????????????? ?????????????????????</h1>
                    <h1 href="/tech">????????????????????????????????????</h1>
                    <h1 href="/gallery">?????????????????????</h1>
                    <h1 href="/virtualTour">??????????????????????????????<br></br>????????????</h1>
                    <h1 href="/faq">FAQ</h1>
                </div>
                
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="services-link" to="/services">
                <h1>???????????????????????????</h1>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="team-link" to="/team">
                <h1>?????????????????????</h1>
            </NavLink> 

            <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
                <h1>???????????????</h1>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <h1>????????????????????????</h1>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="login-link" to="/login">
                <h1>?????????????????????????????????</h1>
            </NavLink>

            
        </nav> 
    </div>
) 

export default Sidebar;
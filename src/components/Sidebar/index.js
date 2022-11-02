import {Link,NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faWrench, faUsers, faQuestionCircle, faBlog} from '@fortawesome/free-solid-svg-icons';
import { faFacebook , faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src = {LogoS} alt='logo' /> 
            <img className="sub-logo" src = {LogoSubtitle} alt='newVision' /> 
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="services-link" to="/services">
                <FontAwesomeIcon icon={faWrench} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="team-link" to="/team">
                <FontAwesomeIcon icon={faUsers} color="#4d4d4e"/>
            </NavLink>


            <NavLink exact="true" activeclassname="active" className="faq-link" to="/faq">
                <FontAwesomeIcon icon={faQuestionCircle} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
                <FontAwesomeIcon icon={faBlog} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

            
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lasha-kapanadze-427544179/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/kapsona777">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/lasha.kapannadze/">
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;
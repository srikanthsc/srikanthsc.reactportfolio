import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
     <Link 
        className="logo"
        to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="sc" />
      </Link>
      <nav>
        <NavLink exact="true"
          activeclassname="active"
          to="/">
             <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

        </NavLink>
        <NavLink exact="true"
          activeclassname="active"
          className="about-link"
          to="/about">
             <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

        </NavLink>
        <NavLink exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact">
             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/srikanth-collaty-9343a520b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/srikanthsc"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCcXILnCJo_dzXOcMS4lnE5A"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fhl%3Dfr&emr=1&hl=fr&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&ifkv=ASKXGp1Qxa0xH6VqgfspSTZy5mcE50F3bdwr9FVOSMQqg_yL9zloPZNHpNBQgj9523M1Ok-0NaPHFg&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faGoogle}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
  </div>
)


export default Sidebar
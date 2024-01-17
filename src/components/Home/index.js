import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['r', 'i', 'k', 'a', 'n', 't', 'h']
  const jobArray = [
    'I',
    'T',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]
 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Clear the timeout when the component unmounts or when the effect is re-run
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name"/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </h1>
            <h2>Fullstack Engineer</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
           
            </div>
            <Logo />
            
      <Loader type="pacman" />
    
            </div>
            
           
  );
}

export default Home
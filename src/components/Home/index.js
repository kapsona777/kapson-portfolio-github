import LogoTitle from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from './Logo';

const Home = () => {
    const[letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['ა','ხ','ა','ლ','ი',' ','ხ','ე','დ','ვ','ა'];
    const jobArray = ['ს','ა','მ','ე','დ','ი','ც','ი','ნ','ო',' ','ჯ','გ','უ','ფ','ი'];

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover');
            },4000)
            },[])
        

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>  
                <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br/> 
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={17}/>
                </h1> 
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />


        </div>
    );
}
    
export default Home;
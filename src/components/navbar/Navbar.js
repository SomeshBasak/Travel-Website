import React from 'react'
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import Footer from '../footer/Footer'
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';


const Nav = () => {
    // const { loginWithRedirect,logout , user, isAuthenticated,} = useAuth0();
    return (

        <>

            <div className='nav'> 
                <nav>
                    <div className="navbrand">
                        <img src='tdlogo.jpg' alt='tdlogo' className='td-logo'></img>
                    </div>
                    <input type="checkbox" id="check"/>
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul class="navbar">
                        <li className='search-box '>
                            <input type='text' value='' placeholder='Search '></input>
                        </li>
                        <li>
                            <Link to="/home" className='link'>
                                <a href="#home" className='active' style={{ color: '#FF4127' }}>Home</a></Link>
                        </li>
                        <li>
                            <Link to="/visa" className='link'>
                                <a href="#visa" className='active' >Visa</a></Link>
                        </li>
                        <li>
                            <Link to="/about" className='link'>
                                <a href="#about" className='active' >About</a></Link>
                        </li>
                        <li>
                            <Link to="/services" className='link'>
                                <a href="#services" className='active' >Services</a></Link>
                        </li>
                        <li>
                            <Link to="/contact" className='link'>
                                <a href="#contact" className='active' >Contact</a></Link>
                        </li>

                        <p>
                            <button className='icon'>Log In</button>
                        </p>
                        
                    </ul>
                </nav>
                

            </div>
        </>
    )
}


export default Nav;
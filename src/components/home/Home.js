import React from 'react'
import Body from '../home/Body/Body'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return(
        <div className="home-container">
            <div className='head'>
                <img src='rectangle-1@2x.png' alt='about-bg'></img>
                <div className='head-1 heading'>
                    <h2 >Travel around  <br></br>the World </h2>
                </div>
            </div>
            
            <Body/>
        </div>
    )
}

export default Home
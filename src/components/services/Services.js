import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Services.css'

import TopServices from './Layout/TopServices/TopServices'
import Offer from "./Layout/Offer/Offer"
import PopularDestination from "./Layout/PopularDestination/PopularDestination"
import BestVacation from "./Layout/BestVacation/BestVacation"

const Services = () => {
    return(
        <div className="main">
            <div className='head'>
                <img src='service-bg.jpg' alt='about-bg'></img>
                <div className='head-1'>
                    <h2 > We are Grand Tour World <br></br> Class Travel Agency</h2>
                    <h6>Trips,experiences,and palces. All in one service.</h6>
                </div>
            </div>
        <TopServices/>
        <Offer/>
        <PopularDestination/>
        <BestVacation/>
        </div>
    )
}

export default Services
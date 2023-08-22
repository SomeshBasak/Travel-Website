import React from 'react'
import './TopServices.css'
import "bootstrap/dist/css/bootstrap.min.css";

const TopServices = () => {
    return (
        <div className='main-layout-container container mt-3'>
                <div className='row'>
                    <div className='col-12 '>
                        <h2>Our Top Services</h2>
                    </div>
                    <div className='col-6 col-md-3 col-lg-3 p-2'>
                        <img src="/images/Rectangle 148.png" alt="map img" className='rec-img'/>
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 p-2'>
                        <img src="/images/Rectangle 149.png" alt="tree img" className='rec-img' />
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 p-2'>
                        <img src="/images/Rectangle 151.png" alt="paper img" className='rec-img'/>
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 p-2'>
                        <img src="images/Rectangle 152.png" alt="man img" className='rec-img'/>
                    </div>
                    <div className='col-6 col-md-3 xol-lg-3 p-2'>
                        <img src="images/Rectangle 153.png" alt="percel img" className='rec-img'/>
                    </div>
               </div>
        </div>
    )
}

export default TopServices
import React from 'react'
import "./PopularDestination.css"

const PopularDestination = () => {
    return(
        <div className='main-popular-container containe mt-3'>
            <div className='row'>
                <div className='col-12'>
                    <h2>Popular Destination Outside India</h2>
                </div>
                <div className='col-6 col-md-4'>
                    <img src='/images/Ellipse 25.png' alt="" className='popular-img'/>
                </div>
                <div className='col-6 col-md-4'>
                    <img src='/images/Ellipse 26.png' alt="" className='popular-img'/>
                </div>
                <div className='col-6 col-md-4'>
                    <img src='/images/Ellipse 27.png' alt="" className='popular-img'/>
                </div>
                <div className='col-6 col-md-4'>
                    <img src='/images/Ellipse 28.png' alt="" className='popular-img'/>
                </div>
                <div className='col-6 col-md-4'>
                    <img src='/images/Ellipse 29.png' alt="" className='popular-img'/>
                </div>
            </div>
        </div>
    )
}

export default PopularDestination
import React from 'react'
import './Offer.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Offer = () => {
    return (
        <div className='main-offer-container containe mt-3'>
            <div className='row'>
                <div className='col-12'>
                    <h2>Offers</h2>
                </div>
                <div className='col-12 col-md-4'>
                    <img src='./images/Rectangle 160.png' alt="" className='offer-png'/>
                </div>
                <div className='col-12 col-md-4'>
                    <img src='/images/Rectangle 161.png' alt="" className='offer-png'/>
                </div>
                <div className='col-12 col-md-4'>
                    <img src='/images/Rectangle 162.png' alt="" className='offer-png'/>
                </div>
            </div>
        </div>
    )
}

export default Offer
import React from 'react'
import "./BestVacation.css"

const BestVacation = () => {
    return(
        <div className="main-best-container containe mt-3">
            <div className="row">
                <div className="col-12">
                    <h2>Explore our Best Vacation Rentals</h2>
                </div>
                <div className="col-12 col-md-4">
                    <img src="/images/Rectangle 170.png" alt="" className='best-img'/>
                </div>
                <div className="col-12 col-md-4">
                    <img src="/images/Rectangle 171.png" alt="" className='best-img'/>
                </div>
                <div className="col-12 col-md-4">
                    <img src="/images/Rectangle 172.png" alt="" className='best-img'/>
                </div>
            </div>
        </div>
    )
}

export default BestVacation
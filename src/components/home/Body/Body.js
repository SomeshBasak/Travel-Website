import React from 'react'
import './Body.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
    return(
        <>
        <div className='main-cont'>
               <div className="second-container containe mt-5 mb-5 p-3">
                    <div className="row">
                        <div className="col-6 col-md-3 ">
                            <b>Where do you want to go?</b>
                            <input type="text" placeholder="Enter here..."/>
                        </div>
                        <div className="col-6 col-md-2">
                        <b>Check In</b>
                        <br/>
                        <input type="date"/>    
                        </div>
                        <div className="col-6 col-md-2 ">
                            <b>Contact no.:</b>
                            <input type="text" className="width"/>
                        </div>
                        <div className="col-6 col-md-2">
                            <b>No. of days:</b>
                            <input type="text" className="width"/>
                        </div>
                        <div className="col-6 col-md-2 pt-1">
                            <button className="mt-3 bok-btn">BOOK NOW</button>
                        </div>
                    </div>
                </div>


                <div className="third-container">
                    <div className='col-12'>
                    <h1 className="third-heading">Welcome to Drift</h1>
                    <p className="third-para">Are you ready to embark on a 
                        thrilling adventure and discover breathtaking destinations 
                        around the globe? <br/> Look no further! Tourdrift is here to guide you
                        on an unforgettable journey, offering a plethora of travel resources, 
                        tips, and inspiration...
                    </p>
                    <button className='learn-btn'>Learn More</button>
                    </div>
                </div>


                <div className="fourth-container mt-5 mb-5">
                    <div className="containe">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="fourth-head">Explore Top Destinations</h1>
                                <p className="fourth-para">Checkout some incredible destinations</p>
                        </div>
                        </div>
                    </div>
                    <div className="containe">
                        <div className="row">
                            <div className="places ml-1 col-12 col-md-6 col-lg-4">
                                <img className="places-img pt-2" src="../rectangle-85@2x.png" />
                                <div>
                                    <img className="vector" alt="" src="../vector6.svg" />
                                    <p className="place-name">Rome, Itlay</p>
                                </div>
                                <button className="book-btn mb-2">BOOK NOW</button>
                            </div>
                            <div className="places col-12 col-md-6 col-lg-4">
                                <img className="places-img pt-2" src="../rectangle-86@2x.png" />
                                <div>
                                    <img className="vector" alt="" src="../vector6.svg" />
                                    <p className="place-name">London, England</p>
                                </div>
                                <button className="book-btn mb-2">BOOK NOW</button>
                            </div>
                            <div className="places col-12 col-md-6 col-lg-4">
                                <img className="places-img pt-2" src="../rectangle-87@2x.png" />
                                <div>
                                    <img className="vector" alt="" src="../vector6.svg" />
                                    <p className="place-name">Dubai, UAE</p>
                                </div>
                                <button className="book-btn mb-2">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fifth-container containe mt-5 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <p className="fifth-para">What we offer</p>
                            <h1 className="fifth-head">Checkout a few advantage of joining us</h1>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <div>
                                <h1 className="th-head">Best deals and Discount</h1>
                                <p className="th-para">we are committed tp find the best deals and discounts for our customers. 
                                    We work with the top travel provides to offer you exclusive discounts, 
                                so you can stretch your budget further and make the most of your vaction.
                                </p>
                            </div>
                            <div>
                                <h1 className="th-head">Reliable and safe Travel</h1>
                                <p className="th-para"> understand that safety is a top cocern when traveling. That’s why we work
                                    with only the most reliable travel providers and tour operators, so you can
                                    travel with peace of mind knowning that your trip is in good hands.
                                </p>
                            </div>
                            <div>
                                <h1 className="th-head">Hassle-Free Booking</h1>
                                <p className="th-para">Booking your trip us is simple and straight forward, we take care of all the 
                                details, from fight and hotel reservations to activates and transportation, so 
                                you can focus on what really matters-enjoying your vacation.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img className="fifth-img" src="../rectangle-89@2x.png" />
                        </div>
                    </div>
                </div>


                <div className="sixth-container containe mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5">
                            <img className="sixth-img" src="../twophoto.png" />
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <h1 className="th-head">We’ll make sure you have a fantastic vacation.</h1>
                            <p className="th-para">We know that every traveler is unique, which is why we offer 
                                a range of options to fit your specific needs. Whether you’re looking 
                                for luxury or budget-friendly, we’ve got you covered. Our team of travel
                                experts is always on hand to provide personalized recommendations and advice, 
                                so you can make the most of your trip.
                            </p>
                            <button className="learn-btn">Learn More</button>
                            
                        </div>
                    </div>
                </div>



                <div className="eighth-container containe pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="fifth-head">See why Tourists Choose us</h1>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="circle-photo" src="../circlephoto.png" />
                        </div>
                        <div className="col-12 col-md-8 center">
                            <p className="circle-desc">"I had an amazing experience with this travel website! The
                                Site is easy to use, the prices are great, and the customer
                                Service is top-notch . I would definitely use it again for my
                                next trip!" <br/> <br/> ---Thomas
                            </p>
                        </div>
                        
                    </div>
                </div>


                <div className="ninth-container containe mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 col-md-4 p-3 brd">
                            <h1 className="ninth-head">Best Guide, <br/>Best Experience.</h1>
                            <p className="ninth-para">Your trip will be very memorable with the best guide</p>
                            <div className="d-flex justify-content-end">
                                <p className="ninth-more pt-2">More details</p>
                                <img className="child14 ninth-more" src="../group-661.svg" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 white p-3">
                            <h1 className="ninth-head-white">Always have <br/>Special Tickets.</h1>
                            <p className="ninth-para-white">Your trip will be very memorable with the best guide</p>
                            <div className="d-flex justify-content-end">
                                <p className="ninth-more-white pt-2">More details</p>
                                <img className="child14 ninth-more-white" src="../group-662.svg" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 p-3 brd">
                            <h1 className="ninth-head">Always Ready, <br/>Support 24/7.</h1>
                            <p className="ninth-para">Your trip will be very memorable with the best guide</p>
                            <div className="d-flex justify-content-end">
                                <p className="ninth-more pt-2">More details</p>
                                <img className="child14 ninth-more" src="../group-661.svg" />
                            </div>
                        </div>
                    </div>
                </div>


        </div>

        </>
    )
}

export default Body
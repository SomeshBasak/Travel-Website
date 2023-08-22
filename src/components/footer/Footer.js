import React from "react"
import "./footer.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {
    AiFillTwitterCircle,
    AiFillWechat,
    AiFillYoutube,
  } from "react-icons/ai";


const Footer = () => {
    return (
        <div className="main-container containe ">
            <div className="row">
                <div className="first-para col-12 col-md-6">
                    <div>
                        <p className="para">Free Travel Trips</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter here..."></input>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                    <div>
                        <p className="para mt-2">Get In Touch To Connect</p>
                        <div className="social-icons">
                            <AiFillTwitterCircle className="symbol1" />
                            <AiFillWechat className="symbol1" />
                            <AiFillYoutube className="symbol1" />
                        </div>
                    </div>
                </div>
                <div className="foot col-12 col-md-6 pt-2 pb-2">
                    <div>
                        <button className="book-btn d-none d-md-inline">BOOK NOW</button>
                    </div>
                    <h3>Contact Us</h3>
                    <h5>Email : <a href="#">tourdrift2023@.gmailcom</a></h5>
                    <h5>Call : <a href="#"> +91 9774267382</a></h5>
                    <h5>WhatsApp : <a href="#">+91 8563459234</a></h5>
                </div>
                <b className="copyright">@2023 tourdrift powered and secured by WIX</b>
            </div>
        </div>
    )
}

export default Footer
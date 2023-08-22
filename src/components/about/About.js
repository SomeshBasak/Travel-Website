import React from 'react'
import { GoGoal } from 'react-icons/go';
import './About.css'

const About = () => {

    return (
        <>
        <div className='main-about-container containe'>
            <div className='head'>
                <img src='about.jpg' alt='about-bg'></img>
                <div className='head-1'>
                    <h2 > Lorem ipsum dolor sit amet <br></br>consectetur adipisicing elit.</h2>
                    <h6>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Maxime mollitia,</h6>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-12 col-md-6 mt-3 person-cont'>
                    <img src='person-01.jpg' alt='person' className='person1-img'/>
                </div>
                <div className='col-12 col-md-6 mt-3'>
                    <p>Best Tour Services</p>
                    <h3>Trusted & Award WinningTour Agency</h3>
                    <h5 className='para'>By investing in technology that takes the friction out of travel .Wherever you want to go and whatever you want to do,Tourdrift makes it easy and supports you with 24/7 customer support</h5>
                    <p><GoGoal /> Our services are more affordable than you think</p>
                    <p><GoGoal /> We are a fully insured nationally ranked brand.</p>
                    <p><GoGoal /> We are a fully insured nationally ranked brand.</p>
                    <p><GoGoal /> We are a fully insured nationally ranked brand.</p>
                </div>
            </div>
        
            <div className='row ticket-cont p-5'>
                <div className='col-12 p-2 text-center'>
                    <h3>Tickets</h3>
                </div>
               <div className='col-6 col-md-4 mt-2'>
                    <h3>01<span><h4>Flights Tickets</h4></span></h3>
                    <p>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2'>
                    <h3>02<span><h4>Flights Tickets</h4></span></h3>
                    <p>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2'>
                    <h3>03<span><h4>Flights Tickets</h4></span></h3>
                    <p>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2'>
                    <h3>04<span><h4>Flights Tickets</h4></span></h3>
                    <p>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2'>
                    <h3>05<span><h4>Flights Tickets</h4></span></h3>
                    <p>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
            </div>
          
            

            <div className='row reviews pt-5'>
                <div className='col-12 p-2'>
                    <h3>Top Tour Reviews</h3>
                </div>
                <div className='col-12 col-md-4'>
                    <div className=''>
                        <p>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>
                    </div>
                    <div className='image-details'>
                        <img src='Image-1.jpeg' alt='member-1' className='mem'></img>
                        <p>Kevin Smith</p>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <div className=''>
                        <p>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>
                    </div>
                    <div className='image-details'>
                        <img src='Image-2.jpeg' alt='member-2' className='mem'></img>
                        <p>Christine Eve</p>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <div className='text5'>
                        <p>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>
                    </div>
                    <div className='image-details'>
                        <img src='Image-3.jpeg' alt='member-3' className='mem'></img>
                            <p>Mike</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default About;
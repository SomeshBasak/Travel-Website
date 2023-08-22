import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'


const Contact = () => {
    const form = useRef()

//     const sendEmail = (e) =>{
    
//         e.preventDefault();
    
//         emailjs.sendForm('service_boibuim', 'template_olqr2gj', form.current, 'eka9O5vDIQ94y0XdO')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           }
//           );
//           e.target.reset(e)
      

// };
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [to,setTo] = useState('tourdrift786@gmail.com')
   

    const sendEmail = async (e) =>{
        e.prevetDefault();
        try{
            await axios.post('/sendemail',{to,name,email,message});
           
            alert('Email sent Successfully')
        }
        catch(error){
            console.log(error);
            alert('Email error')
        }

    }

    return (
        <>
        <div className='containe'>
            <div className='head'>
                <img src='contact.jpg' alt='about-bg' className='contact-img'></img>
                <div className='head-1'>
                    <h2 > Lorem ipsum dolor sit amet <br></br>consectetur.</h2>
                    <h6>Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit.
                    </h6>
                </div>
            </div>
            <div className='second-container'>
            <div className='row para1'>
                <div className='col-12 col-md-6 mr-5'>
                    <icon className="icon-c"><BsFillChatDotsFill /></icon>
                    <h4> Get In Touch</h4>
                    <p> Email : tourdrift786@gmail.com </p>
                    <p> Mobile : +91 7869617798</p>
                    <h6>Hello@Tourdrift.com</h6>
                </div>
                <div className='col-12 col-md-6'>
                    <icon className="icon-c"><GoLocation /></icon>
                    <h4> Visit Our Location</h4>
                    <p> Lorem ipsum dolor sit amet<br></br>consectetuer adipiscingelit. </p>
                    <h6>Get Directions</h6>
                </div>
            </div>
            </div>
            <div className='third-container mt-4 mb-4'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                <h5>CONTACT US</h5>
                    <h3> Have Any Questions? feel free to <br></br>contact us.</h3>
                    <p> Lorem ipsum dolor sit amet<br></br>consectetuer adipiscingelit. </p>
                </div>
                <div className='col-12 col-md-6 third-second mb-3'>
                   
                    <form  ref={form} onSubmit={sendEmail} className='form'>
                    <div>
                    <div className='input-box'>
                        <h5 className='msg'> Write a Message</h5>
                        <input type='text' className="txt mb-1" placeholder='Your Name' value={name} name='user_name' onChange={(e) =>setName(e.target.value)} required></input>
                        <input type='email'  className="txt " placeholder='Your Email' value={email} name='user_email' onChange={(e) =>setEmail(e.target.value)} required></input>
                    </div>
                    <div>
                        <textarea className="textar" placeholder="Leave A Comment" rows="10"  value={message} name='message' onChange={(e) =>setMessage(e.target.value)}></textarea>
                        <button type='submit' className='btn-send' onSubmit={(e) => setTo(e.target.value)}> Send Message</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
           
        </div>
        </>
    )
}

export default Contact;
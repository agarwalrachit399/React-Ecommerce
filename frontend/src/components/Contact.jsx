import React from 'react'
import Navigation from './Navigation'
import { Container } from 'react-bootstrap'


const Contact = () => {
    return (
        <div>
        
        <div id="contact-header">
        <Container>
        <Navigation/></Container>
           <h1>Get In Touch</h1>
           <p>Want to get in touch with your favourite baker, here is how to do that </p> 
            </div>
            <div id="class-info">
            
            <div id="contact-num">
                
                <img class='center' style={{ width:'5%'}} src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png"/>
                <h4>Talk to us through:</h4>
                <p>Contact Number:</p>
                <p>Email-ID:</p>
        
                        </div>

                        <div id="contact-social">
                        
                <img class='center' style={{ width:'5%'}} src="https://img.icons8.com/ios-filled/50/000000/instagram--v2.png"/>
                <h4>Reach Out to Us at:</h4>
                <p>Instagram Handle:</p>
                <p>Twitter Handle:</p>
                        </div>
                        </div>
                     </div>
    )
}

export default Contact

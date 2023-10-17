import React from 'react';
import Footer from '../Footer/Footer';
import "./Contact.css"

import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
    
    const [state, handleSubmit] = useForm("xpzgkbnk");
    const ContactForm = () => {
        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }else{
            handleSubmit()
        }
        
    }

    return (
        <>
            <section id="contact-banner">
                <h1>#let's_talk</h1>
                <p>LEAVE A MESSAGE, We love to hear from you!</p>
            </section>

            <section id="contact-details">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li >
                            <i className="fa-solid fa-map"></i>
                            <p>56 Glassford d street India</p>
                        </li>
                        <li >
                            <i className="fa-solid fa-message"></i>
                            <p>FashionsWear@gmail.com</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <p>+91 123-123-4455</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-business-time"></i>

                            <p>Monday to Saturday. 9:00am to 6pm</p>
                        </li>
                    </div>
                </div>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906434572!2d73.69814968480954!3d18.524870614568304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693129037144!5m2!1sen!2sin"
                        style={{ border: "0", height: "450", width: "600" }} loading="lazy"
                    ></iframe>
                </div>
            </section>

            <section id="form-details">
                <form action="https://formspree.io/f/xpzgkbnk"
                    method="POST" onSubmit={ContactForm}>
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" name='name' autoComplete='off' required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <input type="text" placeholder="E-mail" name="email" autoComplete='off' />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <input type="text" placeholder="Subject" name='subject' autoComplete='off' />
                    
      
                    <textarea name="text" id="" cols="30" rows="10" placeholder="Your Message" autoComplete='off'></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button disabled={state.submitting}>Submit</button>

                </form>
            </section>

            <Footer />


        </>
    );
}


export default Contact;

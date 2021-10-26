import React from 'react';
import "./TopFooter.css";
import copyrightImage from "../../assets/Image/copyright.jpg";
import ContactForm  from '../ContactForm/ContactForm';
const TopFooter = () => {
  return (
    <div>
      <section id="about" >
                <div class="container">

                    <div class="row">
                      
                        <div class="col-lg-6 md-6 p-5">
                     <a href="https://youtu.be/f9ezWuF_-KI"> <img  class="img-fluid" style={{maxWidth:"100% ",height:'94%' }}src={copyrightImage} alt="LOGO"/></a>
 
                        </div>
                     
                        <div class="col-lg-6 md- p-6  justify-content-center align-item-center content">
                        <ContactForm />
                        </div>
                       
                       
                        
                    </div>

                </div>
            </section>


    </div>
  )
}

export default TopFooter;

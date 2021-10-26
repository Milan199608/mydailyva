import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"


const Banner = (props) => {
    const {modalOpenFunc} = props;

    return (
        <div>
            <section id="hero" class="d-flex align-items-center">

                <div class="container-fluid" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6  pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1> the Virtual Assistant for a MyDailyVa Assistant who delivers every time.</h1>
                            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            <div className="btn-set"><Link to="#" class="btn-get-started btn-success scrollto mx-2" onClick={modalOpenFunc}>Request a Consultation</Link>
                            <a href="#about" class="btn-get-started btn-outline-primary scrollto">Choose your plan</a></div>
                        </div>
                        <div class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                            
                        </div>
                    </div>
                </div>

            </section>
            <section id="featured-services" class="featured-services section-bg">
           <div class="container">

        <div class="row no-gutters" id="row_section">
            
          <div class="col-lg-4 col-md-12 " style={{background:"rgb(93, 162, 223)"}}>
            <div class="icon-box d-flex ">
              <div class="icon"><i class="fa fa-calendar"></i></div>
              <h4 class="title"><a href="">Get back hours of time each week</a></h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-12" style={{background:"rgb(59, 121, 191)"}}>
            <div class="icon-box d-flex">
              <div class="icon"><i class="fa fa-user"></i></div>
              <h4 class="title"><a href="">Outsource to someone you trust</a></h4>
              
            </div>
          </div>
          <div class="col-lg-4 col-md-12" style={{background:"rgb(42, 49, 61)"}}>
            <div class="icon-box d-flex ">
              <div class="icon"><i class="fa fa-trophy"></i></div>
              <h4 class="title"><a href="">Compound time savings into success</a></h4>
              
            </div>
          </div>
        </div>

      </div>
    </section>


            </div>


    )
}

export default Banner

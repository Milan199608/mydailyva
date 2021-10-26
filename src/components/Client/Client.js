import React from 'react';
import "./Client.css";
import Client1 from "../../assets/Image/1a71dee5.png";
//import Client2 from "../../../Asset/Image/8d0afc2ab1a60432d5b33ba75dd9c9cc.png"

const Client = () => {


    return (
        <div>
          <h1 style={{textAlign:'center',backgroundColor:"#F8F8F8" ,fontSize:"40px" ,color:"#000000"}}> Testimonial</h1>
             <section id="doctors" class="doctors">
               
      <div class="container">

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Client1} alt=""/></div>
              <div class="member-info">
                <h4>Anastasia</h4>
                <span> Front end Developer</span>
                <p>“Quisque gravida nisl eu ex vulputate aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas hendrerit ut dolor sed placerat. Donec iaculis magna leo, tincidunt tincidunt risus dictum ”</p>
              
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={Client1} alt=""/></div>
              <div class="member-info">
                <h4>Kathleen </h4>
                <span>Web developer</span>
                <p>“Quisque gravida nisl eu ex vulputate aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas hendrerit ut dolor sed placerat. Donec iaculis magna leo, tincidunt tincidunt risus dictum ”

</p>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section>
            
        </div>
    )
}

export default Client;

import React, {useState,useEffect } from 'react';
import "./BottomFooter.css";
import { Link } from 'react-router-dom';
/* import axios from "axios";
import * as configSettings from "../../../config";

const {  REACT_APP_MYDAILYVA_API_PROTOCOL
    : API_PROTOCOL,   REACT_APP_MYDAILYVA_API_URL
    : API_URL} = configSettings; */

const BottomFooter = () => {
   const [items, setItems] = useState("")
   useEffect(()=>{
     fetch("https://www.mydailyva.com/dev/api/getConfiguration").then(res=>res.json()).then(
       (result)=>{
         setItems(result);
       }
     )
   },[])
  return (
   
    <div>
     <footer id="footer" >
       <div class="footer-top">
         <div class="container">
           <div class="row col-lg-12  d-flex align-items-center justify-content-center ">
           <div class="col-lg-4 footer-links mb-0">
               <h4>LINK FOOTER</h4>
               <ul>
                 <li><i class="bx bx-chevron-right"></i><Link to="/about-us">About Us</Link></li>
                 <li><i class="bx bx-chevron-right"></i><Link to="/privacy-policy"> Privacy & Policy</Link></li>
                 <li><i class="bx bx-chevron-right"></i> <Link to="/terms-condition">Terms & Condition </Link></li>
               </ul>
             </div> 
             <div class="col-lg-4 footer-links">
               <h4>CONTACT INFO</h4>
               {
               Object.keys(items).map((item,id)=>(
               <ul key={id}>
                 <h6><li><i class="bx bx-chevron-right"></i>{items[item].storeownername}</li></h6>
                 <li><i class="bx bx-chevron-right"></i> {items[item].address}</li>
                 <li><i class="bx bx-chevron-right"></i>{items[item].site_phone_no}</li>
                 <li><i class="bx bx-chevron-right"></i> {items[item].emailid}</li>
               </ul>
                ))}
             </div>
             <div class="col-lg-4 footer-links mt-3">
               <h4>GET CONNECTED</h4>
               <h6><i class="bx bx-chevron-right"></i> Sign up to hear and get our daily updates</h6>
               <form id="subscribe" onsubmit="return false;" _lpchecked="1">
                 <div class="form-group">
                   <input type="email" class="subscribe form-control" id="email2" placeholder="Enter E-Mail Address" name="subemail" />
                 </div>
                 <button type="submit" id="btn_subscribe" class="btn btn-success btn-primary">subscribe</button>
               </form>
               <h6 >Follow us on</h6>
               {
               Object.keys(items).map((item,id)=>(
               <div class="social-links" key={id} >
                 <a href={items[item].facebooklink} class="twitter"><i class="fab fa-facebook"></i></a>
                 <a href={items[item].instagramlink} class="instagram"><i class="fab fa-instagram"></i></a>
                 <a href={items[item].linkedinlink} class="linkedin"><i class="fab fa-linkedin"></i></a>
                 <a href={items[item].youtubelink} class="youtube"><i class="fab fa-youtube"></i></a>
               </div>
                  ))}
             </div>
           </div>
         </div>

       </div>
       <div class="container">
         <div class="copyright">
           <div className="Last" >
          
           </div>
         </div>
       </div>
     </footer>


    </div>
     
  )
};

export default BottomFooter;

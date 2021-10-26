import React,{useState} from 'react';
import './Nav.css';
import { Sidebar } from '../Sidebar/Sidebar';
import NavImage from "../../assets/Image/logonew.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  return (
    
    <div> 
      <nav class="navbar navbar-expand-lg   fixed-top"   >
        <div className="navBar_toggle_style">
        <span onClick={showSidebar}>
        <i class="fa fa-bars mx-3" >
          </i>
          </span>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
           
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
           
                 
                    <span>{item.title}</span>
                
                </li>
              );
            })}
          </ul>
        </nav>
        <a href="https://www.mydailyva.com/dev/mdvphp/">
        <img src={NavImage} alt="logo" />
          </a>
        
     
  
        </div>
        <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
  
            <ul class="navbar-nav ms-auto">     
              <li class="nav-item scrollto active">
                <a class="nav-link" >
                <Link to ="/">Home</Link> </a></li>

                <li class="nav-item scrollto active">
                <a class="nav-link" >
                <Link to ="/about-us">About Us</Link></a>
                </li>
                   <li class="nav-item scrollto active">
                <a class="nav-link" >
                <Link to="/contact-us">Contact Us</Link> </a>
                </li>
                   
            </ul>
         
      
          <button class="btn btn-success my-2 my-sm-0" type="submit">Request A Consultation</button>

        </div>
        <div className="clear"></div>
      </nav>
    



    </div>
    

  )
}

export default NavBar;
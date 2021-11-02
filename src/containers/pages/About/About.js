import React,{useState,useEffect} from 'react';

import "./About.css";
import {PageContainer} from '../../';

const About = () => {
  const [items, setItems] = useState("")
  useEffect(()=>{
    fetch("https://www.mydailyva.com/dev/api/getAllPages").then(res=>res.json()).then(
      (result)=>{
        setItems(result);
      }
    )
  },[])
  const metaTitle='About Us - Mydailyva Virtual Assistants';
  const metaDescription='About Us - Mydailyva Virtual Assistants';

    return (
      <PageContainer title={metaTitle} description={metaDescription}>
        {console.log(items)}
        
            <section className="intro-box terms-box-center">
        <div className="row align-items-center justify-content-center">
      
          <div className="col-lg-10 col-12 terms-box-inside">
          {
        Object.keys(items).map((item,id)=>(
            <p key={id}>
          
              {items[item].page_description}

            </p>
            ))}

          </div>
     
        </div>
      </section>   
        </PageContainer>
    )
}

export default About;

import React,{useState,useEffect} from 'react';
import "./About.css";
import {PageContainer} from '../../';

const About = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    var data = JSON.stringify({
      "page_id": 2
    });
    fetch("https://www.mydailyva.com/dev/api/getASinglePage",{
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body:data,
  })
    .then(res=>res.json()).then(
      (result)=>{
        setItems(result.data);
      }
    )
  },[])
  const metaTitle='About Us - Mydailyva Virtual Assistants';
  const metaDescription='About Us - Mydailyva Virtual Assistants';
  //console.log(items.page_description);
    return (
      <PageContainer title={metaTitle} description={metaDescription}>
            <section className="intro-box terms-box-center"> 
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10 col-12 terms-box-inside">
         <h2 style={{textAlign:"center",marginTop:"0"}}>{items.page_title}</h2>
          <div dangerouslySetInnerHTML={{ __html: items.page_description }}/>
          </div>
        </div>
      </section>   
        </PageContainer>
    )
}

export default About;

import React,{useState,useEffect} from 'react';
import { Helmet } from 'react-helmet';



const Privacy = () => {
 const [state, setState] = useState([]);
 useEffect(()=>{
  var data = JSON.stringify({
    "page_id": 4
  });
  fetch('https://www.mydailyva.com/dev/api/getASinglePage',{
    method:'post',
    headers:{'content-type':'application/json'},
    body:data

  })
  .then(res=>res.json()).then((result)=>{
    setState(result.data);
  }
  )},[]);

  return (
    <div>
      <Helmet>
        <title>Privacy-Policy</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <section className="intro-box terms-box-center">
        <div className="row align-items-center justify-content-center">

          <div className="col-lg-10 col-12 terms-box-inside">
            <h2 style={{textAlign:"center",marginTop:"0"}}>{state.page_title}</h2>
          <div dangerouslySetInnerHTML={{ __html: state.page_description }} />

           
            </div>
            </div>

      </section>
    </div>
  )
}

export default Privacy;

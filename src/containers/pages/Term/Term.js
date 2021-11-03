import React,{useState,useEffect} from 'react';
import { Helmet } from 'react-helmet';

const Term = () => {
    const [item, setItem] = useState('');
    useEffect(() => {
        var data = JSON.stringify({
            "page_id": 5
        });
        fetch("https://www.mydailyva.com/dev/api/getASinglePage", {
            method:"post",
            header:{"content-type":"application/json"},
            body:data  
        })
        .then(res=>res.json()).then((result)=>{
            setItem(result.data);
        }
     )
    }, []);

    return (
        <div>
            <Helmet>
                <title>Terms-Condition</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <section className="intro-box terms-box-center">
                <div className="row align-items-center justify-content-center">

                    <div className="col-lg-10 col-12 terms-box-inside">
                    <h2 style={{textAlign:"center",marginTop:"0"}}>{item.page_title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: item.page_description }}></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Term;

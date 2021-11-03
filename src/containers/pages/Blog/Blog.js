
import React,{useState,useEffect} from 'react';
import "./Blog.css";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



export const Blog = ({list}) => {

    
  /*   const [blogData,setBlogData] = useState([]);

    useEffect(() => {
       fetch("https://www.mydailyva.com/dev/api/getAllPosts") 
    .then(res=>res.json()).then((result)=>{
        setBlogData(result)
    })     
    
    }, []) */


    return (
        <div>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            
      
            <section class="main-blog-box">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-9 col-12">
                        <div class="row">
                            {
                            list.map((item,id)=>{ 
                                    return(
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 blog-hold" key={id}>
                             <a class="col-12 blog-sec-box" title="A Quick Guide on SEO Packages for Small Businesses">
                                 
                                 <Link to={`/blog/${item.text.split(" ").join("-").toLowerCase()}`}>
                                    <div class="feature-blog-img">
                                        <img src={item.image}  alt="user"/>
                                        <span class="date">{item.date}</span>
                                    </div>
                                    <div class="blog-dtls-main">
                                        <div class="blog-box-title">
                                            <h3>{item.post_title}</h3>
                                        </div>
                                        <div class="blog-tag ">
                                            <div class="col-lg-12 d-flex">
                                                <i class="fa fa-user col-lg-2" aria-hidden="true" style={{ color:"grey", fontSize:"16px", marginTop:"6px"}}>
                                                </i>
                                                <p class="col-lg- " style={{color:"#000000"}}>{item.author}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </a>
                            </div>
                                )} )
                                    }
                        </div>
                    </div>
                </div>
       

        
                
                
         
            
            </section>
            
             
                  
          {/*   <Pagination
            className="pagination-bar"
            currentPage={1}
            totalCount={list.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)} */}
           

         
        

        </div>
    
    )
}

export default Blog;
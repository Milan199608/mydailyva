
import React from "react";
import "./Blog.css";

import { Link } from 'react-router-dom';


export const Blog = ({blogData}) => { 
    

  /*  
    const [blogData,setBlogData] = useState([]);

    useEffect((post_id) => {
       fetch(`https://www.mydailyva.com/dev/api/getAllPosts/${post_id}`) 
    .then(res=>res.json()).then((result)=>{
        setBlogData(result)
    })     
    
    }, [])
 */
   // {`/blog/${item.post_title.split(" ").join("-").toLowerCase()}`}
    return (
        <div>
           
            
      
            <section class="main-blog-box">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-9 col-12">
                        <div class="row">
                            {
                            blogData.map((item,id)=>{ 
                                    return(
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 blog-hold" key={id}>
                                 <Link class='col-12 blog-sec-box' to={`/blog-details/?post_id=${item.id}`}>
                                    <div class="feature-blog-img">
                                        <img src={`https://www.mydailyva.com/dev/mdvphp/upload/blog/150/${item.postimage}`} alt="user"/>
                                        <span class="date">{item.date_of_add}</span>  
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

import React from 'react';
import "./Blog.css";
import { Helmet } from 'react-helmet';
import Pagination from  "../../../components/Pagination/Pagination";
let pageSize=3;
export const Blog = () => {

    const list = [
        {
            id: 1,
            image: "https://www.ibuildsite.com/upload/article/16281592780f09698c0b.jpg",
            text: "Key Reasons To Choose CodeIgniter Framework For Your Next Web Development Project",
            author: "Administrator",
            date: "5th August",
            href: "https://www.ibuildsite.com/key-reasons-to-choose-codeigniter-framework-for-your-next-web-development-project.html"
        },
        {
            id: 2,
            image: "https://www.ibuildsite.com/upload/article/1627714738ce6d72142e.jpg",
            text: "Reasons to Use Shopify for eCommerceAlcoburner",
            author: "Subhasish K",
            date: "16th August",
            href: "https://www.ibuildsite.com/reasons-to-use-shopify-for-ecommerce.html"

        },
        {
            id: 3,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Subhasish K",
            date: "12th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        },
        {
            id: 4,
            image: "https://www.ibuildsite.com/upload/article/1626156407dbec194094.jpg",
            text: "Website Maintenance Checklist: Important Tasks To Perform",
            author: "Subhasish  K",
            date: "18th August",
            href: "https://www.ibuildsite.com/website-maintenance-checklist.html"
        },
        {
            id: 5,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        },
        {
            id: 6,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        },
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        },
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
        ,
        {
            id: 7,
            image: "https://www.ibuildsite.com/upload/article/1627033129e6f99df011.jpg",
            text: "What Are URL Redirects And Why Use URL Redirects?",
            author: "Administrator",
            date: "25th August",
            href: "https://www.ibuildsite.com/what-are-url-redirects-and-why-use-url-redirects.html"
        }
      
    ];
   

   

   
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
                                list.map((item)=>{ 
                                    return(
                            <div class="col-lg-4 col-md-6 col-sm-4 col-12 blog-hold">
                                <a href={item.href} class="col-12 blog-sec-box" title="A Quick Guide on SEO Packages for Small Businesses">
                                    <div class="feature-blog-img">
                                        <img src={item.image} alt="user"/>
                                        <span class="date">{item.date}</span>
                                    </div>
                                    <div class="blog-dtls-main">
                                        <div class="blog-box-title">
                                            <h3>{item.text}</h3>
                                        </div>
                                        <div class="blog-tag">
                                            <div style={{ float: "left" }}>
                                                <i class="fa fa-user" aria-hidden="true" style={{ marginRight: "30px" ,color:"black",fontSize:"10px" }}>{item.author}
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                                )} )
                                    }
                        </div>
                    </div>
                </div>
            </section>
            
             
                  
            <Pagination
            className="pagination-bar"
            currentPage={1}
            totalCount={list.length}
            pageSize={3}
            onPageChange={page => setCurrentPage(page)}
           
            
        />
         
        

        </div>
    
    )
}

export default Blog;
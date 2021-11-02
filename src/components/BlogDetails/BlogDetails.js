import React from 'react';
import "./BlogDetails.css";
import { useParams } from 'react-router';

const BlogDetails = ({list}) => {
    const {text}=useParams();
    return (
        <div>
            
         <section class="hero-banner banner-img inner-banner web-new-banner d-flex align-items-center justify-content-center " style={{background: "url(https://www.submitcube.com/assets/img/business-computer-connection-contemporary-450035.jpg) no-repeat", backgroundSize:"cover",marginTop:"5rem"}}>
        <div class="container">
   
       <div class="col-lg-12 col-12 banner-box d-flex align-items-center justify-content-center flex-column">
    
             {list.filter(item=>item.text.split(" ").join("-").toLowerCase()===text).map((data,index)=>(
              
             <h1 class="text-center" style={{color:"#ffffff"}} key={index}>
                <p>{data.text}</p>
                 </h1>                                    )) }
     </div>
      </div>
    </section>
            <section class="blog-detail-sec" style={{padding:"4rem 0rem",marginTop:"2rem"}}>
                <div class="row align-items-center justify-content-center">
                    
                      {list.filter(item=>item.text.split(" ").join("-").toLowerCase()===text).map((data,index)=>(
                    <div class="col-lg-10 col-12 blog-detail-cont" key={index}>
                        <div class="row justify-content-between">
                            <div class="col-lg-9  col-12 col-md-8 ">
                                <div class="blog-detail-box">
                                    <div class="blog-detail-part col-12">
                                        <div class="blog-tag">
                                            <div style={{float:"right"}}>
                                            <i class="fa fa-calendar" aria-hidden="true"></i> {data.date}</div>
                                        </div>
                                        <a href="#" class="blog-dtls-in-title">
                                            <h2 style={{marginBottom:"1rem"}}>{data.text}</h2>
                                        </a>
                                        <div class="tag-box" style={{marginBottom:"1rem"}}>
                                            <i class="fa fa-tag" aria-hidden="true"></i>

                                            <a href="category-seo-services.html" style={{color:"black"}}>SEO services</a>
                                        </div>
                                        <div class="blog-dtls-main-sec">
                                            <p>
                                                <img class src={data.image} alt="SEO Packages" title="SEO Packages" style={{width:"100%",height:"auto"}}/>
                                            </p>
                                            <p>
                                                "Are you aware that over 90% of customers will go onli they plan to buy something?"
                                            </p>
                                            <p>It’s correct.</p>
                                            <p>
                                                "In truth, 93% of all online interactions begin with a search engine like Google. Getting the phone has a new meaning. You’re not getting the phone to call since your first response anymore, you’re choosing it up to browse."
                                            </p>
                                            <h3>This in summary is search engine optimization (SEO).</h3>
                                            <p>
                                            </p>"When you’re a small business owner or a marketing manager assigned with taking your company more visible, SEO is the most efficient way to boost visibility to the brand and make leads, connections and profits."
                                            <p>
                                               
                                                " come into play. Looking positive in Google is a whole lot harder than simply placing a website. In truth, you can find more than 250 key ranking factors that Google examin they place your website on page 1 of their search results."
                                            </p>
                                            <p>
                                                "You could attempt to knock off all of these to-dos yourself to get your website ranked yet let’s face it, you’re operating a small business. SEO needs time to work, effort and chronic effort during this."

                                            </p>
                                            <p>
                                               
                                                "” the question is “Why haven’t I currently got an SEO package?”"
                                            </p>
                                            <p>Below, we’ll go over the following:</p>
                                            <ul>
                                                <li>
                                                
                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                        <li>
                                                         
                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                <li>
                                                                   
                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>

                                                                    </ul>
                                                                    <h2>What kind of SEO package do you require for your small business?</h2>
                                                                    <p>
                                                                     buying an SEO package from an SEO company, you should look inward. SEO is different and there are many capable companies available so don’t just select the first company that pitches you."
                                                                    </p>
                                                                    <p>Do your analysis to get a company that suits your requirements.</p>
                                                                    <p>

                                                                        "Queries you need to be asking yourself as well as your possible SEO service provider may include:"
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                          
                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                <li>
                                                                                    
                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                        <li>
                                                                                            
                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                <li>
                                                                                                    
                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                        <li>
                                                                                                            
                                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>

                                                                                                            </ul>
                                                                                                            <h2>What kind of SEO package do you require for your small business?</h2>
                                                                                                            <p>
                                                                                                                "SEO is the method of optimizing your site to rank as much as possible in search engine results. We can't know each of Google's ranking factors, however, we do realize most of them according to what Google has revealed to us and what we discover through analysis and empirical exercise. We also realize that when ranking factors and algorithms may shift, the functions Google is trying to parse out through them are quality, reliability, and effectiveness."

                                                                                                            </p>
                                                                                                            <p>
                                                                                                                "Here we break down the most important "
                                                                                                                ". These key SEO ranking factors help get your website from obscurity to importance in the search engines."
                                                                                                            </p>
                                                                                                            <p>
                                                                                                                <strong>Technical SEO</strong>
                                                                                                            </p>
                                                                                                            <p>
                                                                                                                "This is a set of several "
                                                                                                                " factors, including, however, not limited to:"
                                                                                                            </p>
                                                                                                            <ul>
                                                                                                                <li>
                                                                                                                    
                                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                        <li>
                                                                                                                            
                                                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                <li>
                                                                                                                                    
                                                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                        <li>
                                                                                                                                            
                                                                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                                <li>
                                                                                                                                                    
                                                                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>

                                                                                                                                                    </ul>
                                                                                                                                                    <p>
                                                                                                                                                        <strong>High-Quality Content</strong>
                                                                                                                                                    </p>
                                                                                                                                                    <p>
                                                                                                                                                        "This one is an extremely complex topic, however, the general concept to consider is your SEO effectiveness would just be as effective as your content. No level of optimizations can assist if your content is low-quality and isn't helpful/relevant for the target audience."
                                                                                                                                                    </p>
                                                                                                                                                    <p>
                                                                                                                                                        <strong>Reliable backlinks</strong>
                                                                                                                                                    </p>
                                                                                                                                                    <p>
                                                                                                                                                        "Particularly your "
                                                                                                                                                        ", however, the internal linking structure and external links are also vital."
                                                                                                                                                    </p>
                                                                                                                                                    <p>
                                                                                                                                                        "All three sorts of links are generally linked to keywords, and the context between the linked page and the keywords would also count."
                                                                                                                                                    </p>
                                                                                                                                                    <ul>
                                                                                                                                                        <li>
                                                                                                                                                            
                                                                                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                                                <li>
                                                                                                                                                                    
                                                                                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                                                        <li>
                                                                                                                                                                            
                                                                                                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>

                                                                                                                                                                            </ul>
                                                                                                                                                                            <p>
                                                                                                                                                                                <strong>Reliable backlinks</strong>
                                                                                                                                                                            </p>
                                                                                                                                                                            <p>
                                                                                                                                                                                "Because of "
                                                                                                                                                                                ", Google’s AI-based algorithm, Google are now able to check user experience factors in real-time and apply the info to rank the websites."
                                                                                                                                                                            </p>
                                                                                                                                                                            <p>Google primarily tracks three UX factors:</p>
                                                                                                                                                                            <ul>
                                                                                                                                                                                <li>
                                                                                                                                                                                    
                                                                                                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                                                                        <li>
                                                                                                                                                                                            
                                                                                                                                                                                                <strong>What kind of SEO package do you require for your small business</strong></li>
                                                                                                                                                                                                <li>
                                                                                                                                                                                                    
                                                                                                                                                                                                        <strong>What kind of SEO package do you require for your small business</strong></li>

                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                </div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                            <div className="clear>
</div>
<div className="clear>
                                                                                                                                                                                                <div class="blog-detail-box" style={{marginTop:"40px"}}>
                                                                                                                                                                                                    <div class="blog-detail-part col-12">
                                                                                                                                                                                                        <section class="post-author">
                                                                                                                                                                                                            <div>
                                                                                                                                                                                                                <div style={{width:"75%",float:"left"}}>
                                                                                                                                                                                                                    <strong>{list.author}</strong>

                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <div className="clear"></div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </section>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    <div className="clear"></div>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <div className="clear"></div>

                                                                                                                                                                                                <div class="blog-detail-box" style={{marginTop:"40px"}}>
                                                                                                                                                                                                    <div class="blog-detail-part col-12">
                                                                                                                                                                                                        <div class="row">
                                                                                                                                                                                                            <div class="col-md-12 ">
                                                                                                                                                                                                                <h2>
                                                                                                                                                                                                                    <i class="fa fa-comments" aria-hidden="true"></i>
                                                                                                                                                                                                                    "&nbsp;Express your comment on this article"</h2>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        <div id="replaycommentform">
                                                                                                                                                                                                            <div class="row">
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <h2 class="leavereply">Leave a Reply</h2>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                            <div class="row">
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <label for="username1">
                                                                                                                                                                                                                        Name
                                                                                                                                                                                                                        <sup>*</sup>
                                                                                                                                                                                                                    </label>
                                                                                                                                                                                                                    <input type="text" class="form-control" name="name" id="name" />
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <div className="clear"></div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="row">
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <label for="password">
                                                                                                                                                                                                                        Password
                                                                                                                                                                                                                        <sup>*</sup>
                                                                                                                                                                                                                    </label>
                                                                                                                                                                                                                    <input type="text" class="form-control" name="password" id="password" />
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <div className="clear"></div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="row">
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <label for="comment">
                                                                                                                                                                                                                        comment
                                                                                                                                                                                                                        <sup>*</sup>
                                                                                                                                                                                                                    </label>

                                                                                                                                                                                                                    <textarea id="comment" class="form-control" name="comment" rows="6" cols="80"></textarea>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <div className="clear"></div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="row">
                                                                                                                                                                                                                <div class="col-md-6">
                                                                                                                                                                                                                    <label>
                                                                                                                                                                                                                        Enter Verification Code
                                                                                                                                                                                                                        <sup>*</sup>
                                                                                                                                                                                                                    </label>
                                                                                                                                                                                                                    <br></br>
                                                                                                                                                                                                                    <img src="https://www.submitcube.com/captcha.php" id="captcha"></img>
                                                                                                                                                                                                                    <input id="captcha1" name="captcha" type="text" class="form-control"></input>

                                                                                                                     
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                    <div className="clear"></div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                    <div class ="row">
                                                                                                                                                                                                                    <div class ="col-md-12">
                                                                                                                        
                                                                                                                                                                                                                    <input type="button" name="submitcomment" id class="submitform" value="Submit" onclick="submitcommentforblog()" style={{marginTop:"15px"}}/>
                                                                                                                                                                                                                   </div>
                                                                                                                                                                                                                    <div class ="clear"></div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                </div>

                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    <div class="col-lg-3  col-12 col-md-4 blog-aside-box pr-0 pl-0">
                                                                                                                                                                                                        <aside id="categories-3" class="widget widget_categories">
                                                                                                                                                                                                            <h3>Categories</h3>
                                                                                                                                                                                                            <ul>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                    
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                    
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                    
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                    
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                    
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                

                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>
                                                                                                                                                                                                                <li class="cat-item cat-item-2">
                                                                                                                                                                                                                
                                                                                                                                                                                                                    <a title="Article Submission" >Article Submission</a></li>

                                                                                                                                                                                                            </ul>
                                                                                                                                                                                                        </aside>
                                                                                                                                                                                                        <aside class="widget widget_categories">
                                                                                                                                                                                                            <div class="row" style={{margin:"20px 0px"}}>
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <a href="https://www.submitcube.com/video-distribution-services.html">
                                                                                                                                                                                                                        <img src="https://www.submitcube.com/assets/addimage/video-marketing.png" style={{width:"100%", height:"auto" }}/>
                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="row" style={{margin:"20px 0px"}}>
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <a href="https://www.submitcube.com/video-distribution-services.html">
                                                                                                                                                                                                                        <img src="https://www.submitcube.com/assets/addimage/infographic-submission-service.png" style={{width:"100%",height:"auto"}}/>
                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                            <div class="row" style={{margin:"20px 0px"}}>
                                                                                                                                                                                                                <div class="col-md-12">
                                                                                                                                                                                                                    <a href="https://www.submitcube.com/video-distribution-services.html">
                                                                                                                                                                                                                        <img src="https://www.submitcube.com/assets/addimage/video-marketing.png" style={{width:"100%",height:"auto"}} />
                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </aside>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    
                                                                                                                                                                                                   
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                     ))
                                                                                                                                                                                                    }
          
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    </section>

                                                                                                                                                                                                </div>

                                                                                                                                                                                               
                                                                                                                                                                                                )
}

                                                                                                                                                                                                export default BlogDetails;

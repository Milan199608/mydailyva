import React from 'react';
import "./BlogDetails.css";
import { useParams } from 'react-router';
const BlogDetails = ({blogData}) => {
 const {post_id} = useParams();
    {console.log(blogData)}
    return (
        <div>
            <section class="hero-banner banner-img inner-banner web-new-banner d-flex align-items-center justify-content-center " style={{ background: "url(https://www.submitcube.com/assets/img/business-computer-connection-contemporary-450035.jpg) no-repeat", backgroundSize: "cover", marginTop: "5rem" }}>
                <div class="container">

                    <div class="col-lg-12 col-12 banner-box d-flex align-items-center justify-content-center flex-column">

                        {blogData.filter(item =>`${item.id== post_id} `).map((data,id) => (

                            <h1 class="text-center" style={{ color:"#ffffff" }} key={id}>
                                <p>{`${data.post_title}`}</p> 
                            </h1>
                        ))}
                        
                    </div>
                </div>
            </section>
            <section class="blog-detail-sec" style={{ padding: "4rem 0rem", marginTop: "2rem" }}>
                <div class="row align-items-center justify-content-center">
                  
                        <div class="col-lg-10 col-12 blog-detail-cont" >
                            <div class="row justify-content-between">
                                <div class="col-lg-9  col-12 col-md-8 ">
                                    <div class="blog-detail-box">
                                    {blogData.filter(item =>`${item.id.split(" ").join("-").toLowerCase() === post_id}`  ).map((data, index) => (

                                        <div class="blog-detail-part col-12" key={index}>
                                            <div class="blog-tag">
                                                <div style={{ float: "right" }}>
                                                    <i class="fa fa-calendar" aria-hidden="true"></i> {data.date_of_add}</div>
                                            </div>
                                            <a href="#" class="blog-dtls-in-title">
                                                <h2 style={{ marginBottom: "1rem" }}></h2>
                                            </a>
                                            <div class="tag-box" style={{ marginBottom: "1rem" }}>
                                                <i class="fa fa-tag" aria-hidden="true"></i>

                                                <a href="category-seo-services.html" style={{ color: "black" }}>SEO services</a>
                                            </div>
                                            <div class="blog-dtls-main-sec">
                                            <div dangerouslySetInnerHTML={{ __html:data.post_description }}/>
                                                <p>
                                                    <img src={`https://www.mydailyva.com/dev/mdvphp/upload/blog/150/${data.postimage}`} alt="SEO Packages" title="SEO Packages" style={{ width: "100%", height: "auto" }} />
                                                </p>
                                               
                                            </div>
                                        </div>
                                         ))
                                        }
                    
                                        <div className="clear>
</div>
<div className="clear>
                                            <div class="blog-detail-box" style={{ marginTop: "40px" }}>
                                                <div class="blog-detail-part col-12">
                                                    <section class="post-author">
                                                        <div>
                                                            <div style={{ width: "75%", float: "left" }}>
                                                                <strong></strong>

                                                            </div>
                                                            <div className="clear"></div>
                                                        </div>
                                                    </section>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="clear"></div>

                                            <div class="blog-detail-box" style={{ marginTop: "40px" }}>
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
                                                        <div class="row">
                                                            <div class="col-md-12">

                                                                <input type="button" name="submitcomment" id class="submitform" value="Submit" onclick="submitcommentforblog()" style={{ marginTop: "15px" }} />
                                                            </div>
                                                            <div class="clear"></div>
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
                                        <div class="row" style={{ margin: "20px 0px" }}>
                                            <div class="col-md-12">
                                                <a href="https://www.submitcube.com/video-distribution-services.html">
                                                    <img src="https://www.submitcube.com/assets/addimage/video-marketing.png" style={{ width: "100%", height: "auto" }} />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row" style={{ margin: "20px 0px" }}>
                                            <div class="col-md-12">
                                                <a href="https://www.submitcube.com/video-distribution-services.html">
                                                    <img src="https://www.submitcube.com/assets/addimage/infographic-submission-service.png" style={{ width: "100%", height: "auto" }} />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="row" style={{ margin: "20px 0px" }}>
                                            <div class="col-md-12">
                                                <a href="https://www.submitcube.com/video-distribution-services.html">
                                                    <img src="https://www.submitcube.com/assets/addimage/video-marketing.png" style={{ width: "100%", height: "auto" }} />
                                                </a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>


                        </div>
                   
                </div>
            </section>

        </div>


    )
}

export default BlogDetails;

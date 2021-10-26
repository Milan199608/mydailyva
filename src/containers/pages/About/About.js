import React from 'react';
import { Helmet } from 'react-helmet';
import "./About.css";
import {PageContainer} from '../../';
const About = () => {
  const metaTitle='About Us - Mydailyva Virtual Assistants';
  const metaDescription='About Us - Mydailyva Virtual Assistants';

    return (
      <PageContainer title={metaTitle} description={metaDescription}>
        
            <section className="intro-box terms-box-center">
        <div className="row align-items-center justify-content-center">

          <div className="col-lg-10 col-12 terms-box-inside">
            <h2>About Us</h2>
            <p>
            Mydailyva is a virtual assistant agency offering boutique administrative and digital marketing services that support startups, busy professionals and small businesses Worldwide. We provide a cost-effective, efficient, dependable and professional staffing solution to our valued clients. </p>

<p>The company has its own digital marketing and web management team that helps our clients with web design and development as well as social media marketing, online marketing, and optimization of search engines. We strive to satisfy the needs of our customers with a smile. Each new project we undertake enhances our expertise of the specific field. We are a team that displays the best levels of reliability and professionalism. This is important to our clients. We've pushed the boundaries to become a top-quality service that is devoted to helping clients to save money and time.</p>
            
          </div>
        </div>
      </section>
            
            
        </PageContainer>
    )
}

export default About;

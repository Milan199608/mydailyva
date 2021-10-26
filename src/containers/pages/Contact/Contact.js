import React from 'react';
import { Helmet } from 'react-helmet';
import {PageContainer} from '../../';
import {ContactForm} from '../../../components';

const Contact = () => {
  const metaTitle='Contact Us - Mydailyva Virtual Assistants';
  const metaDescription='Contact Us - Mydailyva Virtual Assistants';
    return (
      <PageContainer title={metaTitle} description={metaDescription}>
        
            <section className="intro-box terms-box-center">
        <div className="row align-items-center justify-content-center">

          <div className="col-lg-10 col-12 terms-box-inside">
              <h2>Contact US</h2>
              <ContactForm/>
          </div>
        </div>
      </section>
        </PageContainer>
    )
}

export default Contact;

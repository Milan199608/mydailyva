import React,{ useState,useEffect } from 'react';                                                                                                                                                                          
import {Modal,Banner,Card, Client, CommonCard, ContactForm,Nav} from '../../../components';
import {PageContainer} from '../../';


const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        var data = JSON.stringify();
      fetch("https://www.mydailyva.com/dev/api/getConfiguration",{
    })
    .then(res=>res.json()).then(
        (result)=>{
          setItems(result.data);
        }
      )
    },[])
    {console.log(items)}

    const specTopCardContent=[
        {                        
            
            icon:"far fa-calendar-alt",
            heading:"Inbox Management",
            link:"",
            
        },
        {
            icon:'far fa-calendar-alt',
            heading:'Calendar Management',
            link:'',
        },
        {
            icon:'far fa-money-bill-alt',
            heading:'Expenses & Invoices',
            link:''
        },
        {
            icon:'fas fa-mobile-alt',
            heading:'Social Media Strategy',
            link:''
        },
        {
            icon:'fas fa-search',
            heading:'Research',
            link:''
        },
        {
            icon:'far fa-keyboard',
            heading:'Data Entry',
            link:''
        },
        {
            icon:'fas fa-pencil-alt',
            heading:'Content Marketing',
            link:''
        },

        {
            icon:'fas fa-chalkboard-teacher',
            heading:'Event Planning',
            link:''
        },

        {
            icon:'fas fa-plane-departure',
            heading:'Travel Booking',
            link:''
        }
,
        {
            icon:'fas fa-desktop',
            heading:'Website Maintenance',
            link:''
        }

        



    ]
    const specCardContent=[
        {
            icon:'fa fa-calendar',
            heading:'2 hour response times',
            content:'Your virtual assistant writes back in 2 hours with the task done or an estimated time of completion',
            link:''
        },
        {
            icon:'fa fa-calendar',
            heading:'2 hour response times',
            content:'Your virtual assistant writes back in 2 hours with the task done or an estimated time of completion',
            link:''
        },
        {
            icon:'fa fa-calendar',
            heading:'2 hour response times',
            content:'Your virtual assistant writes back in 2 hours with the task done or an estimated time of completion',
            link:''
        },
        {
            icon:'fa fa-calendar',
            heading:'2 hour response times',
            content:'Your virtual assistant writes back in 2 hours with the task done or an estimated time of completion',
            link:''
        }
    ]
    const metaTitle='Virtual Assistants - Mydailyva Virtual Assistants';
    const metaDescription='Looking for Virtual Assistant Agency? We are one of the pioneer virtual assistant agency, providing 24/7 virtual assistant services across the globe';

    const [showAddContactModal, setshowAddContactModal] = useState(false);

    const handleCloseAddContact = () =>{
        setshowAddContactModal(false);
    }
    const handleModalOpenFunc= () =>{
        setshowAddContactModal(true);
    }

    const addNewContactModalProps = {
        modalId: "AddNewContactModal",
        modalSize: "modal-lg",
        modalOpen: showAddContactModal,
        modalClose: handleCloseAddContact,
        titleText: "Contact Us",
        bodyComponent: <ContactForm />
      };

      


    return (
        
        <PageContainer title={metaTitle} description={metaDescription}>
       
            {/* <Popup /> */}
            <Nav modalOpenFunc={handleModalOpenFunc}/>
            <Banner modalOpenFunc={handleModalOpenFunc} items={items} />
            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">
                <div dangerouslySetInnerHTML={{ __html: items.block_One_desscription }} />
                    <div class="row d-flex justify-content-center">
                                <div class="col-md-3">
                                
                                </div>    
                           
                    </div>
                    
                </div>
            </section>
            <Card  backgroundclass="" items={items}/>
          

            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="row">
                        {specCardContent.map((item)=>{
                                //console.log(item);
                                return(
                                <div class="col-md-3">
                                    <CommonCard item={item}/>
                                </div>    
                                )
                            })
                        }
                    </div>
                    
                </div>
            </section>  
         <Client  items={items}/>
         <Modal {...addNewContactModalProps} />
        </PageContainer>
    )
}

export default Home;

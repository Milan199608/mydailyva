import React from 'react';
import "./Card.css";
import CardImage from "../../assets/Image/2ce3320e.jpg"
//< div dangerouslySetInnerHTML={{ __html: items.block_two_desscription }} />
const Card = (props) => {
    const {items} = props;
    {console.log(items)}
    return (
        <div>  
             <div dangerouslySetInnerHTML={{ __html: items.block_two_desscription }} />
            <section id="about" class="aboutcard" >
               
               
                  {/*   <div class="row">
                        {imgPosition=='left'?
                        <div class="col-lg-6">
                            <img src={CardImage} class="img-fluid" alt="" />
                        </div>:''
                        }
                        <div class="col-lg-6 pt-4 pt-lg-0 justify-content-center align-item-center content">
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                        {imgPosition=='right'?
                        <div class="col-lg-6">
                            <img src={CardImage} class="img-fluid" alt="" />
                        </div>:''
                }
                
                    </div> */}
                 
                
              
            </section>

        </div>
    )

            }
export default Card;





import React from 'react';
import "./Card.css";
import CardImage from "../../assets/Image/2ce3320e.jpg"

const Card = (props) => {
    const {imgPosition, backgroundclass} = props;
    return (
        <div>
            <section id="about" class={`aboutcard ${backgroundclass}`}>
                <div class="container">

                    <div class="row">
                        {imgPosition=='left'?
                        <div class="col-lg-6">
                            <img src={CardImage} class="img-fluid" alt="" />
                        </div>:''
                        }
                        <div class="col-lg-6 pt-4 pt-lg-0 justify-content-center align-item-center content">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <p >
                            Quisque gravida nisl eu ex vulputate aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas hendrerit ut dolor sed placerat. Donec iaculis magna leo, tincidunt tincidunt risus dictum 
                            </p>
                        </div>
                        {imgPosition=='right'?
                        <div class="col-lg-6">
                            <img src={CardImage} class="img-fluid" alt="" />
                        </div>:''
                        }
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Card;




{/* <BNNN imgposition="left" />

<BNNN imgposition="right" />
export const BNNN = () =>{
    const {imgposition} = props;
    if(imgposition=='left'){
        return (
            <>
                <div className="row">
                    <div className="col-6">
                        <img />
                    </div>
                    <div className="col-6">
                        text
                    </div>
                </div>
            </>
        );
    }
    else{
        <>
                <div className="row">
                    <div className="col-6">
                        text
                    </div>
                    <div className="col-6">
                        <img />
                    </div>
                    
                </div>
            </>
    }
} */}
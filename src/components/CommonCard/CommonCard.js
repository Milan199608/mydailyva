import React from "react";


export const CommonCard = (props) => {

    const {icon,heading,content,link} = props.item;

    return (
        <>
            <div class="card cardclass">
                {icon!=''?
                <div class="icon-box"><i class={icon}></i></div>
                :''
                }
                <div class="card-body">
                    <h5 class="card-title">{heading!=''?heading:''}</h5>
                    <p class="card-text">{content!=''?content:''}</p>
                    {link!=''?
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    :''
                    }
                </div>
            </div>
        </>
    );
}

export default CommonCard;
import React from "react";

export default function ServiceCard(props) {
    return(
            <div className="banner1 onethird-banner" >
                <img className="serviceArray-img" src={props.img} alt="" />
                <div className="centered">
                   <h5 className="serviceBanner-title">{props.title}</h5>
                   <h3 className="clients">{props.client}</h3>
                   <a className="btn uppercase" href="/">{props.btnText}</a>
                </div>

                {/* <div className="banner2 onethird-banner">
                <img className="serviceArray-img" src={props.img} alt="" />
                <div className="centered">
                   <h5 className="serviceBanner-title">{props.title}</h5>
                   <h3 className="clients">{props.client}</h3>
                   <a className="btn uppercase" href="/">{props.btnText}</a>
                </div>
            </div>

            <div className="banner3 onethird-banner">
                <img className="serviceArray-img" src={props.img} alt="" />
                <div className="centered">
                   <h5 className="serviceBanner-title">{props.title}</h5>
                   <h3 className="clients">{props.client}</h3>
                   <a className="btn uppercase" href="/">{props.btnText}</a>
                </div>
            </div> */}

            </div>

    )
};
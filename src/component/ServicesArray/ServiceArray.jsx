import React from "react";
import "./servicearray.css";
import ServiceCard from "./ServiceCard";
import services from "./services";

function newCard(service) {
    return (
    <ServiceCard 
    key={service.id}
    img={service.imgURL}
    title={service.title}
    client={service.client}
    btnText={service.buttonText}
    />
    )
}

export default function ServiceArray() {
    return(
        <div id="intdesign-section3" className="serviceBanner">
            {services.map(newCard)}
        </div>
    )
}
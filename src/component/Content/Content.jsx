import React from "react";
import "./content.css";

export default function Content() {
    return(
        <div className="content">
            <h1 className="content-heading uppercase">Design your house</h1>
            <p className="content-title">Every home is a special story</p>
            <p className="content-subtitle">An <span className="mini-logo">IntDesigns</span> project curated by Paul Maiva</p>
            <a className="btn uppercase" href="/">Find out more</a>
        </div>
    )
}
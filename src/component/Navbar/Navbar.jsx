import React from "react";
import "./navbar.css";

export default function Navbar () {
    return (
        <div className="nav">
            <span className="logo">IntDesigns</span>
            <ul className="uppercase">
                <li><a href="/">Home</a></li>
                <li><a href="/">Interiors</a></li>
                <li><a href="/">brands</a></li>
                <li><a href="/">services</a></li>
                <li><a href="/">online shop</a></li>
                <li><a href="/">kitchen studio</a></li>
            </ul>
        </div>
    )
}
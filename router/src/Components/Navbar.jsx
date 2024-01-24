import React from "react";
import { Link } from "react-router-dom";
import "./../Styles/Navbar.css"

function Navbar(){
    return(
        <>
            <div id="navbar">
                <h3>Kalvium 💙</h3>
                <div id="links">
                    <Link className="link-style" to="/">Squad51</Link>
                    <Link className="link-style" to="/Contacts">Contacts</Link>
                    <Link className="link-style" to="/About">About</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;

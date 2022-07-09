import React from "react";
import "./Header.css";

const Header = () =>{
    return(
        <ul className="header-container">
            <li><button className="home-button">Home</button></li>
            <li><input className="search-input" placeholder="Search"/></li>
            <li><button className="search-button">Procurar</button></li>
        </ul>
    );
};

export default Header;
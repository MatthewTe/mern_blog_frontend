// React Imports:
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

// Importing CSS:
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
        <div className="nav">
            <ul className="nav-links">
                <Link to="/" style={{textDecoration: 'none'}}   >
                <li>Home</li>
                </Link>            
            </ul>
        </div>
        ); 
    };
};

export default Navbar;
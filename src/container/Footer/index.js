import React from "react";
import RenderContact from "../../components/Contact/RenderContact";
import "./style.css";


const Footer = props => {
    return (
        <footer className="footer">
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <RenderContact />
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import Ws from '../js/whatsapp.jsx';

const Social = () => {
    return (
        <div className="social-icons">
            <Ws />
            <Link to="https://www.youtube.com/@rutasorganicas_" className="social-icon"  target="_blank"><i className="bi bi-youtube" /></Link>
            <Link to="https://www.instagram.com/rutasorganicas" className="social-icon"  target="_blank"><i className="bi bi-instagram" /></Link>
            {/* <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a> */}
        </div>
    )

}
export default Social;
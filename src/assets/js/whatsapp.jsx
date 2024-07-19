import React, { useState } from 'react';
import '../css/style.css';
import companyLogo from '../images/others/www.png';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-brands-svg-icons'; */
import { BsWhatsapp } from 'react-icons/bs';
import { ChatIcon } from '@chakra-ui/icons'


const Whatsapp = () => {
    const [showChat, setShowChat] = useState(false);

    const handleChatClick = () => {
        setShowChat(!showChat);
    };

    const openWhatsappWeb = () => {
        const companyNumber = '+541133001010'; // Reemplaza con el número de teléfono de tu empresa
        const url = `https://web.whatsapp.com/send?phone=${companyNumber}`;
        window.open(url, '_blank');
        setShowChat(false); // Cerrar la ventana del chat
    };

    return (
        <>
            <button className="social-icon" onClick={handleChatClick}><i className="bi bi-whastsapp">
        <BsWhatsapp /></i> {/* Usar el componente con el ícono de WhatsApp */}
      </button>
            {showChat && (
                <div className="whatsapp-chat">
                    <div className="chat-header">
                        <img src={companyLogo} alt="Company Logo" />
                        <div>
                            <h5><b>Rutas Orgánicas</b></h5>
                            <p>Raíces orgánicas. Evolución consciente.</p>
                        </div>
                    </div>
                    <div className="chat-body">
                        <div className="message welcome-message">
                        <ChatIcon /><p>Bienvenido.</p><p> ¿En qué podemos ayudarte?</p>
                        </div>
                    </div>
                    <div className="chat-footer">
                        <button onClick={openWhatsappWeb}>Iniciar conversación</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Whatsapp;
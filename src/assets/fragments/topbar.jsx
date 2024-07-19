import React from 'react';
import '../css/style.css'; 

const topbar =()=>{
  return (
    <>
   
<section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex  justify-content-md-end">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contacto@rutasorganicas.com">contacto@rutasorganicas.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+54 11 2222 3333</span></i>
      </div>
    </div>
  </section>
  </>
  )
};
export default topbar;

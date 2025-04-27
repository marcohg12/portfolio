import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Contact(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Contacto</h2>
                <p>Puede contactarme por medio de los siguientes canales:</p>
                <div className="d-flex align-items-center mb-4">
                    <MdOutlineMail size={50}/>
                    <p className="mb-0 ms-2">marcohg0312@gmail.com</p>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <MdOutlinePhone size={50}/>
                    <p className="mb-0 ms-2">(506)8782-1555</p>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <FaGithub size={50}/>
                    <a href="https://github.com/marcohg12" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">Ver perfil de GitHub</a>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <CiLinkedin size={50}/>
                    <a href="https://www.linkedin.com/in/marcohg/" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">Ver perfil de LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
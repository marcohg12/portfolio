import React from "react";
import Carousel from "../../components/Carousel";
import CSProjectPhoto1 from "../../assets/cs-project/cs-proyecto-1.png";
import CSProjectPhoto2 from "../../assets/cs-project/cs-proyecto-2.png";
import CSProjectPhoto3 from "../../assets/cs-project/cs-proyecto-3.png";
import CSProjectPhoto4 from "../../assets/cs-project/cs-proyecto-4.png";
import CSProjectPhoto5 from "../../assets/cs-project/cs-proyecto-5.png";
import CSProjectPhoto6 from "../../assets/cs-project/cs-proyecto-6.png";
import CSProjectPhoto7 from "../../assets/cs-project/cs-proyecto-7.png";
import CSProjectPhoto8 from "../../assets/cs-project/cs-proyecto-8.png";

function CSProject(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Punto y Contrapunto</h2>
                <p className="fw-lighter">Elaborado en el segundo semestre de 2024.</p>
                <div className="mb-4">
                    <Carousel
                        images={[CSProjectPhoto1, CSProjectPhoto2, CSProjectPhoto3, CSProjectPhoto4,
                            CSProjectPhoto5, CSProjectPhoto6, CSProjectPhoto7, CSProjectPhoto8
                        ]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este proyecto fue realizado para el curso de Computación y Sociedad. Consiste en un prototipo de red social
                    basado en la red social Mastodon. La aplicación permite a los usuarios generar debates en la red y participar en los debates
                    de otros usuarios. Para publicar un debate o una respuesta a un debate, los usuarios deben proporcionar sus argumentos y al
                    menos un enlace a un medio de evidencia que respalde sus argumentos. La aplicación interactúa con el API de Mastodon para proporcionar a 
                    los usuarios las funcionalidades de la red social.
                </p>
                <p>
                    Los usuarios pueden realizar acciones como dar me gusta, compartir o guardar debates; ver la línea de tiempo pública 
                    o su línea de tiempo (en la que encuentran solo debates de usuarios a los que siguen); dejar respuestas a los debates de otros usuarios; ver
                    el perfil de otros usuarios y consultar sus publicaciones, seguidos y seguidores; y seguir otros usuarios.
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de React y frontend como:
                </p>
                <ul>
                    <li>
                        <p><b>Providers: </b>Para poder compartir datos entre componentes de forma más limpia y organizada.</p>
                    </li>
                    <li>
                        <p><b>Infinite scrolls: </b>Para poder implementar las líneas de tiempo típicas de una red social.</p>
                    </li>
                    <li>
                        <p><b>Alert modals: </b>Para poder dar mensajes a los usuarios sobre el resultado de acciones que hayan hecho (como publicar debates, por ejemplo).</p>
                    </li>
                    <li>
                        <p><b>Popup modals: </b>Para crear menús y formularios emergentes.</p>
                    </li>
                    <li>
                        <p><b>Autenticación con OAuth 2.0: </b>Para autenticar a los usuarios en la aplicación y poder consumir el API de Mastodon.</p>
                    </li>
                    <li>
                        <p><b>Rich links: </b>Para generar enlaces con previsualización del contenido.</p>
                    </li>
                </ul>
                <h3>Acceso</h3>
                <p>Puede ver el código fuente en GitHub por medio del siguiente enlace: 
                    <a href="https://github.com/marcohg12/CS_Proyecto" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">
                        Enlace al proyecto
                    </a>
                </p>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                    <img src={"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"} alt="React logo"/>
                    <img src={"https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"} alt="Bootstrap logo"/>
                    <img src={"https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react"} alt="Context API logo"/>
                    <img src={"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"} alt="Node.js logo"/>
                    <img src={"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"} alt="Express logo"/>
                    <img src={"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"} alt="CSS logo"/>
                    <img src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} alt="Javascript logo"/>
                </div>

            </div>
        </div>
    );
}

export default CSProject;
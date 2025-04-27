import React from "react";
import Carousel from "../../components/Carousel";

function DSProject(){
    return(
        <div className="container">
            <div className="my-4">
                <h2 className="mb-4">Sistema Duende</h2>
                <div className="mb-4">
                    <Carousel
                        images={[]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Texto
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de frontend y bases de datos como:
                    <ul className="my-3">
                        <li>
                            <p><b>Carrusel de imágenes: </b></p>
                        </li>
                    </ul>
                
                </p>
                <h3>Acceso</h3>
                <p>Puede ver el código fuente en GitHub por medio del siguiente enlace: 
                    <a href="https://github.com/marcohg12/DS_Proyecto" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">
                        Enlace al proyecto
                    </a>
                </p>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                    <img src={"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"} alt="React logo"/>
                    <img src={"https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"} alt="Bootstrap logo"/>
                    <img src={"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"} alt="Node.js logo"/>
                    <img src={"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"} alt="Express logo"/>
                    <img src={"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"} alt="MongoDB logo"/>
                    <img src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} alt="Javascript logo"/>
                    <img src={"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"} alt="CSS logo"/>
                    <img src={"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"} alt="Typescript logo"/>
                </div>

            </div>
        </div>
    );
}

export default DSProject;
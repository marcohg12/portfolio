import React from "react";
import Carousel from "../../components/Carousel";

function SOProject1(){
    return(
        <div className="container">
            <div className="my-4">
                <h2 className="mb-4">Sistema de Compresión de Archivos</h2>
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
                    <a href="https://github.com/marcohg12/SO_Proyecto_01" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">
                        Enlace al proyecto
                    </a>
                </p>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                    <img src={"https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"} alt="C logo"/>
                    <img src={"https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white"} alt="Bash logo"/>
                </div>

            </div>
        </div>
    );
}

export default SOProject1;
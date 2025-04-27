import React from "react";
import Carousel from "../../components/Carousel";
import DB2ProjectPhoto1 from "../../assets/bd2-project/bd2-proyecto-1.png";
import DB2ProjectPhoto2 from "../../assets/bd2-project/bd2-proyecto-2.png";
import DB2ProjectPhoto3 from "../../assets/bd2-project/bd2-proyecto-3.png";
import DB2ProjectPhoto4 from "../../assets/bd2-project/bd2-proyecto-4.png";
import DB2ProjectPhoto5 from "../../assets/bd2-project/bd2-proyecto-5.png";
import DB2ProjectPhoto6 from "../../assets/bd2-project/bd2-proyecto-6.png";
import DB2ProjectPhoto7 from "../../assets/bd2-project/bd2-proyecto-7.png";

function DB2Project(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Sistema de Blogging</h2>
                <p className="fw-lighter">Elaborado en el segundo semestre de 2022.</p>
                <div className="mb-4">
                    <Carousel
                        images={[DB2ProjectPhoto1, DB2ProjectPhoto2, DB2ProjectPhoto3, DB2ProjectPhoto4, DB2ProjectPhoto5,
                            DB2ProjectPhoto6, DB2ProjectPhoto7
                        ]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este es un proyecto para el curso de Bases de Datos II. Consiste en un sistema web para blogging en el que los
                    usuarios pueden visualizar blogs y filtrarlos por criterios como fecha de publicación, cantidad de me gusta, o
                    por palabras. Dentro de los blogs, los usuarios pueden visualizar el contenido, el autor del blog y pueden dejar
                    me gusta, no me gusta, comentarios, o incluso, responder otros comentarios. Los autores del blog pueden visualizar estadísticas
                    asociadas al blog, como la cantidad de visitas, y la pueden ver en formato de gráfico de líneas o con
                    gráfico de barras. 
                </p>
                <p>
                    Los usuarios también pueden consultar el perfil de otros usuarios, ver los blogs que han publicado y pueden
                    suscribirse a sus perfiles. Los usuarios cuentan con una pestaña en la que ver únicamente los blogs de los
                    usuarios a los que se encuentran suscritos. Los autores de los blogs tienen la posibilidad de editar el contenido
                    de los mismos y de eliminarlos completamente. 
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de Express y frontend como:
                    <ul className="my-3">
                        <li>
                            <p><b>Middleware de autenticación: </b>Implementé un middleware para proteger endpoints de usuarios no autenticados.</p>
                        </li>
                        <li>
                            <p><b>Autenticación con passport: </b>Utilicé la biblioteca Passport para manejar las sesiones de los usuarios.</p>
                        </li>
                        <li>
                            <p><b>Generación de gráficos: </b>Utilicé la biblioteca Canvasjs para crear gráficos a partir de los datos de los blogs.</p>
                        </li>
                    </ul>
                
                </p>
                <h3>Acceso</h3>
                <p>Puede ver el código fuente en GitHub por medio del siguiente enlace: 
                    <a href="https://github.com/marcohg12/Prototipo_Investigacion" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">
                        Enlace al proyecto
                    </a>
                </p>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                <img src={"https://img.shields.io/badge/EJS-23C687?style=for-the-badge&logo=ejs&logoColor=white"} alt="EJS logo"/>
                    <img src={"https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"} alt="Bootstrap logo"/>
                    <img src={"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"} alt="Node.js logo"/>
                    <img src={"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"} alt="Express logo"/>
                    <img src={"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"} alt="MongoDB logo"/>
                    <img src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} alt="Javascript logo"/>
                    <img src={"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"} alt="HTML logo"/>
                </div>

            </div>
        </div>
    );
}

export default DB2Project;
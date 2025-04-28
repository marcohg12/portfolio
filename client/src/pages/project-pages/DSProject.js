import React from "react";
import Carousel from "../../components/Carousel";
import DSProjectPhoto1 from "../../assets/ds-project/ds-proyecto-1.png";
import DSProjectPhoto2 from "../../assets/ds-project/ds-proyecto-2.png";
import DSProjectPhoto3 from "../../assets/ds-project/ds-proyecto-3.png";
import DSProjectPhoto4 from "../../assets/ds-project/ds-proyecto-4.png";
import DSProjectPhoto5 from "../../assets/ds-project/ds-proyecto-5.png";
import DSProjectPhoto6 from "../../assets/ds-project/ds-proyecto-6.png";
import DSProjectPhoto7 from "../../assets/ds-project/ds-proyecto-7.png";
import DSProjectPhoto8 from "../../assets/ds-project/ds-proyecto-8.png";
import DSProjectPhoto9 from "../../assets/ds-project/ds-proyecto-9.png";

function DSProject(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Sistema Duende</h2>
                <p className="fw-lighter">Elaborado en el segundo semestre de 2023.</p>
                <div className="mb-4">
                    <Carousel
                        images={[DSProjectPhoto1, DSProjectPhoto2, DSProjectPhoto3,
                            DSProjectPhoto4, DSProjectPhoto5, DSProjectPhoto6, 
                            DSProjectPhoto7, DSProjectPhoto8, DSProjectPhoto9
                        ]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este es un proyecto para el curso de Diseño de Software. Es un sistema web de e-commerce para una maquilladora
                    conocida como Duende. El sistema permite a los usuarios visualizar los productos de maquillaje y cuidado de la
                    piel, pueden observar sus detalles y agregar los productos a su carrito. Los usuarios también pueden observar el historial de sus
                    pedidos, el estado de los pedidos en curso, y el detalle de facturación de los mismos. Adicionalmente, los
                    usuarios pueden visualizar los trabajos de maquillaje publicados por la maquilladora, los cuales
                    pueden filtrar por palabras clave o categoría. 
                </p>
                <p>
                    Para la administradora, el sistema permite visualizar todos los pedidos recibidos (junto
                    con sus detalles) y actualizar el estado de los mismos. El sistema también le provee una 
                    agenda en la que puede registrar entradas en un calendario; además, los pedidos que apruebe
                    se agendan automáticamente en el calendario para su entrega. La administradora también
                    puede registrar nuevos productos, publicaciones o categorías de productos. Cuando el estado
                    de un pedido cambia, el usuario es notificado sobre el cambio de estado del mismo.
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de frontend, arquitectura y patrones de diseño como:
                </p>
                <ul>
                    <li>
                        <p><b>Organización del backend: </b>Utilicé una separación de routers, controladores, modelos y daos siguiendo principios SOLID.</p>
                    </li>
                    <li>
                        <p><b>Patrón observer: </b>Utilicé este patrón para detectar cambios en el estado de los pedidos y notificar a los usuarios.</p>
                    </li>
                    <li>
                        <p><b>Patrón decorator: </b>Utilicé este patrón para crear entradas genericas en el calendario, de modo que la administradora pudiera definir los campos que deseara.</p>
                    </li>
                    <li>
                        <p><b>Protección de rutas: </b>Implementé un mecanismo en React para proteger las rutas de administración de usuarios no autenticados como administrador.</p>
                    </li>
                    <li>
                        <p><b>Calendario de agenda: </b>Implementé el calendario con la biblioteca react-big-calendar, el cual proporciona múltiples vistas.</p>
                    </li>
                </ul>
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
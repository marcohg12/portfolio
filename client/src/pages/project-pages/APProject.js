import React from "react";
import Carousel from "../../components/Carousel";

function APProject(){
    return(
        <div className="container">
            <div className="my-4">
                <h2 className="mb-4">Sistema de Reserva para Hoteles</h2>
                <div className="mb-4">
                    <Carousel
                        images={[]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este proyecto fue realizado para el curso de Administración de Proyectos. Consiste en un sistema web para realizar
                    reservaciones en hoteles. Los usuarios pueden visualizar una lista de hoteles y selecionar alguno para ver su
                    información. Aquí, los usuarios pueden ver las fotos, amenidades y habitaciones del hotel; además de poder realizar
                    reservaciones. Los administradores de los hoteles pueden agregar habitaciones, crear ofertas sujetas a 
                    condiciones (como cantidad mínima de días de estadía), manejar las reservaciones actuales y visualizar
                    estadísticas asociadas al hotel y sus huéspedes.
                </p>
                <p>
                    Adicionalmente, los usuarios pueden calificar sus estadías, agregar comentarios al hotel y guardar
                    sus hoteles favoritos en una lista. El sistema también permite a los usuarios agregar fotos de perfil
                    y manejar la información de sus cuentas. Los administradores del sistema pueden registrar hoteles y asignarles 
                    usuarios como administradores. 
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de frontend y bases de datos como:
                    <ul className="my-3">
                        <li>
                            <p><b>Carrusel de imágenes: </b>Para que los usuarios visualizaran las imágenes de cada hotel en un carrusel.</p>
                        </li>
                        <li>
                            <p><b>Manipulación del DOM: </b>Para manejar elementos de la página dinámicamente.</p>
                        </li>
                        <li>
                            <p><b>EJS: </b>Utilicé el motor de plantillas para generar HTML dinámico.</p>
                        </li>
                        <li>
                            <p><b>Consultas de base de datos complejas: </b>Realicé consultas complejas con el apoyo de funciones y procedimientos almacenados.</p>
                        </li>
                        <li>
                            <p><b>Jobs: </b>Utilicé jobs de bases de datos para manejar el estado de las ofertas.</p>
                        </li>
                    </ul>
                
                </p>
                <h3>Acceso</h3>
                <p>Puede ver el código fuente en GitHub por medio del siguiente enlace: 
                    <a href="https://github.com/marcohg12/AP-Sistema_funcional" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">
                        Enlace al proyecto
                    </a>
                </p>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                    <img src={"https://img.shields.io/badge/EJS-23C687?style=for-the-badge&logo=ejs&logoColor=white"} alt="EJS logo"/>
                    <img src={"https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"} alt="Bootstrap logo"/>
                    <img src={"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"} alt="Node.js logo"/>
                    <img src={"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"} alt="Express logo"/>
                    <img src={"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"} alt="MySQL logo"/>
                    <img src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} alt="Javascript logo"/>
                    <img src={"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"} alt="HTML logo"/>
                </div>

            </div>
        </div>
    );
}

export default APProject;
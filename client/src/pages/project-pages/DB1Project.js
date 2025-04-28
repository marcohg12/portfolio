import React from "react";
import Carousel from "../../components/Carousel";
import DB1ProjectPhoto1 from "../../assets/bd1-project/bd1-proyecto-1.png";
import DB1ProjectPhoto2 from "../../assets/bd1-project/bd1-proyecto-2.jpg";
import DB1ProjectPhoto3 from "../../assets/bd1-project/bd1-proyecto-3.png";
import DB1ProjectPhoto4 from "../../assets/bd1-project/bd1-proyecto-4.png";
import DB1ProjectPhoto5 from "../../assets/bd1-project/bd1-proyecto-5.png";
import DB1ProjectPhoto6 from "../../assets/bd1-project/bd1-proyecto-6.png";
import DB1ProjectPhoto7 from "../../assets/bd1-project/bd1-proyecto-7.png";

function DB1Project(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Plataforma Universitaria</h2>
                <p className="fw-lighter">Elaborado en el primer semestre de 2022.</p>
                <div className="mb-4">
                    <Carousel
                        images={[DB1ProjectPhoto1, DB1ProjectPhoto2, DB1ProjectPhoto3, DB1ProjectPhoto4,
                            DB1ProjectPhoto5, DB1ProjectPhoto6, DB1ProjectPhoto7
                        ]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este es un proyecto para el curso de Bases de Datos I. Consiste en una aplicación de escritorio en la
                    que los administradores pueden registrar cursos y agregar profesores y estudiantes a los mismos; además
                    de consular estadísticas relacionadas a los cursos y el rendimiento de los estudiantes. Los profesores
                    pueden acceder a sus cursos y agregar tareas, proyectos y examenes. Para las distintas evaluaciones, el profesor
                    puede configurarlas como de entrega individual o de entrega en grupos; en esta última opción el profesor
                    puede definir los grupos de trabajo conformados por estudiantes del curso. Además, los profesores pueden
                    calificar las entregas de los estudiantes, donde estos recibirán un correo electrónico informando
                    de la evaluación del trabajo entregado; y pueden dejar comentarios a los estudiantes.  
                </p>
                <p>
                    Por otro lado, los estudiantes pueden consultar los cursos en los que se encuentran matriculados. Por cada curso,
                    pueden observar las distinas evaluaciones, sus detalles, grupos de trabajo y calificaciones obtenidas. El sistema
                    también presenta al estudiante el promedio general del curso. Los estudiantes también pueden agregar calificaciones
                    a los profesores de los cursos en los que están matriculados. 
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de frontend y bases de datos como:
                </p>
                <ul>
                    <li>
                        <p><b>Diseño de interfaz: </b>Utilicé un diseño de interfaz intuitivo y agradable al usuario.</p>
                    </li>
                    <li>
                        <p><b>Servicio de envío de correos: </b>Implementé un servicio para enviar correos desde Java.</p>
                    </li>
                </ul>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                    <img src={"https://img.shields.io/badge/Java-b07219?style=for-the-badge&logo=java&logoColor=white"} alt="Java logo"/>
                    <img src={"https://img.shields.io/badge/Java_Swing-b07219?style=for-the-badge&logo=java&logoColor=white"} alt="Java Swing logo"/>
                    <img src={"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"} alt="MySQL logo"/>
                </div>

            </div>
        </div>
    );
}

export default DB1Project;
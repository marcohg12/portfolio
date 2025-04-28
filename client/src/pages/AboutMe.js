import React from "react";

function AboutMe(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Sobre mí</h2>
                <section>
                    <section className="mb-4">
                        <p>Mi nombre es <b>Marco Herrera González</b> y soy estudiante de último semestre de la carrera de Ingeniería en Computación
                            del Instituto Tecnológico de Costa Rica. Soy un gran apasionado del desarrollo web, desarrollo de APIs y bases de datos.
                            Mi aspiración como futuro profesional es contribuir al desarrollo de aplicaciones robustas y escalables, optimizando la experiencia del usuario y
                            asegurando que cada proyecto sea de la mayor calidad posible. Estoy comprometido con la mejora continua y el aprendizaje constante, ya que considero que 
                            la excelencia en el desarrollo de software es clave para resolver problemas reales y generar un impacto positivo en la sociedad.
                        </p>
                        <p>
                            A lo largo de mi formación académica y en distintos proyectos en equipo, he asumido con frecuencia el rol de líder, lo 
                            que me ha permitido desarrollar y fortalecer mis habilidades de liderazgo y organización. Me gusta tomar la iniciativa, 
                            coordinar tareas y asegurarme de que el grupo avance de manera eficiente hacia los objetivos comunes. Considero que 
                            una buena comunicación, la planificación y la motivación del equipo son claves para lograr resultados de calidad, y disfruto asumir 
                            la responsabilidad de guiar y apoyar a los demás cuando es necesario.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h3>Tecnologías</h3>
                        <p>Tengo experiencia en desarrollo de software utilizando diferentes lenguajes y tecnologías, lo que me ha permitido adaptarme a distintos entornos de programación. 
                            He trabajado en proyectos utilizando React para interfaces interactivas, así como Node.js y Express para construir APIs del lado del servidor. Además, 
                            cuento con conocimientos en Python, C y Java, lo que me ha dado una base sólida tanto en programación orientada a objetos como en 
                            lógica de bajo nivel. Esta diversidad de herramientas me permite abordar problemas desde diferentes enfoques y elegir la tecnología más adecuada para cada situación
                        </p>

                        <p>Las tecnologías específicas que utilizo son las siguientes:</p>

                        <div className="d-flex flex-wrap gap-2 my-3">
                            <img src={"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"} alt="React logo"/>
                            <img src={"https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"} alt="Bootstrap logo"/>
                            <img src={"https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react"} alt="Context API logo"/>
                            <img src={"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"} alt="Node.js logo"/>
                            <img src={"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"} alt="Express logo"/>
                            <img src={"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"} alt="CSS logo"/>
                            <img src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"} alt="Javascript logo"/>
                            <img src={"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"} alt="Typescript logo"/>
                            <img src={"https://img.shields.io/badge/Java-b07219?style=for-the-badge&logo=java&logoColor=white"} alt="Java logo"/>
                            <img src={"https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"} alt="Python logo"/>
                            <img src={"https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"} alt="C logo"/>
                            <img src={"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"} alt="HTML logo"/>
                            <img src={"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"} alt="MySQL logo"/>
                            <img src={"https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"} alt="MariaDB logo"/>
                            <img src={"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"} alt="MongoDB logo"/>
                        </div>
                    </section>
                    <section className="mb-4">
                        <h3>Actividades Extracurriculares</h3>
                        <p>Además de mi formación académica, he tenido la oportunidad de involucrarme activamente en diversas actividades extracurriculares que me han permitido ampliar mis habilidades y 
                            conocimientos. He trabajado como asistente en varios cursos, donde he colaborado con profesores y estudiantes para revisar trabajos académicos, facilitar el aprendizaje y asegurar la comprensión de los temas. También, 
                            he sido asistente de automatización de procesos en el Departamento de Orientación y Psicología, lo que me permitió aplicar mis habilidades técnicas para mejorar 
                            procesos y optimizar tareas administrativas mediante herramientas automatizadas. 
                            Estas experiencias reflejan mi compromiso con el aprendizaje más allá de los cursos académicos, pues siempre busco nuevas formas de aplicar mis conocimientos 
                            y contribuir al entorno profesional en el que me desenvuelvo.
                        </p>
                        <p>
                            Las actividades en las que he participado son las siguientes:
                        </p>
                        <ul className="d-flex flex-column gap-2">
                            <li><b>Asistente del curso Base de Datos I.</b> Julio, 2022 - junio, 2024.</li>
                            <li><b>Asistente del curso Análisis de Algoritmos.</b> Julio, 2023 - noviembre, 2023.</li>
                            <li><b>Asistente del curso Administración de Proyectos.</b> Febrero, 2024 - junio, 2024.</li>
                            <li><b>Asistente del curso Investigación de Operaciones.</b> Febrero, 2024 - junio, 2024.</li>
                            <li><b>Asistente de Automatización de Procesos.</b> Julio, 2024 - la actualidad.</li>
                        </ul>
                    </section>
                
                </section>
            </div>
        </div>
    );
}

export default AboutMe;
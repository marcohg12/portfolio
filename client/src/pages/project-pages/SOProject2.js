import React from "react";
import Carousel from "../../components/Carousel";
import SOProject2Photo1 from "../../assets/so-project-2/so-proyecto-2-1.png";
import SOProject2Photo2 from "../../assets/so-project-2/so-proyecto-2-2.png";
import SOProject2Photo3 from "../../assets/so-project-2/so-proyecto-2-3.png";
import SOProject2Photo4 from "../../assets/so-project-2/so-proyecto-2-4.png";

function SOProject2(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Simulador de MMU</h2>
                <p className="fw-lighter">Elaborado en el segundo semestre de 2024.</p>
                <div className="mb-4">
                    <Carousel
                        images={[SOProject2Photo1, SOProject2Photo2, SOProject2Photo3, SOProject2Photo4]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este proyecto fue realizado para el curso de Principios de Sistemas Operativos. Consiste en un simulador de una MMU, y tiene
                    como objetivo comparar el rendimiento de diferentes algoritmos de paginación contra el algoritmo óptimo de paginación. En el
                    menú principal, el usuario puede elegir una semilla para generar un orden aleatorio de procesos (y la cantidad
                    de operaciones por proceso), la cantidad de procesos a simular, el número de operaciones por proceso y el algorimo de paginación 
                    a utilizar. Los algoritmos de paginación a elegir son: FIFO, Second Chance, Random y MRU. El usuario puede generar en el menú
                    una sesión de simulación nueva o cargarla desde un archivo.
                </p>
                <p>
                    Al iniciar la simulación, se va a presentar una pantalla que muestra la comparativa del rendimiento de la simulación
                    utilizando el algoritmo elegido por el usuario y el algoritmo óptimo. Por cada algoritmo, se va a presentar una tabla
                    con información de la MMU, específicamente las páginas que contiene, el proceso al que pertenecen y si están o no en
                    memoria física. Adicionalmente, se presentan estadísticas como la cantidad de procesos ejecutándose, el tiempo de simulación,
                    la cantidad de memoria física usada, la cantidad de memoria virtual usada, tiempo de trashing y cantidad de memoria fragmentada.
                </p>
                <p>
                    Arriba de las tablas se presenta el estado de la memoria para cada algoritmo, donde las páginas de cada proceso se diferencian
                    con un color particular. Una vez que termina la simulación, el usuario puede regresar al menú de inicio.
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de Linux, orientación a objetos y de arquitectura como:
                </p>
                <ul>
                    <li>
                        <p><b>Patrón strategy: </b>Utilicé este patrón para definir el comportamiento de la simulación según el algoritmo que seleccione el usuario.</p>
                    </li>
                    <li>
                        <p><b>Patrón MVC: </b>Utilicé este patrón para definir la arquitectura de la aplicación, separar responsabilidades y mejorar la organización.</p>
                    </li>
                    <li>
                        <p><b>Scripts de bash: </b>Utilicé scripts de bash para automatizar la instalación del ambiente de desarrollo y despliegue local de la aplicación.</p>
                    </li>
                    <li>
                        <p><b>SwingWorker: </b>Es un objeto de Java Swing que permite ejecutar tareas pesadas en segundo plano.</p>
                    </li>
                </ul>
                <h3>Acceso</h3>
                <p>Puede ver el código fuente en GitHub por medio del siguiente enlace: 
                    <a href="https://github.com/marcohg12/SO_Proyecto_02" target="_blank" rel="noopener noreferrer" className="mb-0 ms-2">Enlace al proyecto</a>
                </p>
                <h3>Tecnologías</h3>
                <div className="d-flex flex-wrap gap-2">
                    <img src={"https://img.shields.io/badge/Java-b07219?style=for-the-badge&logo=java&logoColor=white"} alt="Java logo"/>
                    <img src={"https://img.shields.io/badge/Java_Swing-b07219?style=for-the-badge&logo=java&logoColor=white"} alt="Java Swing logo"/>
                    <img src={"https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white"} alt="Bash logo"/>
                </div>

            </div>
        </div>
    );
}

export default SOProject2;
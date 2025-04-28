import React from "react";
import Carousel from "../../components/Carousel";
import SOProject1Photo1 from "../../assets/so-project-1/so-proyecto-1-1.png";
import SOProject1Photo2 from "../../assets/so-project-1/so-proyecto-1-2.png";
import SOProject1Photo3 from "../../assets/so-project-1/so-proyecto-1-3.png";

function SOProject1(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Sistema de Compresión de Archivos</h2>
                <p className="fw-lighter">Elaborado en el segundo semestre de 2024.</p>
                <div className="mb-4">
                    <Carousel
                        images={[SOProject1Photo1, SOProject1Photo2, SOProject1Photo3]}
                    />
                </div>
                <h3>Descripción</h3>
                <p>
                    Este es un proyecto para el curso de Principios de Sistemas Operativos. Es un sistema en terminal 
                    de consola para la compresión (y descompresión) de archivos de texto utilizando el
                    algoritmo de Huffman. El sistema permite al usuario seleccionar una carpeta con archivos de texto 
                    a comprimir, y debe seleccionar una de las tres implementaciones del sistema: compresión serial, compresión 
                    con hilos y compresión con procesos. Al finalizar, el sistema genera una carpeta comprimida con
                    los archivos, e imprime en consola el tiempo que tardó en comprimir los archivos.
                    Para la descompresión, el usuario selecciona la carpeta a descomprimir y la implementación (serial,
                    con hilos o con procesos), y el sistema genera una nueva carpeta con los archivos descomprimidos.
                </p>
                <p>
                    La compresión (o descompresión) serial consiste ir comprimiendo (o descomprimiendo) un archivo a la vez, mientras que la compresión
                    por hilos comprime cada archivo con un hilo independiente del resto; similarmente, la 
                    implementación con procesos utiliza un proceso hijo para comprimir cada archivo. El objetivo
                    del proyecto es visualizar las diferencias en el rendimiento entre implementaciones seriales
                    e implementaciones que aprovechen la aceleración por hilos o procesos.
                </p>
                <p>
                    Para este proyecto profundicé en conceptos de estructuras de datos y bash como:
                </p>
                <ul>
                    <li>
                        <p><b>Estructuras de datos: </b>Hice mis propias implementaciones de estructuras como diccionarios, min-heap, árboles y nodos en C.</p>
                    </li>
                    <li>
                        <p><b>Scripts de bash: </b>Utilicé scripts de bash para automatizar la instalación del ambiente de desarrollo y despliegue local de la aplicación.</p>
                    </li>
                    <li>
                        <p><b>Renombrado incremental: </b>Implementé un mecanismo para nombrar incrementalmente los archivos si ya existe un archivo comprimido con el mismo nombre.</p>
                    </li>
                </ul>
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
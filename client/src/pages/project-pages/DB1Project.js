import React from "react";
import Carousel from "../../components/Carousel";

function DB1Project(){
    return(
        <div className="container">
            <div className="my-4">
                <h2 className="mb-4">Plataforma Universitaria</h2>
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
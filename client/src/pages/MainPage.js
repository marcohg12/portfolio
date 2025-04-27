import React from "react";
import InfoCard from "../components/InfoCard";
import CampusPhoto from "../assets/campus-sj.jpg";
import DSProjectPhoto from "../assets/ds-project/ds-proyecto-1.png";

function MainPage(){
    return(
        <div className="container">
            <div className="py-4">
                <div className="mb-5">
                    <InfoCard
                        title={"Sobre mí"} 
                        imgSrc={CampusPhoto}
                        imgPosition={"left"}
                        toLink={"/about-me"}
                        text={`Mi nombre es Marco Herrera González, soy un estudiante de último semestre
                            de la carrera de Ingeniería en Computación del Instituto Tecnológico de Costa Rica.
                            Soy un gran apasionado por el desarrollo web, creación de APIs y bases de datos. Me especializo
                            en tecnologías como React, Node.js, Javascript, Typescript, Express, MySQL y MongoDB.`}
                    />
                </div>
                <div className="mb-5">
                    <InfoCard 
                        title={"Proyectos"} 
                        toLink={"/projects"}
                        imgSrc={DSProjectPhoto}
                        imgPosition={"right"}
                        text={`A lo largo de mi carrera he desarrollado diversos proyectos académicos aplicando múltiples tecnologías y lenguajes de programación. Entre ellos, destacan 
                            aplicaciones web completas utilizando herramientas modernas como React para el frontend y Node.js con Express en el backend. También he trabajado en el desarrollo 
                            de simuladores de componentes del sistema operativo, como una unidad de gestión de memoria (MMU), utilizando Java. Además, 
                            he implementado compresores de archivos en lenguaje C, abordando la manipulación de bits y estructuras de datos eficientes`}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
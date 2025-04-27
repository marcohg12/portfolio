import React from "react";
import InfoCard from "../components/InfoCard";
import CampusPhoto from "../assets/campus-sj.jpg";

function MainPage(){
    return(
        <div className="container">
            <div className="my-4">
                <div className="mb-4">
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
                <div className="mb-4">
                    <InfoCard 
                        title={"Proyectos"} 
                        toLink={"/projects"}
                        text={`A lo largo de mi carrera he desarrollado diversos proyectos académicos en múltiples tecnologías. He desarrollado
                            desde páginas de comercio en línea con herramientas como React, Node.js y Express; simuladores de memorias MMU
                            en Java; y hasta compresores de archivos en C.`}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
import React from "react";
import InfoCard from "../components/InfoCard";
import CSProjectPhoto from "../assets/cs-project/cs-proyecto-5.png";

function Projects(){
    return(
        <div className="container">
            <div className="my-4">
                <h2 className="mb-4">Proyectos</h2>
                <div className="mb-4">
                    <InfoCard
                        title={"Punto y Contrapunto"}
                        imgSrc={CSProjectPhoto}
                        imgPosition={"left"}
                        toLink={"cs-project"}
                        text={`Es un prototipo de red social basado en la red social Mastodon. La aplicación permite a los usuarios 
                            iniciar debates, los cuales deben respaldar con evidencias verídicas. Los demás usuarios pueden responder
                            al debate, aportando nuevas evidencias; además de que pueden dar me gusta, compartir o guardar el debate.`}
                    />
                </div>
                <div className="mb-4"></div>
            </div>
        </div>
    );
}

export default Projects;
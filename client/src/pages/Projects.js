import React from "react";
import InfoCard from "../components/InfoCard";
import CSProjectPhoto from "../assets/cs-project/cs-proyecto-5.png";
import SOProject2Photo from "../assets/so-project-2/so-proyecto-2-3.png";
import DSProjectPhoto from "../assets/ds-project/ds-proyecto-1.png";
import DB2ProjectPhoto from "../assets/bd2-project/bd2-proyecto-1.png";
import DB1ProjectPhoto from "../assets/bd1-project/bd1-proyecto-1.png";
import APPProjectPhoto from "../assets/ap-project/ap-proyecto-1.jpg";
import SOProject1Photo from "../assets/so-project-1/so-proyecto-1-1.png";

function Projects(){
    return(
        <div className="container">
            <div className="py-4">
                <h2 className="mb-4">Proyectos</h2>
                <div className="mb-5">
                    <InfoCard
                        title={"Punto y Contrapunto"}
                        imgSrc={CSProjectPhoto}
                        imgPosition={"left"}
                        toLink={"cs-project"}
                        text={`Es un prototipo de red social web basado en la red social Mastodon. La aplicación permite a los usuarios 
                            iniciar debates, los cuales deben respaldar con evidencias verídicas. Los demás usuarios pueden responder
                            al debate, aportando nuevas evidencias; además de que pueden dar me gusta, compartir o guardar el debate.`}
                    />
                </div>
                <div className="mb-5">
                    <InfoCard
                        title={"Simulador de MMU"}
                        imgSrc={SOProject2Photo}
                        imgPosition={"right"}
                        toLink={"so-project-2"}
                        text={`Es un simulador de algoritmos de paginación para una MMU. La aplicación permite a los usuarios
                            generar una sesión de trabajo para memoria, en la que especifican parámetros como la cantidad de
                            procesos, cantidad de instrucciones a generar y algoritmo a utilizar. La aplicación permite visualizar 
                            la diferencia de rendimiento entre los algoritmos FIFO, MRU, Second Chance y Random contra el algoritmo óptimo de paginación.`}
                        />
                </div>
                <div className="mb-5">
                    <InfoCard
                        title={"Sistema Duende"}
                        imgSrc={DSProjectPhoto}
                        imgPosition={"left"}
                        toLink={"ds-project"}
                        text={`Es un sistema web para e-commerce de productos de maquillaje y cuidado de la piel. El sistema permite a los usuarios
                            ver los productos, agregarlos a un carrito y simular una compra. La administradora de la página, una maquillista
                            conocida como Duende, puede acceder en la aplicación a funciones para administrar y ver los pedidos, además de manejar una agenda
                            para coordinar entregas de pedidos y sesiones de maquillaje.`}
                    />
                </div>
                <div className="mb-5">
                    <InfoCard
                        title={"Sistema de Reserva para Hoteles"}
                        imgSrc={APPProjectPhoto}
                        imgPosition={"right"}
                        toLink={"ap-project"}
                        text={`Es un sistema web para buscar y realizar reservas en hoteles. El sistema permite a los usuarios ver los hoteles registrados,
                            ver la información de los hoteles y realizar reservas en los mismos. Los administradores de los hoteles pueden también
                            realizar reservas, pueden registrar ofertas y agregar condiciones a las mismas, pueden manejar las reservas registradas, y pueden
                            consultar estadísticas asociadas a las reservas y estadías.`}
                    />
                </div>
                <div className="mb-5">
                    <InfoCard
                        title={"Sistema de Blogging"}
                        imgSrc={DB2ProjectPhoto}
                        imgPosition={"left"}
                        toLink={"db2-project"}
                        text={`Es un sistema web para blogging. Los usuarios pueden visualizar los blogs publicados por otros usuarios y los
                            pueden filtrar por palabras, cantidad de me gusta o por fecha de publicación. Dentro de los blogs, los usuarios
                            pueden leer el contenido, dar me gusta, guardar el blog, y dejar comentarios. Además, los usuarios pueden consultar los 
                            perfiles de otros usuarios, ver sus blogs y suscribirse a su perfil.`}
                    />
                </div>
                <div className="mb-5">
                    <InfoCard
                        title={"Sistema de Compresión de Archivos"}
                        imgSrc={SOProject1Photo}
                        imgPosition={"right"}
                        toLink={"so-project-1"}
                        text={`Es un sistema para comprimir archivos de texto desde la terminal de comandos de Linux. El sistema
                            utiliza el algoritmo de Huffman para la compresión; y permite al usuario seleccionar una carpeta para comprimir y 
                            la implementación de compresión a utilizar.
                            El usuario puede seleccionar entre la implementación serial, con hilos y con procesos. Al finalizar
                            se muestra en consola el tiempo que tardó la compresión.`}
                    />
                </div>
                <div className="mb-5">
                <InfoCard
                        title={"Plataforma Universitaria"}
                        imgSrc={DB1ProjectPhoto}
                        imgPosition={"left"}
                        toLink={"db1-project"}
                        text={`Es un sistema web que actúa como plataforma para una universidad. El sistema permite
                            registrar cursos y agregar profesores y estudiantes a los mismos. Los profesores pueden
                            registrar trabajos en el curso y pueden definir los grupos de estudiantes para las asignaciones.
                            Los estudiantes pueden visualizar sus cursos y ver sus calificaciones.`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
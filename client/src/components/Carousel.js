import React from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Carousel({images}){
    return(
    
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="false">

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Imagen ${index + 1}`}
                    ></button>
                ))}
            </div>
            
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                        <Zoom>
                            <img src={image} className="d-block w-100" alt={`Imagen ${index + 1}`} />
                        </Zoom>
                    </div>
                ))}
            </div>
    
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>
    
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default Carousel;
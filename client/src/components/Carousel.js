import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';

function Carousel({ images }) {
    
    return (
        <div id="carousel" className="carousel slide carousel-fade">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className="d-block w-100"
                            style={{
                                height: "450px",
                                objectFit: "contain",
                                display: "block",
                                margin: "auto",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;

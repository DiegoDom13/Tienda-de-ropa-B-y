import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carrusel() {
    const settings = {
        slidesToShow: 1,
        infinite: true,
        lazyLoad: "ondemand",
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        speed: 800,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 700,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 0,
                settings: { slidesToShow: 1 },
            },
        ],
    };


    return (
        <>
            <Slider {...settings} className="slick-carousel">
                {/* Cada imagen debe estar dentro de un elemento individual */}
                <a className="item-slide" href="#">
                    <img src="./img-carousel/calzado.webp" alt="Imagen 1 del carrusel"
                        style={{ marginTop: "-50px" }}
                    />
                    <p className='text-carousel'>
                        La  mejor ropa de verano 2025 esta en liquidación, aprovecha ahora!
                    </p>
                </a>
                <a className="item-slide" href="#">
                    <img src="./img-carousel/modeloOtoño1.webp" alt="Imagen 2 del carrusel" />
                    <p className='text-carousel'>
                        ¡¿Listos para el otoño?!
                    </p>
                </a>
                <a className="item-slide" href="#">
                    <img src="./img-carousel/smartphones.jpg" alt="Imagen 3 del carrusel" />
                    <p className='text-carousel'>
                        La elegancia no es un lujo, es un estilo de vida...
                    </p>
                </a>
                <a className="item-slide" href="#">
                    <img src="./img-carousel/laptops.jpg" alt="Imagen 4 del carrusel"
                        style={{ marginTop: "-450px" }}
                    />
                    <p className='text-carousel'>
                        Todo en un mismo lugar!
                    </p>
                </a>
            </Slider>
        </>
    );
}

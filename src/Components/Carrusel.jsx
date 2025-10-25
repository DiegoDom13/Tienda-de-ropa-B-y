import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Carrusel() {
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        lazyLoad: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <>
            <OwlCarousel className="owl-carousel owl-theme" {...options}>
                {/* Cada imagen debe estar dentro de un elemento individual */}
                <a href="#">
                    <img src="./img-carousel/calzado.webp" alt="Imagen 1 del carrusel"
                        style={{ marginTop: "-250px" }}
                    />
                    <p className='text-carousel'>
                        La  mejor ropa de verano 2025 esta en liquidación, aprovecha ahora!
                    </p>
                </a>
                <a href="#">
                    <img src="./img-carousel/modeloOtoño1.webp" alt="Imagen 2 del carrusel" />
                    <p className='text-carousel'>
                        ¡¿Listos para el otoño?!
                    </p>
                </a>
                <a href="#">
                    <img src="./img-carousel/smartphones.jpg" alt="Imagen 3 del carrusel" />
                    <p className='text-carousel'>
                        La elegancia no es un lujo, es un estilo de vida...
                    </p>
                </a>
                <a href="#">
                    <img src="./img-carousel/laptops.jpg" alt="Imagen 4 del carrusel"
                        style={{ marginTop: "-450px" }}
                    />
                    <p className='text-carousel'>
                        Todo en un mismo lugar!
                    </p>
                </a>
            </OwlCarousel>
        </>
    );
}

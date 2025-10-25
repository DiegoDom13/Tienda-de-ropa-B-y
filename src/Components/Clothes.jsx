import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Clothes({ addToCart, prenda }) {
    const { title, price, description, images } = prenda;
    console.log("objeto de prende", prenda);

    return (
        <>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 pb-5 elementos">
                <img className="img-fluid" src={images[2]} alt={title} />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-10 col-sm-8 pb-5">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{title}</h3>
                <p className='description'>{description}</p>
                <p className="fw-bold text-price fs-3">${price}</p>
                <Button variant="primary" onClick={() => addToCart(prenda)}>
                    Agregar al Carrito
                </Button>
            </div>

        </>
    );
}


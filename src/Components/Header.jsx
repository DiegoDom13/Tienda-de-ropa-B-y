import { Smartphone } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react';


export default function Header({ cart, removeFromCart, incremCart, decresCart, clearCart, setCategory }) {

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => {
        return parseFloat(
            cart.reduce((total, prenda) => total + (prenda.price * prenda.quantity), 0).toFixed(2)
        );
    }, [cart]);

    return (
        <>
            <header className="py-10 header">
                <div className="container-xl nav-header">
                    <div className="row title-logo justify-content-md-between">

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <a href="index.html" className="logo">
                                <img className="img-fluid" src="/logo.png" alt="imagen logo" width="35px" />
                            </a>
                            <h1 className="d-flex justify-content-center">B&Y</h1>
                        </div>
                        <nav className="nav col-xl-10 col-lg-10 col-md-10 col-sm-12 justify-content-center">
                            <ul className="list-unstyled d-flex flex-row">
                                <li className="me-5 col-xl-2.4 col-lg-2.4 col-md-2.4 col-sm-2.4"
                                    onClick={() => setCategory("all")}
                                >All in one</li>
                                <li className="me-5 col-xl-2.4 col-lg-2.4 col-md-2.4 col-sm-2.4"
                                    onClick={() => setCategory("smartphones")}
                                >Smartphones</li>
                                <li className="me-5 col-xl-2.4 col-lg-2.4 col-md-2.4 col-sm-2.4"
                                    onClick={() => setCategory("mens")}
                                >Men´s</li>
                                <li className="me-5 col-xl-2.4 col-lg-2.4 col-md-2.4 col-sm-2.4"
                                    onClick={() => setCategory("womens")}
                                >Women´s</li>
                                <li className="me-5 col-xl-2.4 col-lg-2.4 col-md-2.4 col-sm-2.4"
                                    onClick={() => setCategory("laptops")}
                                >Laptops</li>
                                <li className="me-5 col-xl-2.4 col-lg-2.4 col-md-2.4 col-sm-2.4"
                                    onClick={() => setCategory("fragrances")}
                                >Fragancias</li>
                            </ul>
                        </nav>
                        <div className='col-xl-1 col-lg-2 col-md-2 col-sm-1 carrito d-flex align-items-start justify-content-end'>
                            <img className='img-fluid' src='/img/carrito.png' alt='carrito de compras' />
                            <div id='carrito' className='bg-white p-3'>

                                {isEmpty ? (
                                    <p className='text-center'>El Carrito Esta Vacio</p>
                                ) : (
                                    <>
                                        <table className='w-100 tabla'>
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody className='tbody'>
                                                {cart.map((prenda) => (
                                                    <tr key={prenda.id}>
                                                        <td>
                                                            <img className='img-fluid'
                                                                src={prenda.thumbnail}
                                                                alt='Imagen de prenda' />
                                                        </td>
                                                        <td>{prenda.title}</td>
                                                        <td className='fw-bold'>
                                                            ${prenda.price}
                                                        </td>
                                                        <td className='align-text-center'>
                                                            <button
                                                                type='button'
                                                                className='btn btn-dark'
                                                                onClick={() => decresCart(prenda.id)}
                                                            >-</button>
                                                            {prenda.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => incremCart(prenda.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(prenda.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <p className="d-flex flex-column text-center w-95">Total a pagar : <span className="fw-bold text-center w-95"> ${cartTotal}</span></p>
                                            <button className='btn btn-dark w-95 mt-3 p-2' onClick={clearCart}>Vaciar carrito</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </header >
        </>
    );
}


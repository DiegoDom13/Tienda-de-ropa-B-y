import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { RiVisaFill, RiNotification3Fill } from "react-icons/ri";
import Alert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function Footer() {

    //estado para manejar correo registrado por user
    const [email, setEmail] = useState("");
    //estado para manejar mensaje de alert
    const [mensaje, setMensaje] = useState("");
    // estado para modal (guia de tallas, politicas de devolucion y cambios,)
    const [modal, setModal] = useState(null);

    const handleOpen = (modal) => setModal(modal);
    const handleClose = () => setModal(null);

    //Funcion que se llama cuando el formulario se envia
    const handleSubmit = (e) => {
        e.preventDefault();// prevenir recargar de pagina al enviar el formulario
        if (email) {
            console.log("formulario enviado con email: ", email);
            // se podria hacer solicitud al servidor para enviar el email
            setEmail(""); // Limpiar el campo del formulario después de enviarlo
        }
        setMensaje("Correo registrado exitosamente.")
        setTimeout(() => {
            setMensaje(""); // Borra el mensaje
        }, 3000);
    };



    return (
        <>
            <footer className="container-xl footer">
                <div className="row">
                    <div className="col-xl-4 col-md-4 col-sm-4 pt-4 pb-4 d-flex flex-column support">
                        <h2 className="pb-2">Soporte</h2>
                        <a href="https://www.instagram.com/bny_tiendaderopa?igsh=ZHdzdmdyNGszZWNo" className="support_item pt-2">Contactanos</a>
                        <a href="#" className="support_item pt-2"
                            onClick={(e) => { e.preventDefault(); handleOpen("guia"); }}
                        >Guia de tallas</a>
                        <a href="#" className="support_item pt-2"
                            onClick={(e) => { e.preventDefault(); handleOpen("entregas"); }}
                        >Entregas</a>
                        <a href="#" className="support_item pt-2"
                            onClick={(e) => { e.preventDefault(); handleOpen("politicas"); }}
                        >Cambios y devoluciones</a>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-4 pt-4 pb-4 d-flex flex-column metod-pay">
                        <h2 className="pb-1">Pagos</h2>
                        <p className="pt-2">Paga como quieras <FaIcons.FaCcPaypal className="me-2 paypal-icon" /><FaIcons.FaGooglePay className="me-2 paypal-icon-G" /><RiVisaFill className="me-2 paypal-icon-V" /><FaIcons.FaCcMastercard className="paypal-icon-M" /></p>
                        <a href="https://maps.app.goo.gl/NP2Bo3rZWgYo1nzo7" target="blanck" className="pay-online">Tambien puedes visitarnos y pasar por tu pedido pagando en fisico en esta direccion: C. Juan Aldama 27, Colon, 31000 Chihuahua, Chih. Estamos en el pasillo 5B. Ubicacion aqui! <FaIcons.FaMapPin className="mt-2 icon-location" /></a>
                    </div>
                    <div className="col-xl-4 col-md-4 col-sm-4 pt-4 pb-4 d-flex flex-column form-cont">
                        {/* Formulario de suscripción */}
                        <h2 className="pb-2 form">¡Mantente al dia! <RiNotification3Fill className="notificacion" /></h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Introduce tu correo aqui!"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} //actualizar el estado del email.
                                required
                            />
                            <Button type="submit" className="mt-2 pt-2" variant="contained" endIcon={<SendIcon />}>Suscribete</Button>
                        </form>
                        {mensaje && (
                            <Alert severity="success" className="mt-2">
                                {mensaje}
                            </Alert>
                        )};
                    </div>
                </div>
            </footer>
            <Modal
                open={modal === "guia"}
                onClose={handleClose}
                aria-labelledby="Guia de tallas."
                sx={{ zIndex: 2000 }} // 👈 fuerza un z-index mayor
            >
                <div style={{
                    position: "absolute",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: "white",
                    padding: '3%',
                    borderRadius: '2%',
                    maxWidth: '600px',
                    outline: 'none'
                }}>
                    <h2 id="modal-title">Guia de tallas</h2>
                    <img
                        src="../../public/img/guia de tallas.jpg"
                        alt="guia de tallas"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                        style={{ marginTop: '10px' }}
                        sx={{ mt: 2 }}
                    >Cerrar</Button>
                </div>
            </Modal>
            <Modal
                open={modal === "politicas"}
                onClose={handleClose}
                aria-labelledby="Politica de cambios y devoluciones."
            >
                <div style={{
                    position: "absolute",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: "white",
                    padding: '3%',
                    borderRadius: '2%',
                    maxWidth: 'auto',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    outline: 'none',
                    scrollbarWidth: "none"
                }}
                >
                    <h2 id="modal-title">Cambios y devoluciones</h2>
                    <img
                        src="../../public/img/politicas.png"
                        alt="guia de tallas"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                        style={{ marginTop: '10px', }}
                        sx={{ mt: 2 }}
                    >Cerrar</Button>
                </div>
            </Modal>
            <Modal
                open={modal === "entregas"}
                onClose={handleClose}
                aria-labelledby="Entregas a domicilio."
            >
                <div style={{
                    position: "absolute",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: "white",
                    padding: '3%',
                    borderRadius: '2%',
                    maxWidth: '600px',
                    outline: 'none'
                }}>
                    <h2 id="modal-title" style={{ paddingBottom: '2%' }}>Entregas a domicilio</h2>
                    <p style={{ textAlign: "center" }}>
                        Realizamos entregas a domicilio con un costo extra de $50.00.MXN a cualquier lugar en el interior de la capital de Chihuahua, se calcula segun municipio y o delegacion de destino.
                    </p>
                    <div style={{ textAlign: "center" }}>
                        <FaBox
                            size={40}
                            color="#053a32"
                            style={{ position: "relative", alignItems: "center", justifyItems: "center" }}
                        />
                    </div>
                    <p style={{ textAlign: "center" }}>
                        Se excenta el pago de envio al adquirir arriba de $2000.00.MXN en productos.
                    </p>
                </div>
            </Modal>
        </>
    )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './header.css';
import './app.css';
import './clothes.css';
import './carrusel.css';
import './footer.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

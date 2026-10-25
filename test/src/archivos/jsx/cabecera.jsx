import logo from "../../assets/logo.png";
import "../css/cabecera.css";
import { Link } from "react-router-dom";
export default function Cabecera() {

  return (
    <header className="ng-header">
      <div className="ng-header-interior">

        {/* MARCA, INFORMACIÓN Y ACCESOS */}
        <div className="ng-header-superior">
          <a className="ng-marca" href="#inicio">
            <img
              className="ng-logo"
              src={logo}
              alt=""
              width="58"
              height="58"
            />

            <span className="ng-marca-texto">
              <strong>NUTRIGÓ</strong>
              <small>Santa Fe Centro</small>
            </span>
          </a>

          <div className="ng-datos">
            <a
              className="ng-dato ng-direccion"
              href="https://www.google.com/maps/search/?api=1&query=Hipolito+Irigoyen+2377+Santa+Fe+Argentina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ng-dato-etiqueta">
                Encontranos
              </span>

              <span className="ng-dato-valor">
                Hipólito Irigoyen 2377
              </span>

              <span className="ng-dato-detalle">
                Santa Fe · Ver ubicación ↗
              </span>
            </a>

            <div className="ng-dato">
              <span className="ng-dato-etiqueta">Horarios de atención</span>
              <dl className="ng-horarios">
                <div><dt>Mañana</dt><dd>9:00 <span>—</span> 13:00</dd></div>
                <div><dt>Tarde</dt><dd>16:30 <span>—</span> 20:30</dd></div>
              </dl>
            </div>

            <a
              className="ng-dato"
              href="https://wa.me/543425147213"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ng-dato-etiqueta">
                Escribinos por WhatsApp
              </span>

              <span className="ng-dato-valor">
                342 514 7213
              </span>

              <span className="ng-dato-detalle">
                Abrir conversación ↗
              </span>
            </a>
          </div>

          <div className="ng-utilidades">
            <a className="ng-carrito" href="#pedido">
              <span className="ng-bolsa" aria-hidden="true" />
              <span>Carrito</span>
            </a>

            <Link
              className="ng-ingreso"
              to="/ingresar"
              aria-label="Ingresá a la administración"
            >
              Ingresá
            </Link>
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <nav
          className="ng-nav"
          aria-label="Navegación principal"
        >
          <div className="ng-nav-enlaces">
            <a href="#novedades">Novedades</a>
            <a href="#promociones">Promociones</a>
            <a href="#catalogo">Productos</a>
            <a href="#local">El local</a>
          </div>

          <a
            className="ng-whatsapp"
            href="https://wa.me/543425147213"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>¿Buscás algo en particular?</span>
            <strong>Escribinos ↗</strong>
          </a>
        </nav>

      </div>
    </header>
  );
}
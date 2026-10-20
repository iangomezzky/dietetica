import "../css/footer.css";

export default function Footer() {




  return (
    <footer className="ng-footer" id="contacto">
      <div className="ng-footer-interior">

        <div className="ng-footer-encabezado">
          <span>Tu dietética en Santa Fe.</span>
          <a href="#inicio">Volver al inicio ↑</a>
        </div>

        <div className="ng-footer-principal">
          <div className="ng-footer-identidad">
            <a className="ng-footer-marca" href="#inicio">
              nutrigó<span>.</span>
            </a>

            <p>
              Frutos secos, semillas, granolas.
              <br />
              Y eso que venías buscando.
            </p>
          </div>

          <nav className="ng-footer-menu" aria-label="Explorar">
            <span className="ng-footer-titulo">La tienda</span>
            <a href="#catalogo">Productos <span>↗</span></a>
            <a href="#promociones">Promociones <span>↗</span></a>
            <a href="#sucursales">El local <span>↗</span></a>
          </nav>

          <div className="ng-footer-charla">
            <span className="ng-footer-titulo">¿Te interesa una franquicia?</span>

            <a
              className="ng-footer-whatsapp"
              href="https://wa.me/543425922339"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos.
              <span aria-hidden="true">↗</span>
            </a>

            <p>
              Consultá disponibilidad y encontrá
              lo que necesitás por WhatsApp.
            </p>
          </div>
        </div>

        <div className="ng-footer-local" id="sucursales">

          <a
            className="ng-footer-direccion"
            href="https://www.google.com/maps/search/?api=1&query=Hipolito+Irigoyen+2377+Santa+Fe+Argentina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ng-footer-titulo">Pasá por el local</span>

            <address>
              Hipólito Irigoyen 2377
              <small>Santa Fe Centro · Cómo llegar ↗</small>
            </address>
          </a>

          <div>
            <span className="ng-footer-titulo">Nuestros horarios</span>
            <p className="ng-footer-horas">
              9:00 — 13:00 <span>/</span> 16:30 — 20:30
            </p>
          </div>

          <a className="ng-footer-telefono" href="tel:+543425922339">
            <span className="ng-footer-titulo">Al otro lado del teléfono</span>
            <span>342 592 2339 ↗</span>
          </a>

        </div>

        <div className="ng-footer-base">
          <span>© 2026 Nutrigo · Santa Fe Centro</span>

          <a href="mailto:nutrigofranquicias.santafe1@gmail.com">
            Escribinos por correo ↗
          </a>
        </div>

      </div>
    </footer>
  );
}
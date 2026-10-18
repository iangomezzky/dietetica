import "../css/App.css";

import Cabecera from "./cabecera.jsx";
import Footer from "./footer.jsx";
function App() {
  return (
    <div id="inicio">

      {/* CINTA SUPERIOR */}
      <div className="div-rotativo">
        <div className="cinta">
          <p className="texto-rotativo">
            Descubrí nuestros productos · Nutrigo Santa Fe
          </p>

          <p className="texto-rotativo" aria-hidden="true">
            Descubrí nuestros productos · Nutrigo Santa Fe
          </p>
        </div>
      </div>

      {/* NUEVA CABECERA */}
      <Cabecera />

      {/* NOTICIAS */}
      <section className="carrusel" id="novedades" aria-labelledby="titulo-novedades">
        <div className="novedades-cabecera"><span className="tienda-ceja">EL TABLÓN</span><h1 id="titulo-novedades">Novedades</h1><p>Un vistazo a lo que podés encontrar en Nutrigo.</p></div>
        <div className="carrusel-contenedor">
          <div className="carrusel-card">Frutos secos · Mixes para tu despensa</div>
          <div className="carrusel-card">Semillas · Ingredientes para sumar a tus comidas</div>
          <div className="carrusel-card">Granolas · Opciones para el desayuno</div>
          <div className="carrusel-card">Cereales · Descubrí el catálogo</div>
          <div className="carrusel-card">¿Buscás algo? Consultanos por WhatsApp</div>
        </div>

        <div className="carrusel-dots">
         
        </div>
      </section>

      {/* PROMOCIÓN */}
      <section className="tienda-promo" id="promociones">
        <div>
          <span className="tienda-ceja">
            PROMOCIÓN DE EJEMPLO
          </span>

          <h2>Un mix para cada momento</h2>

          <p>
            Frutos secos, granolas y semillas
            para completar tu despensa.
          </p>
        </div>

        <span className="tienda-promo-icono" aria-hidden="true">
          🥜 🌾
        </span>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo">
        <div className="tienda-cabecera">
          <div>
            <span className="tienda-ceja">
              ELEGÍ TUS FAVORITOS
            </span>

            <h2>Nuestros productos</h2>
          </div>

          <label className="tienda-buscador">
            <span>Buscar productos</span>

            <input
              type="search"
              placeholder="Granola, semillas, frutos secos..."
            />
          </label>
        </div>

        {/* PRODUCTOS */}
        <div className="tienda-productos">

          <article className="tienda-tarjeta">
            <div className="tienda-imagen">
              <span className="tienda-etiqueta">
                Más elegido
              </span>
              <span>🥜</span>
            </div>

            <div className="tienda-tarjeta-info">
              <h3>Mix de frutos secos</h3>
              <p>Precio por 1 kg</p>
              <strong>$20.000</strong>
              <button type="button">Agregar al carrito</button>
            </div>
          </article>

          <article className="tienda-tarjeta">
            <div className="tienda-imagen">
              <span className="tienda-etiqueta">
                Novedad
              </span>
              <span>🌾</span>
            </div>

            <div className="tienda-tarjeta-info">
              <h3>Quinoa pop</h3>
              <p>Precio por 1 kg</p>
              <strong>$7.000</strong>
              <button type="button">Agregar al carrito</button>
            </div>
          </article>

          <article className="tienda-tarjeta">
            <div className="tienda-imagen">
              <span className="tienda-etiqueta">
                Oferta
              </span>
              <span>🥣</span>
            </div>

            <div className="tienda-tarjeta-info">
              <h3>Granola artesanal</h3>
              <p>Precio por 500 g</p>
              <strong>$4.500</strong>
              <button type="button">Agregar al carrito</button>
            </div>
          </article>

          <article className="tienda-tarjeta">
            <div className="tienda-imagen">
              <span className="tienda-etiqueta">
                Para llevar
              </span>
              <span>🍫</span>
            </div>

            <div className="tienda-tarjeta-info">
              <h3>Barrita de cereal</h3>
              <p>Precio por unidad</p>
              <strong>$1.200</strong>
              <button type="button">Agregar al carrito</button>
            </div>
          </article>

          <article className="tienda-tarjeta">
            <div className="tienda-imagen">
              <span className="tienda-etiqueta">
                Favorito
              </span>
              <span>🫙</span>
            </div>

            <div className="tienda-tarjeta-info">
              <h3>Pasta de maní</h3>
              <p>Precio por 350 g</p>
              <strong>$5.200</strong>
              <button type="button">Agregar al carrito</button>
            </div>
          </article>

          <article className="tienda-tarjeta">
            <div className="tienda-imagen">
              <span className="tienda-etiqueta">
                Sin stock
              </span>
              <span>🌰</span>
            </div>

            <div className="tienda-tarjeta-info">
              <h3>Harina de almendras</h3>
              <p>Precio por 500 g</p>
              <strong>$8.500</strong>
              <button type="button" disabled>
                Sin stock
              </button>
            </div>
          </article>

        </div>

        {/* CARRITO VISUAL */}
        <aside className="tienda-resumen" id="pedido">
          <span>
            🛒 Tu pedido: 0 unidades · <strong>$0</strong>
          </span>

          <button type="button" disabled>
            Vaciar carrito
          </button>
        </aside>
      </section>

      {/* BENEFICIOS */}
      <section className="tienda-beneficios">
        <div>
          <span>📍</span>
          <h3>Conocé el local</h3>
          <p>Encontranos en Hipólito Irigoyen 2377.</p>
        </div>

        <div>
          <span>🛍️</span>
          <h3>Armá tu pedido</h3>
          <p>Sumá tus productos favoritos.</p>
        </div>

        <div>
          <span>💬</span>
          <h3>Estamos para ayudarte</h3>
          <p>Consultanos por productos y disponibilidad.</p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
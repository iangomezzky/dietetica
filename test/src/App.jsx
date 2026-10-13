import './App.css'

function App() {
  return (
    <div id="inicio">

      {/* =========================
          CINTA SUPERIOR
      ========================== */}

      <div className="div-rotativo">
        <div className="cinta">
          <p className="texto-rotativo">
            Bienvenido a React
          </p>

          <p className="texto-rotativo">
            Bienvenido a React
          </p>
        </div>
      </div>


      {/* =========================
          BLOQUES PRINCIPALES
      ========================== */}

      <div className="div-bloque-padre">

        <div className="div-bloque-1">
          <h2 className="titulo-bloque">
            Bloque 1
          </h2>

          <p className="parrafo-bloque">
            Este es el contenido del bloque 1.
          </p>
        </div>


        <div className="columna-central">

          <div className="div-bloque-2">
            <h2 className="titulo-bloque">
              Bloque 2
            </h2>

            <p className="parrafo-bloque">
              Este es el contenido del bloque 2.
            </p>
          </div>


          <div className="div-bloque-3">
            <h2 className="titulo-bloque">
              Bloque 3
            </h2>

            <p className="parrafo-bloque">
              Este es el contenido del bloque 3.
            </p>
          </div>

        </div>


        <div className="div-bloque-4">
          <h2 className="titulo-bloque">
            Bloque 4
          </h2>

          <p className="parrafo-bloque">
            Este es el contenido del bloque 4.
          </p>
        </div>

      </div>


      {/* =========================
          NOTICIAS
      ========================== */}

      <section className="carrusel">

        <div className="carrusel-contenedor">

          <div className="carrusel-card">
            Noticia 1
          </div>

          <div className="carrusel-card">
            Noticia 2
          </div>

          <div className="carrusel-card">
            Noticia 3
          </div>

          <div className="carrusel-card">
            Noticia 4
          </div>

          <div className="carrusel-card">
            Noticia 5
          </div>

        </div>

        <div className="carrusel-dots">
          ● ● ● ● ●
        </div>

      </section>

      {/* =========================
          PRESENTACIÓN
      ========================== */}

      < section className="tienda-presentacion" >


        <h1>
          Pequeñas elecciones.
          <br />
          Buenos hábitos.
        </h1>

        <p>
          Encontrá ingredientes, sabores y favoritos
          para todos los días.
        </p>

        <a
          href="#catalogo"
          className="tienda-enlace"
        >
          Explorar productos ↓
        </a>

      </section >


      {/* =========================
          PROMOCIÓN
      ========================== */}

      < section
        className="tienda-promo"
        id="promociones"
      >

        <div>

          <span className="tienda-ceja">
            PROMOCIÓN DE EJEMPLO
          </span>

          <h2>
            Un mix para cada momento
          </h2>

          <p>
            Frutos secos, granolas y semillas
            para completar tu despensa.
          </p>

        </div>


        <span
          className="tienda-promo-icono"
          aria-hidden="true"
        >
          🥜 🌾
        </span>

      </section >


      {/* =========================
          CATÁLOGO
      ========================== */}

      < section id="catalogo" >

        <div className="tienda-cabecera">

          <div>

            <span className="tienda-ceja">
              ELEGÍ TUS FAVORITOS
            </span>

            <h2>
              Nuestros productos
            </h2>

          </div>


          {/* BUSCADOR */}

          <label className="tienda-buscador">

            <span>
              Buscar productos
            </span>

            <input
              type="search"
              placeholder="Granola, semillas, frutos secos..."
            />

          </label>

        </div>


        {/* =========================
            PRODUCTOS
        ========================== */}

        <div className="tienda-productos">


          {/* PRODUCTO 1 */}

          <article className="tienda-tarjeta">

            <div className="tienda-imagen">

              <span className="tienda-etiqueta">
                Más elegido
              </span>

              <span>
                🥜
              </span>

            </div>


            <div className="tienda-tarjeta-info">

              <h3>
                Mix de frutos secos
              </h3>

              <p>
                Precio por 1 kg
              </p>

              <strong>
                $20.000
              </strong>

              <button>
                Agregar al carrito
              </button>

            </div>

          </article>


          {/* PRODUCTO 2 */}

          <article className="tienda-tarjeta">

            <div className="tienda-imagen">

              <span className="tienda-etiqueta">
                Novedad
              </span>

              <span>
                🌾
              </span>

            </div>


            <div className="tienda-tarjeta-info">

              <h3>
                Quinoa pop
              </h3>

              <p>
                Precio por 1 kg
              </p>

              <strong>
                $7.000
              </strong>

              <button>
                Agregar al carrito
              </button>

            </div>

          </article>


          {/* PRODUCTO 3 */}

          <article className="tienda-tarjeta">

            <div className="tienda-imagen">

              <span className="tienda-etiqueta">
                Oferta
              </span>

              <span>
                🥣
              </span>

            </div>


            <div className="tienda-tarjeta-info">

              <h3>
                Granola artesanal
              </h3>

              <p>
                Precio por 500 g
              </p>

              <strong>
                $4.500
              </strong>

              <button>
                Agregar al carrito
              </button>

            </div>

          </article>


          {/* PRODUCTO 4 */}

          <article className="tienda-tarjeta">

            <div className="tienda-imagen">

              <span className="tienda-etiqueta">
                Para llevar
              </span>

              <span>
                🍫
              </span>

            </div>


            <div className="tienda-tarjeta-info">

              <h3>
                Barrita de cereal
              </h3>

              <p>
                Precio por unidad
              </p>

              <strong>
                $1.200
              </strong>

              <button>
                Agregar al carrito
              </button>

            </div>

          </article>


          {/* PRODUCTO 5 */}

          <article className="tienda-tarjeta">

            <div className="tienda-imagen">

              <span className="tienda-etiqueta">
                Favorito
              </span>

              <span>
                🫙
              </span>

            </div>


            <div className="tienda-tarjeta-info">

              <h3>
                Pasta de maní
              </h3>

              <p>
                Precio por 350 g
              </p>

              <strong>
                $5.200
              </strong>

              <button>
                Agregar al carrito
              </button>

            </div>

          </article>


          {/* PRODUCTO SIN STOCK */}

          <article className="tienda-tarjeta">

            <div className="tienda-imagen">

              <span className="tienda-etiqueta">
                Sin stock
              </span>

              <span>
                🌰
              </span>

            </div>


            <div className="tienda-tarjeta-info">

              <h3>
                Harina de almendras
              </h3>

              <p>
                Precio por 500 g
              </p>

              <strong>
                $8.500
              </strong>

              <button disabled>
                Sin stock
              </button>

            </div>

          </article>

        </div>


        {/* =========================
            CARRITO VISUAL
        ========================== */}

        <aside className="tienda-resumen">

          <span>
            🛒 Tu pedido: 0 unidades ·
            <strong> $0</strong>
          </span>

          <button disabled>
            Vaciar carrito
          </button>

        </aside>

      </section >


      {/* =========================
          BENEFICIOS
      ========================== */}

      < section className="tienda-beneficios" >

        <div>
          <span>📍</span>

          <h3>
            Elegí tu sucursal
          </h3>

          <p>
            Consultá el local más cercano.
          </p>
        </div>


        <div>
          <span>🛍️</span>

          <h3>
            Armá tu pedido
          </h3>

          <p>
            Sumá tus productos favoritos.
          </p>
        </div>


        <div>
          <span>💬</span>

          <h3>
            Estamos para ayudarte
          </h3>

          <p>
            Consultanos por productos y disponibilidad.
          </p>
        </div>

      </section >


      {/* =========================
          FOOTER
      ========================== */}

      < footer
        className="dietetica-footer"
        id="contacto"
      >

        <div className="footer-contenido">


          <div className="footer-marca">

            <a
              href="#inicio"
              className="footer-logo"
            >
              🌿 Raíz Natural
            </a>

            <p>
              Tu dietética de todos los días.
              Sabores, ingredientes y pequeñas elecciones
              para acompañarte.
            </p>

            <span>
              Santa Fe · Paraná
            </span>

          </div>


          <nav>

            <h2>
              Explorá
            </h2>

            <a href="#catalogo">
              Productos
            </a>

            <a href="#promociones">
              Promociones
            </a>

            <a href="#sucursales">
              Sucursales
            </a>

          </nav>


          <div id="sucursales">

            <h2>
              Nuestras sucursales
            </h2>

            <p>
              <strong>
                Santa Fe · Centro
              </strong>

              <br />

              Dirección de ejemplo 1234
            </p>

            <p>
              <strong>
                Santa Fe · Norte
              </strong>

              <br />

              Dirección de ejemplo 5678
            </p>

            <p>
              <strong>
                Paraná
              </strong>

              <br />

              Dirección de ejemplo 901
            </p>

          </div>


          <div>

            <h2>
              Hablemos
            </h2>

            <p>
              Correo: contacto@tu-dietetica.com
            </p>

            <p>
              Lunes a viernes:
              <br />
              9 a 13 y 16 a 20 h
            </p>

            <p>
              Sábados:
              <br />
              9 a 13 h
            </p>

          </div>

        </div>


        <div className="footer-base">

          <span>
            © 2026 Raíz Natural
          </span>

          <span>
            Hecho con ganas de cuidarte 🌱
          </span>

          <a href="#inicio">
            Volver arriba ↑
          </a>

        </div>

      </footer >

    </div >
  )
}

export default App
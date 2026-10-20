import "../css/App.css";

import Combos from "./combos.jsx"
import Cabecera from "./cabecera.jsx";
import Footer from "./footer.jsx";
import Productos from "./Productos.jsx";
import Novedades from "./Novedades.jsx";
function App() {
  return (
    <div id="inicio">

      {/* Dos grupos idénticos para que la cinta no salte al reiniciar. */}
      <div className="div-rotativo">
        <div className="cinta">
          <div className="cinta-grupo"><span></span><span aria-hidden="true"></span><span>15% OFF con transferencia</span><span aria-hidden="true"></span></div>
          <div className="cinta-grupo" aria-hidden="true"><span>15% OFF con transferencia </span><span></span><span>15% OFF con transferencia</span><span></span></div>
        </div>
      </div>

      {/* NUEVA CABECERA */}
      <Cabecera />

      <Novedades />

      {/* PROMOCIÓN */}

      <Combos />



{/* 
          <h2>Un mix para cada momento</h2> */}

  
      <Productos />

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
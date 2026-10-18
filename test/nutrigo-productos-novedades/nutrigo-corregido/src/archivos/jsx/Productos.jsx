import Producto from "./Producto.jsx";
import mix from "../../assets/mix.svg";
import quinoa from "../../assets/quinoa.svg";
import granola from "../../assets/granola.svg";
import mani from "../../assets/mani.svg";
import "../css/Productos.css";

export default function Productos() {
  return (
    <section className="productos-seccion" id="catalogo" aria-labelledby="titulo-productos">
      <div className="productos-cabecera">
        <div><span className="tienda-ceja">PARA TU DESPENSA</span><h2 id="titulo-productos">Nuestros productos</h2></div>
        <label className="productos-buscador">Buscar productos<input type="search" placeholder="¿Qué estás buscando?" /></label>
      </div>
      <div className="productos-molde">
        <span className="productos-solapa">El catálogo</span>
        <div className="productos-grilla">
          <Producto nombre="Mix de frutos secos" precio="$20.000" unidad="Precio por 1 kg" imagen={mix}>
            <span className="producto-etiqueta">Frutos secos</span><span className="producto-etiqueta">Mix</span>
          </Producto>
          <Producto nombre="Quinoa pop" precio="$7.000" unidad="Precio por 1 kg" imagen={quinoa} className="sin-stock">
            <span className="producto-etiqueta">Cereales</span>
          </Producto>
          <Producto nombre="Granola artesanal" precio="$4.500" unidad="Precio por 500 g" imagen={granola}>
            <span className="producto-etiqueta">Granolas</span><span className="producto-etiqueta">Desayuno</span>
          </Producto>
          <Producto nombre="Pasta de maní" precio="$5.200" unidad="Precio por 350 g" imagen={mani}>
            <span className="producto-etiqueta">Untables</span>
          </Producto>
          {/* Ejemplo oculto: quitá className="oculto" para mostrarlo. */}
          <Producto nombre="Otro producto" precio="$0" unidad="Presentación" imagen={mix} className="oculto" />
        </div>
        <div className="productos-pie"><span>Explorá el catálogo a tu ritmo.</span><button type="button" className="productos-ver-todo">Mostrar todo <span aria-hidden="true">↗</span></button></div>
      </div>
      <aside className="tienda-resumen" id="pedido"><span>Tu pedido: 0 unidades · <strong>$0</strong></span><button type="button" disabled>Vaciar carrito</button></aside>
    </section>
  );
}

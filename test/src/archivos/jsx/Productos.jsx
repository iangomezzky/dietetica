import Producto from "./Producto.jsx";
import mix from "../../assets/mix.svg";
import quinoa from "../../assets/quinoa.svg";
import granola from "../../assets/granola.svg";
import mani from "../../assets/mani.svg";
import { useState } from "react";
import "../css/Productos.css";



export default function Productos() {

  const [carrito, setCarrito] = useState([]);


  function agregarAlCarrito(nombre, precio) {
    setCarrito((actual) => {
      const existe = actual.find(
        (producto) => producto.nombre === nombre
      );

      if (existe) {
        return actual.map((producto) =>
          producto.nombre === nombre
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto
        );
      }

      return [...actual, { nombre, precio, cantidad: 1 }];
    });
  }
  let precioTotal = 0;
  let cantidadTotal = 0;

  for (const producto of carrito) {
    precioTotal += producto.precio * producto.cantidad;
    cantidadTotal += producto.cantidad;
  }
  return (
    <section className="productos-seccion" id="catalogo" aria-labelledby="titulo-productos">
      <div className="productos-cabecera">
        <div><span className="tienda-ceja">PARA TU DESPENSA</span><h2 id="titulo-productos">Nuestros productos</h2></div>
        <label className="productos-buscador">Buscar productos<input type="search" placeholder="¿Qué estás buscando?" /></label>
      </div>
      <div className="productos-molde">
        
        <div className="productos-grilla">
          <Producto nombre="Mix de frutos secos" precio={20000} unidad="Precio por 1 kg" onAgregar={agregarAlCarrito}>
            <span className="producto-etiqueta">Frutos secos</span><span className="producto-etiqueta">Mix</span>
          </Producto>
          <Producto nombre="Quinoa pop" precio={7000} unidad="Precio por 1 kg"  onAgregar={agregarAlCarrito} className="sin-stock">
            <span className="producto-etiqueta">Cereales</span>
          </Producto>
          <Producto nombre="Granola artesanal" precio={4500} unidad="Precio por 500 g"  onAgregar={agregarAlCarrito}>
            <span className="producto-etiqueta">Granolas</span><span className="producto-etiqueta">Desayuno</span>
          </Producto>
          <Producto nombre="Pasta de maní" precio={5200} unidad="Precio por 350 g"  onAgregar={agregarAlCarrito}>
            <span className="producto-etiqueta">Untables</span>
          </Producto>
          {/* Ejemplo oculto: quitá className="oculto" para mostrarlo. */}
          <Producto nombre="Otro producto" precio={0} unidad="Presentación" onAgregar={agregarAlCarrito} className="oculto" />
        </div>
        <div className="productos-pie"><span>Explorá el catálogo a tu ritmo.</span><button type="button" className="productos-ver-todo">Mostrar todo <span aria-hidden="true">↗</span></button></div>
      </div>
      <aside className="tienda-resumen" id="pedido">
        <div>
          <p>Tu pedido: {cantidadTotal} unidades</p>

          {carrito.map((producto) => (
            <p key={producto.nombre}>
              {producto.cantidad} × {producto.nombre}
              {" · $"}
              {(producto.precio * producto.cantidad).toLocaleString("es-AR")}
            </p>
          ))}

          <strong>
            Total: ${precioTotal.toLocaleString("es-AR")}
          </strong>
        </div>

        <button
          type="button"
          disabled={carrito.length === 0}
          onClick={() => setCarrito([])}
        >
          Vaciar carrito
        </button>
      </aside>
    </section>
  );
}

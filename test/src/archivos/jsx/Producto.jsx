import "../css/Productos.css";

// Solo presentación. El stock, los filtros y el carrito los conectás vos.
export default function Producto({ nombre, precio, unidad, imagen, className = "", children }) {
  return (
    <article className={`producto ${className}`}>
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} loading="lazy" />
        <span className="producto-banda">Sin stock</span>
      </div>
      <div className="producto-info">
        <div className="producto-etiquetas">{children}</div>
        <h3>{nombre}</h3>
        <p className="producto-unidad">{unidad}</p>
        <strong className="producto-precio">{precio}</strong>
        <p className="producto-disponibilidad">Disponible</p>
        <p className="producto-agotado">Sin stock por el momento</p>
      </div>
      <button className="producto-agregar" type="button">Agregar al carrito <span aria-hidden="true">+</span></button>
    </article>
  );
}

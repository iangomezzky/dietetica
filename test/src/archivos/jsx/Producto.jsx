import "../css/Productos.css";

export default function Producto({
  nombre,
  precio,
  unidad,
  className = "",
  children,
  onAgregar,
}) {
  return (
    <article className={`producto ${className}`}>
      <div className="producto-info">
        <div className="producto-etiquetas">{children}</div>

        <h3>{nombre}</h3>

        <p className="producto-unidad">{unidad}</p>

        <strong className="producto-precio">
          ${precio.toLocaleString("es-AR")}
        </strong>

        <p className="producto-agotado">Sin stock</p>
      </div>

      <button
        className="producto-agregar"
        type="button"
        onClick={() => onAgregar(nombre, precio)}
      >
        Agregar al carrito
      </button>
    </article>
  );
}
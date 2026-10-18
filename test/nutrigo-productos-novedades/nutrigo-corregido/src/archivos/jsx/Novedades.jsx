import "../css/Novedades.css";

export default function Novedades() {
  return (
    <section className="novedades" id="novedades" aria-labelledby="titulo-novedades">
      <div className="novedades-encabezado">
        <div><span className="tienda-ceja">EL TABLÓN</span><h1 id="titulo-novedades">Novedades</h1></div>
        <div className="novedades-controles">
          {/* Conectá acá tu lógica de desplazamiento. */}
          <button type="button" className="novedades-anterior" aria-label="Novedad anterior" aria-controls="novedades-pista">←</button>
          <button type="button" className="novedades-siguiente" aria-label="Novedad siguiente" aria-controls="novedades-pista">→</button>
        </div>
      </div>
      <div className="novedades-pista" id="novedades-pista" tabIndex="0" aria-label="Tarjetas de novedades">
        <article className="novedad novedad-verde">
          <span className="novedad-numero">01 / DESPENSA</span>
          <div><h2>Un mix para<br />cada momento.</h2><p>Conocé los frutos secos del catálogo.</p><a href="#catalogo">Explorar productos ↗</a></div>
          <span className="novedad-decoracion" aria-hidden="true">🥜</span>
        </article>
        <article className="novedad novedad-crema">
          <span className="novedad-numero">02 / DESAYUNOS</span>
          <div><h2>Tu próxima<br />combinación.</h2><p>Granolas, semillas y cereales para elegir.</p><a href="#catalogo">Ver el catálogo ↗</a></div>
          <span className="novedad-decoracion" aria-hidden="true">🌾</span>
        </article>
        <article className="novedad novedad-rosa">
          <span className="novedad-numero">03 / EL LOCAL</span>
          <div><h2>Nos vemos<br />en Nutrigo.</h2><p>Encontranos en Hipólito Irigoyen 2377.</p><a href="#local">Conocer el local ↗</a></div>
        </article>
      </div>
      <div className="novedades-pie">
        <span>Nutrigo · Santa Fe Centro</span>
        {/* La lógica del temporizador y el estado activo queda pendiente. */}
        <div className="novedades-indicadores" aria-label="Elegir novedad">
          <button className="activo" type="button" aria-label="Mostrar novedad 1" aria-current="true" aria-controls="novedades-pista" />
          <button type="button" aria-label="Mostrar novedad 2" aria-controls="novedades-pista" />
          <button type="button" aria-label="Mostrar novedad 3" aria-controls="novedades-pista" />
        </div>
      </div>
    </section>
  );
}

import "../css/combos.css";

export default function Combos() {

  function siguiente() {


    const flechaSiguiente = document.querySelector("#combos-pista")

    if (!flechaSiguiente) return;


    flechaSiguiente.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }


  function anterior() {


    const flechaAnterior = document.querySelector("#combos-pista")

    if (!flechaSiguiente) return;


    flechaSiguiente.scrollBy({
      right: 300,
      behavior: "smooth",
    });
  }




  return (
    <section
      className="combos"
      id="combos"
      aria-labelledby="titulo-combos"
    >
      <div className="combos-encabezado">
        <div>
          <span className="combos-ceja">PARA COMBINAR</span>
          <h2 className="combos-titulo" id="titulo-combos">
            Combos
          </h2>
        </div>

        <div className="combos-controles">
          {/* Acá conectás tu lógica de desplazamiento */}
          <button
          onClick={siguiente}
            type="button"
            className="combos-anterior"
            aria-label="Combo anterior"
            aria-controls="combos-pista"
          >
            ←
          </button>

          <button
            onClick={siguiente}
            type="button"
            className="combos-siguiente"
            aria-label="Combo siguiente"
            aria-controls="combos-pista"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="combos-pista"
        id="combos-pista"
        tabIndex="0"
        aria-label="Tarjetas de combos"
      >
        <article className="combo combo-verde">
          <span className="combo-numero">01 / DESPENSA</span>

          <div>
            <h3>
              Un mix para
              <br />
              cada momento.
            </h3>

            <p>
              Conocé los frutos secos de nuestro catálogo.
            </p>

            <a href="#catalogo">Explorar productos ↗</a>
          </div>

          <span
            className="combo-decoracion"
            aria-hidden="true"
          />
        </article>

        <article className="combo combo-crema">
          <span className="combo-numero">02 / DESAYUNOS</span>

          <div>
            <h3>
              Tu próxima
              <br />
              combinación.
            </h3>

            <p>
              Granolas, semillas y cereales para elegir.
            </p>

            <a href="#catalogo">Ver el catálogo ↗</a>
          </div>

          <span
            className="combo-decoracion"
            aria-hidden="true"
          />
        </article>

        <article className="combo combo-rosa">
          <span className="combo-numero">03 / EL LOCAL</span>

          <div>
            <h3>
              Nos vemos
              <br />
              en Nutrigo.
            </h3>

            <p>
              Encontranos en Hipólito Irigoyen 2377.
            </p>

            <a href="#local">Conocer el local ↗</a>
          </div>
        </article>
      </div>

      <div className="combos-pie">
        <span>Nutrigo · Santa Fe Centro</span>

        {/* Acá conectás el temporizador y el indicador activo */}
        <div
          className="combos-indicadores"
          aria-label="Elegir combo"
        >
          <button
            className="combo-activo"
            type="button"
            aria-label="Mostrar combo 1"
            aria-current="true"
            aria-controls="combos-pista"
          />

          <button
            type="button"
            aria-label="Mostrar combo 2"
            aria-controls="combos-pista"
          />

          <button
            type="button"
            aria-label="Mostrar combo 3"
            aria-controls="combos-pista"
          />
        </div>
      </div>
    </section>
  );
}
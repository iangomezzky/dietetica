import { useState } from "react";
import "../css/FormularioAcceso.css";
import { useNavigate } from "react-router-dom";

export default function FormularioAcceso({ modo = "registro" }) {
    const navigate = useNavigate();
    const [modoActual, setModoActual] = useState(modo);
    const esRegistro = modoActual === "registro";

    // Cuenta de prueba: se conserva mientras el componente siga abierto.
    const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");
    const [confirmacion, setConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");

    function limpiar() {
        setNombre("");
        setEmail("");
        setClave("");
        setConfirmacion("");
        setError("");
        setMensaje("");
    }
    function cambiarModo() {
        limpiar();
        setModoActual(esRegistro ? "login" : "registro");
    }

    function enviar(event) {
        event.preventDefault();
        setError("");
        setMensaje("");

        const correo = email.trim().toLowerCase();

        if (!correo || !clave.trim()) {
            setError("Completá el correo y la contraseña.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            setError("Ingresá un correo válido.");
            return;
        }

        if (esRegistro) {
            if (nombre.trim().length < 3) {
                setError("El nombre debe tener al menos 3 caracteres.");
                return;
            }

            if (clave.length < 8) {
                setError("La contraseña debe tener al menos 8 caracteres.");
                return;
            }

            if (clave !== confirmacion) {
                setError("Las contraseñas no coinciden.");
                return;
            }

            setUsuarioRegistrado({
                nombre: nombre.trim(),
                email: correo,
                clave,
            });

            limpiar();
            setModoActual("login");
            setMensaje("Registro de prueba completo. Ahora podés ingresar.");
            return;
        }

        if (!usuarioRegistrado) {
            setError("Primero registrate para probar el ingreso.");
            return;
        }

        if (
            correo !== usuarioRegistrado.email ||
            clave !== usuarioRegistrado.clave
        ) {
            setError("El correo o la contraseña son incorrectos.");
            return;
        }
        navigate("/");


        setClave("");
        setMensaje(`¡Bienvenido, ${usuarioRegistrado.nombre}!`);
    }
    return (
        <section className="acceso">
            <div className="acceso-presentacion">
                <a className="acceso-marca" href="/">
                    NUTRIGO<span>.</span>
                </a>

                <span className="acceso-ceja">
                    SANTA FE · CENTRO
                </span>

                <h1>
                    {esRegistro ? "Creá tu cuenta." : "Qué bueno verte."}
                </h1>

                <p>
                    {esRegistro
                        ? "Completá tus datos para registrarte."
                        : "Ingresá con tu correo y contraseña."}
                </p>

                <a className="acceso-volver" href="/">
                    ← Volver a la tienda
                </a>
            </div>

            <div className="acceso-panel">
                <div className="acceso-encabezado">
                    <span className="acceso-ceja">
                        {esRegistro ? "REGISTRO" : "ACCESO"}
                    </span>

                    <h2>
                        {esRegistro ? "Empezamos por tus datos" : "Iniciar sesión"}
                    </h2>
                </div>
                <form
                    className="acceso-form"
                    onSubmit={enviar}
                    onReset={limpiar}
                    noValidate
                >
                    {esRegistro && (
                        <div className="acceso-campo">
                            <label htmlFor={`${modo}-nombre`}>
                                Nombre completo
                            </label>

                            <input
                                id={`${modo}-nombre`}
                                name="nombre"
                                type="text"
                                autoComplete="name"
                                placeholder="Tu nombre y apellido"
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}
                                maxLength={100}
                                required
                            />
                        </div>
                    )}

                    <div className="acceso-campo">
                        <label htmlFor={`${modo}-email`}>
                            Correo electrónico
                        </label>

                        <input
                            id={`${modo}-email`}
                            name="email"
                            type="email"
                            autoComplete="username"
                            placeholder="nombre@correo.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="acceso-campo">
                        <label htmlFor={`${modo}-clave`}>
                            Contraseña
                        </label>

                        <input
                            id={`${modo}-clave`}
                            name="clave"
                            type="password"
                            autoComplete={
                                esRegistro ? "new-password" : "current-password"
                            }
                            placeholder="Tu contraseña"
                            value={clave}
                            onChange={(event) => setClave(event.target.value)}
                            minLength={esRegistro ? 8 : undefined}
                            required
                        />

                        {esRegistro && (
                            <small>Usá al menos 8 caracteres.</small>
                        )}
                    </div>

                    {esRegistro && (
                        <div className="acceso-campo">
                            <label htmlFor={`${modo}-confirmacion`}>
                                Confirmar contraseña
                            </label>

                            <input
                                id={`${modo}-confirmacion`}
                                name="confirmacion"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Repetí tu contraseña"
                                value={confirmacion}
                                onChange={(event) =>
                                    setConfirmacion(event.target.value)
                                }
                                minLength={8}
                                required
                            />
                        </div>
                    )}

                    {error && (
                        <p className="acceso-error" role="alert">
                            {error}
                        </p>
                    )}

                    {mensaje && (
                        <p className="acceso-mensaje" role="status">
                            {mensaje}
                        </p>
                    )}

                    <button className="acceso-enviar" type="submit">
                        {esRegistro ? "Crear cuenta" : "Ingresar"}
                        <span aria-hidden="true">→</span>
                    </button>

                    <button className="acceso-limpiar" type="reset">
                        Limpiar campos
                    </button>
                </form>
                <p>
                    {esRegistro ? "¿Ya tenés cuenta?" : "¿Todavía no tenés cuenta?"}

                    {" "}

                    <button
                        type="button"
                        className="acceso-limpiar"
                        onClick={cambiarModo}
                    >
                        {esRegistro ? "Iniciá sesión" : "Registrate"}
                    </button>
                </p>
            </div>
        </section>
    );
}
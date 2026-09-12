import { useState } from 'react';

export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [residuo, setResiduo] = useState('');
  const [errores, setErrores] = useState({});
  const [enviadoExito, setEnviadoExito] = useState(false);

  const validarFormulario = () => {
    let nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre completo es obligatorio.';
    }

    if (!correo.trim()) {
      nuevosErrores.correo = 'El correo electrónico es obligatorio.';
    } else {
      const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexCorreo.test(correo)) {
        nuevosErrores.correo = 'El formato del correo electrónico no es válido.';
      }
    }

    if (!residuo) {
      nuevosErrores.residuo = 'Por favor selecciona una opción de residuo.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviadoExito(false);

    if (validarFormulario()) {
      console.log('Datos enviados:', { nombre, correo, residuo });
      setEnviadoExito(true);
      setNombre('');
      setCorreo('');
      setResiduo('');
      setErrores({});
    }
  };

  return (
    <main>
      <section id="registro" className="registro">
        <h2>Regístrate en EcoConnect</h2>
        <p className="subtitle">
          Completa el formulario para unirte a nuestra comunidad y comenzar a ganar recompensas por reciclar.
        </p>

        <form id="registroForm" onSubmit={handleSubmit} noValidate>
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && <span className="error-text" style={{ color: '#d9534f', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errores.nombre}</span>}
          </div>

          <div className="campo">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            {errores.correo && <span className="error-text" style={{ color: '#d9534f', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errores.correo}</span>}
          </div>

          <div className="campo">
            <label htmlFor="residuo">Residuo que reciclas con más frecuencia</label>
            <select
              id="residuo"
              value={residuo}
              onChange={(e) => setResiduo(e.target.value)}
            >
              <option value="">Selecciona una opción</option>
              <option value="Plástico">Plástico</option>
              <option value="Papel">Papel</option>
              <option value="Vidrio">Vidrio</option>
              <option value="Metal">Metal</option>
              <option value="Orgánicos">Orgánicos</option>
            </select>
            {errores.residuo && <span className="error-text" style={{ color: '#d9534f', fontSize: '13px', marginTop: '5px', display: 'block' }}>{errores.residuo}</span>}
          </div>

          <button type="submit" className="btn">
            Registrarme
          </button>

          {enviadoExito && (
            <div className="success-message" style={{ marginTop: '20px', padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '8px', fontWeight: 'bold' }}>
              ¡Bienvenido a EcoConnect! Tu registro fue realizado con éxito.
            </div>
          )}
        </form>
      </section>
    </main>
  );
}

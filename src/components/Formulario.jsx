import { useState } from 'react';

export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [residuo, setResiduo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim() === '' || correo.trim() === '' || residuo === '') {
      alert('Por favor completa todos los campos.');
    } else {
      alert('¡Bienvenido a EcoConnect! Tu registro fue realizado con éxito.');
      setNombre('');
      setCorreo('');
      setResiduo('');
    }
  };

  return (
    <main>
      <section id="registro" className="registro">
        <h2>Regístrate en EcoConnect</h2>
        <p className="subtitle">
          Completa el formulario para unirte a nuestra comunidad y comenzar a ganar recompensas por reciclar.
        </p>

        <form id="registroForm" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
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
          </div>

          <button type="submit" className="btn">
            Registrarme
          </button>
        </form>
      </section>
    </main>
  );
}
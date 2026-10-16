¡Claro que sí! Aquí tienes el código completo para reemplazar todo el contenido del archivo Formulario.jsx.   Copia este bloque de código, borra todo lo que tienes actualmente en GitHub y pégalo ahí:   JavaScriptimport { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje('');

    try {
      // Guardar el registro directamente en la colección 'registros' de Firestore
      await addDoc(collection(db, "registros"), {
        nombre: nombre,
        email: email,
        fecha: new Date()
      });
      setMensaje('¡Registro guardado exitosamente en la base de datos!');
      setNombre('');
      setEmail('');
    } catch (error) {
      console.error("Error al guardar:", error);
      setMensaje('Hubo un error al guardar los datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nombre completo:</label>
          <input 
            type="text" 
            placeholder="Escribe tu nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Correo electrónico:</label>
          <input 
            type="email" 
            placeholder="ejemplo@correo.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '10px 15px', backgroundColor: '#2c5e3b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Guardando...' : 'Registrar'}
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: mensaje.includes('exitosamente') ? 'green' : 'red' }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default Formulario;

import { Link } from 'react-router-dom';
import imagenReciclaje from '../imagen/recycling.png';

export function Home() {
  return (
    <main>
      <section id="inicio" className="hero">
        <div className="hero-text">
          <h2>Recicla hoy, construye un mejor mañana 🌍</h2>
          <p>
            EcoConnect es una iniciativa que impulsa el reciclaje inteligente mediante estaciones digitales. 
            Clasifica tus residuos, acumula puntos y obtén recompensas mientras contribuyes a un planeta más limpio y sostenible.
          </p>
          <Link to="/registro" className="btn">Únete ahora</Link>
        </div>
        <div className="hero-image">
          <img src={imagenReciclaje} alt="Ilustración de reciclaje" />
        </div>
      </section>

      <section id="como-funciona" className="features">
        <h2>¿Cómo funciona EcoConnect?</h2>
        <p className="subtitle">
          Reciclar nunca fue tan fácil. Sigue estos tres pasos y comienza a generar un impacto positivo.
        </p>
        <div className="cards">
          <div className="card">
            <div className="icon">📸</div>
            <h3>Escanea</h3>
            <p>Lleva tus residuos a una estación EcoConnect y escanealos fácilmente.</p>
          </div>
          <div className="card">
            <div className="icon">♻️</div>
            <h3>Clasifica</h3>
            <p>Deposita cada residuo en el contenedor adecuado para garantizar un reciclaje correcto.</p>
          </div>
          <div className="card">
            <div className="icon">🎁</div>
            <h3>Gana puntos</h3>
            <p>Acumula puntos por cada reciclaje y canjéalos por beneficios y recompensas.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
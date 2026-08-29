import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className="logo">
        <h1>EcoConnect</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/como-funciona">Cómo funciona</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
}
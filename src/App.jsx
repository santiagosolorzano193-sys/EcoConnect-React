import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Formulario } from './components/Formulario';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<Home />} />
          <Route path="/registro" element={<Formulario />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
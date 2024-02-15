import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Portfolio from './pages/Portfolio';
import Colaboracoes from './pages/Colaboracoes';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen max-w-screen-md mx-auto overflow-hidden">
        <Header />

        <div className="flex-grow overflow-y-auto">
          <Routes>
          <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/colaboracoes" element={<Colaboracoes />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

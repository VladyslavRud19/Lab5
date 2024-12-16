import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Layouts/Portfolio';
import Bookshelf from './Layouts/Bookshelf';
import Home from './Layouts/Home';
import Blog from './Layouts/Blog';
import Contact from './Layouts/ContactLayout';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <header>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neo-cream text-neo-text font-sans selection:bg-neo-pink-light selection:text-black">
        <div className="max-w-7xl mx-auto bg-white/50 backdrop-blur-sm min-h-screen border-x-2 border-neo-text shadow-none flex flex-col">
          <Navbar />
          <main className="flex-grow p-4 md:p-8 lg:p-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <footer className="border-t-2 border-neo-text p-8 text-center bg-neo-cream text-neo-text mt-auto">
            <p className="font-medium text-sm md:text-base">
              © {new Date().getFullYear()} Danielle Royer. <span className="text-gray-400 mx-2">|</span> Designed with <span className="text-neo-pink-vibrant">♥</span>.
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
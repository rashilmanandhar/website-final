import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#05060a] bg-grid-dots text-gray-900 dark:text-gray-100 flex flex-col selection:bg-violet-500 selection:text-white transition-colors duration-300 relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Pages with client routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

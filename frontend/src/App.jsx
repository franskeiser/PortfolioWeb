import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import ArchivePage from './pages/ArchivePage';

function MainPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Hero />
        <Stats />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

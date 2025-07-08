import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f0f4f8] via-white to-[#e2e8f0] dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#e6f5ea] via-[#f7fff9] to-[#d2f1dc] dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<div className="text-center text-xl mt-10">404: Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App

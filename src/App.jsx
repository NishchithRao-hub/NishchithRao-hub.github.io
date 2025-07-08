import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // <div className="flex flex-col min-h-screen bg-[url('/scattered-bg.svg')] bg-fixed bg-cover bg-no-repeat text-gray-800 dark:text-white">
    <div className="flex flex-col min-h-screen 
    bg-[url('/scattered-white-bg.svg')] 
    dark:bg-[url('/scattered-dark-bg.svg')] 
    bg-fixed bg-cover bg-no-repeat 
    text-gray-800 dark:text-white
    bg-white dark:bg-gray-900">
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

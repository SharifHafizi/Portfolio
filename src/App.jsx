import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./routes/projects/Projects";
import Skills from "./routes/skills/Skills";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Error from "./routes/Error/Error";
import Footer from "./components/Footer";
//Hashrouter is used to host it in github pages.
import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar and Footer is out of router to be static for all pages. */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/skills" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

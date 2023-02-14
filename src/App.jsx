import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Projects from "./routes/projects/Projects";
import Skills from "./routes/skills/Skills";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Error from "./routes/Error/Error";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/#/" element={<HomePage />} />
          <Route path="/#/projects" element={<Projects />} />
          <Route path="/#/skills" element={<Skills />} />
          <Route path="/#/about" element={<About />} />
          <Route path="/#/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

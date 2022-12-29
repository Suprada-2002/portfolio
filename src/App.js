import "./styles/App.scss";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

//components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
}

export default App;

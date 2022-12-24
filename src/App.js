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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </Router>
  );
}

export default App;

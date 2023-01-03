import "./styles/App.scss";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  
} from "react-router-dom";

/**
 * a header - home
 * a nav bar
 * main content
 * sidebar
 * footer
 */

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
         <Home />
        <Navbar />
     <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={ <Skills />} />
        <Route path="/projects" element={ <Projects /> } />
        
        </Routes>
      </div>
      </Router>
  
  );
}

export default App;

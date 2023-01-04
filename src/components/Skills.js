import "../styles/Skills.scss";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";

const Skills = () => {
  return (

<>
<h3 className="heading"><i>"Debugging is like being the detective in a crime movie where you are
  also the murderer."</i></h3>
    <div className="skills-container">
      
    <div className="language skill">
      <h4>Languages</h4>
     
        <ul className="icons">
          <li><img src="python.svg" /></li>
          <li><img src="java.svg" /></li>
          <li><img src="cpp.svg" /></li>
        </ul>
      
    </div>
         <div className="front-end skill">
         <h4>FrontEnd</h4>
     
        <ul className="icons">
          <li><img src="html5.svg" /></li>
          <li><img src="javascript.svg" /></li>
          <li><img src="react.png" /></li>
        </ul>
    
         </div>
         <div className="back-end skill">
         <h4>BackEnd</h4>
     
        <ul className="icons">
          <li><img src="firebase.svg" /></li>
          <li><img src="nodejs.svg" /></li>
        </ul>
      </div>
       
        
    </div>
    </>

  );
};

export default Skills;

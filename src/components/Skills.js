import "../styles/Skills.scss";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaNode, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="front-end">
        <h3>Front End</h3>
        <div className="content">
          <ul>
            <li>
              <FaReact />
            </li>
            <li>
              <SiNextdotjs />
            </li>
            <li>
              <SiTailwindcss />
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="backend">
        <h3>Back End</h3>
        <ul>
          <li>
            <FaNode />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

import '../styles/Projects.scss';
import ProjectData from '../assets/projectsData.js';
import {FaGithubAlt} from 'react-icons/fa'

const Projects = () => {
return(
    < div className='pcontainer'>
<h3 className='header'>check out my projects</h3>
    <div className="project-container">
      
       {ProjectData && ProjectData.map((n) => (
        <div className='project-item' 
        key={n.id}>
    <div class="card card0">
        <div class="border">
      <h2>Al Pacino</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        
      </div>
    </div>
  </div>

        </div>
        ))}
        </div>
    </div>

    )}

export default Projects;



<div class="container">
  
 </div>
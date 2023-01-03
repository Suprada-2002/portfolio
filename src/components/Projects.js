import '../styles/Projects.scss';
import ProjectData from '../assets/projectsData.js';
import {FaGithubAlt} from 'react-icons/fa'

const Projects = () => {
return(
    < div className='pcontainer'>
<h3 className='header'>check out my projects</h3>
    <div className="project-container">
      
       {ProjectData && ProjectData.map((n) => (
        <div className='project-item' key={n.id}>
           <h3> {n.title}</h3>
           <img src={n.image} alt="not found"/>
           <p className='description'>{n.desc}</p>
           <div className='buttons'>
             <a href={n.git} className="git" ><FaGithubAlt size={23} /></a>
              <a href={n.live} className="live">VIEW LIVE</a>
            </div>
        </div>
        ))}
    </div>

    </div>
    )}

export default Projects;
import API from '../../api.json';
import IndividualProject from '../IndividualProject/IndividualProject.js';
import style from './Projects.module.css';


const Projects = () => {

    const { p } = API
    const { projects } = p

    return (<div className={style.projects} id="Projects">
        <h2>Projects</h2>
        <IndividualProject left={true} title={projects.e_commerce.title} text={projects.e_commerce.text} />
        <IndividualProject left={false} title={projects.food_recipes.title} text={projects.food_recipes.text} />
    </div>)
}

export default Projects;
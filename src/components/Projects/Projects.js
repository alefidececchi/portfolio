import API from '../../api.json';
import imgECommerce from '../../assets/img/e_commerce.jpg'
import imgFoodRecipes from '../../assets/img/food_recipes.jpg'
import IndividualProject from '../IndividualProject/IndividualProject.js';
import style from './Projects.module.css';



const Projects = () => {

    const { p } = API
    const { projects } = p

    return (<div className={style.projects} id="Projects">
        <h2 className={style.H2projects}>PROJECTS</h2>
        <IndividualProject img={imgECommerce} left={true} title={projects.e_commerce.title} text={projects.e_commerce.text} />
        <IndividualProject img={imgFoodRecipes} left={false} title={projects.food_recipes.title} text={projects.food_recipes.text} />
    </div>)
}

export default Projects;
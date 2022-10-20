import '../../App.css';
import imgAbout from '../../assets/img/about.jpg';
import style from './AboutMe.module.css';
import DivAnimated from '../DivAnimated/DivAnimated.js';


const text = <p className={style.aboutText}>Full Stack Developer del tipo MERN (MongoDB, Express.js, React, Node.js). Con excelentes soft skills
    tales como la adaptabilidad, creatividad, actitud proactiva, trabajo en equipo y autonomía, adquiridas a
    través de los estudios en tecnologías, de forma individual y grupal. Enfocado primeramente en construir
    productos innovadores y de alta calidad que impacten en la vida diaria de las personas.</p>

const img = <img src={imgAbout} alt='pochi' className={style.aboutImg} />


const AboutMe = () => {

    return (<div className={style.about} id="About">
        <h2 className={style.H2about}>ABOUT</h2>
        <div className={`fl-rw-ctr ${style["spc-ard"]}`}>
            <DivAnimated left={true} element={text} />
            <DivAnimated left={false} element={img}  />
        </div>
    </div>)
}

export default AboutMe;
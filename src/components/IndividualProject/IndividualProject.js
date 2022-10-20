import DivAnimated from '../DivAnimated/DivAnimated.js'
import '../../App.css';
import style from './IndividualProject.module.css';

const IndividualProject = ({ img, left, text, title }) => {

    const elem = left
        ? (<div className={`fl-rw-ctr ${style.containerProject}`}>
            <div className={`fl-cl-spc-btw ${style.H3text} ${style.right}`}>
                <h3 className={style.h3Title}>{title}</h3>
                <p className={style.pText}>{text}</p>
            </div>
            <div className={`${style.left}`}>
                <img className={`${style.projectImg}`} src={img} />
            </div>
        </div>
        )
        : (<div className={`fl-rw-ctr ${style.containerProject}`}>
            <div className={` ${style.right}`}>
                <img className={`${style.projectImg}`} src={img} />
            </div>
            <div className={`fl-cl-spc-btw ${style.H3text} ${style.left}`}>
                <h3 className={style.h3Title}>{title}</h3>
                <p className={style.pText}>{text}</p>
            </div>
        </div>
        )

    return (<DivAnimated left={left} element={elem} />)
}

export default IndividualProject;
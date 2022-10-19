import Li from '../Li/Li.js'
import '../../App.css';
import style from './Navbar.module.css'

function Navbar() {

    const li = ["About", "Projects", "Technolgies", "Contact", "Download CV"]

    return (<div className={`fl-rw-ctr ${style["spc-arnd"]} ${style.container}`} >
        <div>
            <h2>PORTFOLIO</h2>
        </div>
        <div>
            <ul className={`fl-rw-ctr ${style["navbar_links"]} ${style["spc-arnd"]}`} >
                {li.map(curr => (<Li li={curr} key={curr} />))}
            </ul>
        </div>
    </div>)
}

export default Navbar;
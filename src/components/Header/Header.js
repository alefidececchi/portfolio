import style from './Header.module.css';
import '../../App.css';

const Header = () => {
    return (<header className={`fl-rw-ctr ${style.headerElement}`} >
        <div>
            <h1>Hey! I'm</h1>
        </div>
        <div className={style.wordCarousel}>
                <ul className={style.flip3}>
                    <li className={style.liStyled}>fullstack developer</li>
                    <li className={style.liStyled}>frontend developer</li>
                    <li className={style.liStyled}>backend developer</li>
                </ul>
          
        </div>
    </header>
    )
}

export default Header;
import Li from '../Li/Li.js'

function Navbar() {

    const li = ["About", "Projects", "Technolgies", "Contact",]

    return (<div>
        <ul>
            {li.map(curr => (<Li li={curr} key={curr} />))}
        </ul>
    </div>)
}

export default Navbar;
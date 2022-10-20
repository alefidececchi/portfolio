import DivAnimated from '../DivAnimated/DivAnimated.js'

const IndividualProject = ({ left, text, title }) => {

    const elem = (<>
        <h3>{title}</h3>
        <p>{text}</p>
    </>)
    
    return (<DivAnimated left={left} element={elem} />)
}

export default IndividualProject;
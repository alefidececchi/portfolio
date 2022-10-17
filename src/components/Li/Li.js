import React from "react";


const Li = (props) => {
    return (<li><a href={`#${props.li}`}>{props.li}</a></li>)    
}

export default Li;
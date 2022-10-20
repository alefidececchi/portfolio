import React, { useRef, useState, useLayoutEffect } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* margin: 0 */}
`;

const Div = styled.div`
  ${'' /* height: 200px;
  width: 300px; */}
  transform: ${(props) => !props.animate ? props.left ? "translateX(-100vw)" : "translateX(200vw)" : "translateX(0px)"};
  transition: transform 2s;
  ${'' /* margin: 20px; */}
  opacity: ${({ animatePercent }) => animatePercent ? `${animatePercent / 100}` : "1"};
`

const DivAnimated = ({ element, left }) => {

    const [show, setShow] = useState(false)
    const [percent, setPercent] = useState(0)

    const itemRef = useRef(null);

    useLayoutEffect(() => {
        const scrollPos = window.innerHeight + window.pageYOffset
        const onScroll = () => {
            const topPos = (elem) => elem.getBoundingClientRect().top
            const getHeight = (elem) => elem.offsetHeight;
            const divPos = topPos(itemRef.current)
            const divHeight = getHeight(itemRef.current);
            if (divPos < scrollPos) {
                setShow(true);
                let itemPercent = (scrollPos - topPos) / divHeight * 100
                if (itemPercent > 100) itemPercent = 100;
                if (itemPercent < 0) itemPercent = 0;
                setPercent(itemPercent)
            } else if (scrollPos < divPos) {
                setShow(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (<>
        <Wrapper>
            <Div
                animate={show}
                animatePercent={percent}
                left={left}
                ref={itemRef}>{element}</Div>
        </Wrapper>
    </>)
}


export default DivAnimated;
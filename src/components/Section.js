import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftButtonText, rightButtonText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {rightButtonText &&
                            <RightButton>
                                {rightButtonText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index:10;
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between; //for vertical align
    align-items:center; //for horizantal align
`
const ItemText = styled.div`
    padding-top:15vh;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){ //buttons goes up on other for smalle screen
        flex-direction:column
    }
`
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`
const DownArrow = styled.img`
    height:40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`

`
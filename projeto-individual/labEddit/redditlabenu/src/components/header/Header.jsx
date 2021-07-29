import React from "react"
import styled  from "styled-components"


const HeaderContainer = styled.div` 
    color: white;
    background-color: #FF4500;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <h2> LAB EDDIT </h2>
            </div>
        </HeaderContainer> 
        
    )
}
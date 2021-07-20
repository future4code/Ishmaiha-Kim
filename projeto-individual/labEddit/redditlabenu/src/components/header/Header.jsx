import React from "react"
import styled  from "styled-components"

const HeaderContainer = styled.div` 
    margin: 0 auto; 
    background-color: #FF4500;
`

const ButtonContainer = styled.div` 
    display: flex;
    justify-content:space-between;
   
   
`
export const Header = () => {
    return (
        <HeaderContainer>
            <ButtonContainer>
                <button>Login</button>
                <button>Sign In</button>
            </ButtonContainer>
        </HeaderContainer> 
        
    )
}
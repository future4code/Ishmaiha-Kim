import React from "react";
import { BsArrowUp } from "react-icons/bs"
import { AiOutlineArrowDown } from "react-icons/ai"
import styled from "styled-components";

const Title = styled.h3` 
    color: #ED4333;
`

const Content = styled.p`
    color: black;
`

const CardContainerGeral = styled.div`
    margin: 15px;
    border: 1px solid black;
    width: 50%;
    padding: 5px;
`

const ContainerFooter = styled.div`
    display: flex; 
`

const LikeContainer = styled.div` 
    display:flex;
`

const CommentContainer = styled.div` 
    display:flex;
    margin-left: 10px;
`

export const CardPost = (props) => {
  return (
    <CardContainerGeral>
        <div>
            <Title>{props.title}</Title>
        </div>

        <div>
            <Content>
            {props.body}
            </Content>
        </div>

        <ContainerFooter>
            <LikeContainer>
                <BsArrowUp/>
                <p>0</p>
                <AiOutlineArrowDown/>
            </LikeContainer>

            <CommentContainer>
                <p>0</p>
                <p>comentarios</p>
            </CommentContainer>

        </ContainerFooter>        
        

    </CardContainerGeral>
  );
}
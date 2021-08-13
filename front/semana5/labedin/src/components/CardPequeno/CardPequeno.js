import React from 'react';
import styled from "styled-components"

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const SmallCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const SmallCardH4 = styled.h4`
    margin-bottom: 15px;
`

const SmallCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <SmallCard>
            <SmallCardImg src={props.imagem}/>
            <SmallCardDiv>
                <SmallCardH4>{ props.nome }</SmallCardH4>
                <p>{ props.texto}</p>
            </SmallCardDiv>
        </SmallCard>
    )
}

export default CardPequeno;
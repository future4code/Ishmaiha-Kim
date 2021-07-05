import React from "react";
import styled from "styled-components";


const Title = styled.h2` 
    display: flex;
    justify-content: center;
`

const CentralContainer = styled.div` 
    display:flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;;
    padding: 5px;
`

const TwoButtons = styled.div`
    display:flex;
    justify-content: center;
    
`
const Buttons = styled.button`
    margin: 30px 35px;
`

function ListTripsPage() {
    return (
      <div>
        <Title>Lista de Viagens</Title>
        <CentralContainer>
            <p>Nome: sadasdsadas</p>
            <p>Descrição: sadsadsadas</p>
            <p>Planeta: sdasda</p>
            <p>Duração: dsadasda</p>
            <p>Data: dsadasdsa</p>
        </CentralContainer> 
        <TwoButtons>
            <Buttons>Voltar</Buttons>
            <Buttons>Inscreva-se</Buttons>
        </TwoButtons>  
      </div>
    );
  }
  
  export default ListTripsPage;
import React from "react";
import styled from "styled-components";



const Title = styled.h2` 
    display: flex;
    justify-content: center;
`

const Buttons = styled.div` 
    display: flex;
    justify-content: center;
    margin: 10px;
`

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
`

const Options = styled.select` 
    border-radius: 3px;
    margin: 3px;
`

const Write = styled.input` 
    border-radius: 3px;
    margin: 3px;
`

const TwoButtons = styled.button` 
    margin: 0 25px;
`

function ApplicationFormPage() {
    return (
      <div>
            <Title>Inscreva-se!!!</Title>
            <ContainerGeral>
                <Options>
                    <option value="">Escolha uma viagem</option>
                </Options>
                <Options>
                    <option value="country">País de origem</option>
                </Options>
                <Write placeholder="Nome"></Write>
                <Write placeholder="Idade"></Write>
                <Write placeholder="Venda seu peixe!"></Write>
                <Write placeholder="Profissão"></Write>
            </ContainerGeral>
        <Buttons>
            <TwoButtons>Voltar</TwoButtons>
            <TwoButtons>Enviar</TwoButtons>
        </Buttons> 
      </div>
    );
  }
  
  export default ApplicationFormPage;
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonsDiv = styled.div` 
  display: flex;
  justify-content: center;
  padding: 10px;
`

const Img = styled.img`
  display: flex;
  width: 100%;
`

const Buttons = styled.button` 
  margin: 5px 35px;
`

export const Homepage = () => {

const history = useHistory();

const goToListTrip = () => {
  history.push ("/trips/list");
}

const goToAdminPage = () => {
  history.push ("/admin/trips/list");
}
    return (
      <div>
        <Title>Welcome to</Title>
        <Title>LABE XX</Title>
        <Img src="https://static.poder360.com.br/2021/04/nasa-spacex.jpeg"></Img>
        <ButtonsDiv>
            <Buttons onClick = {goToListTrip}>Travels</Buttons>
            <Buttons onClick = {goToAdminPage}>Admin page</Buttons>
        </ButtonsDiv>
      </div>
    );
  }
  
  
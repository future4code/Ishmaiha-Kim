import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 350px;
  margin-top: 10px;
` 

export const Login = () => {

  const history = useHistory()

  const GoToFeedPage = () => {
    history.push(`/FeedPage`)
  }
  
  const GoToRegisterPage = () => {
    history.push(`/Register`)
  }

  return (
    <ContainerLogin>
        <input placeholder= " Email"/>
        <input placeholder= " Password"/>
        <button onClick={GoToFeedPage}>Enter</button>
        <button onClick={GoToRegisterPage}>Go to Sign In</button>
    </ContainerLogin>
  );
}
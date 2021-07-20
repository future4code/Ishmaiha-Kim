import React from "react";
import styled from "styled-components";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 350px;
  margin-top: 10px;
` 



export const Login = () => {
  return (
    <ContainerLogin>
        <input placeholder= " Email"/>
        <input placeholder= " Password"/>
        <button>Enter</button>
        <button>Go to Sign In</button>
    </ContainerLogin>
  );
}
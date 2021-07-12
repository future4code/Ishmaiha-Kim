import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router"; 
import styled from "styled-components";

const LoginContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
`
const UserData = styled.input` 
  display: flex;
  flex-direction: column;
  margin: 5px;
  border-radius: 8px;
  width: 200px;
`

const Buttons = styled.button` 
  margin: 5px;
  border-radius: 8px;
`

export const LoginPage = () => {

  const history = useHistory();

  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const goHome = () => {
    history.push ("/");
  }

  const onSubmitLogin = () => {
    const body = {
      email: email, //o primeiro "email" é da API e o segundo "email" é do estado
      password: password
    }
    history.push ("/admin/trips/list")
 
    axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", body)
      .then ((res) => {
        console.log("voilá", res.data)
      })
      .catch ((err) => {
        console.log("errou", err.res)
      })

    
  }  
  
    return (
      <LoginContainer >
        <h2>Login</h2> 
        
          <UserData 
          placeholder = "email" 
          type = "email" 
          value = {email} 
          onChange = {onChangeEmail} 
          // required
          />
          <UserData 
          placeholder = "password" 
          type = "password" 
          value = {password} 
          onChange = {onChangePassword} 
          // required
          />
          <Buttons onClick = {onSubmitLogin} >Sign in</Buttons>
          <Buttons onClick = {goHome} >Return</Buttons>
        
      </LoginContainer>
    );
  }
  
  
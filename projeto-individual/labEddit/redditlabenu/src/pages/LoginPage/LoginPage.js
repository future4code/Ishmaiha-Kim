import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import axios from "axios";
import { baseURL } from "../../constants/Url";
import { UseUnprotectedPage } from "../../hooks/UseUnprotectedPage"

const ContainerLogin = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
` 

const LoginSubmitButtons = styled.button`
  width: 200px;
  background-color: #ED4333;
  border: 1px solid black;
  cursor: pointer;
  color: white;
`

export const Login = () => {
  UseUnprotectedPage()
  const history = useHistory()
  
  const GoToRegisterPage = () => {
    history.push(`/Register`)
  }

  const GoToFeedPage = () => {
    history.push(`/FeedPage`)
  }

  const [body, onChange, clear] = useForm({email: "", password: ""})
  
  const onSubmitForm = (e) => {
    e.preventDefault()
    
    axios.post(`${baseURL}/users/login`, body)
    .then((res)=> {
      localStorage.setItem("token", res.data.token)
      clear()
      GoToFeedPage()
    }) 
    .catch((err) =>
      alert(err.response.data.message)
    )
  }

  return (
    <ContainerLogin>
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="Email"
          name="email"
          value ={body.email}
          onChange={onChange}
          required
          type="email"
        />

        <input
          placeholder="Password"
          name="password"
          value ={body.password}
          onChange={onChange}
          required
          type="password"
        />

        <LoginSubmitButtons type={"submit"} >Enter</LoginSubmitButtons>
        <LoginSubmitButtons onClick ={GoToRegisterPage}>Sign Up</LoginSubmitButtons>

      </form>  
    </ContainerLogin>
  );
} 
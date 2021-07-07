import React, {useState} from "react";
import axios from "axios"
import { useHistory } from "react-router"; 


export const LoginPage = () => {

  const history = useHistory();

  const [email, setEmail] = useState (" ")
  const [password, setPassword] = useState (" ")

  const onChangeEmail = (e) => {
    setEmail (e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword (e.target.value);
  }

  const goHome = () => {
    history.push ("/");
  }

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    }    
    axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/ishmaiha-kim-molina/login")
      .then ((res) => {
        console.log("voilá", res.data)
      })
      .catch ((err) => {
        console.log("errou", err.response)
      })
  }    
  
  
    return (
      <div >
        <input placeholder ="email" type ="email" value = {email} onChange = {onChangeEmail}/>

        <input placeholder ="password" type ="password" value = {password} onChange = {onChangePassword}/>

        <button onClick = {goHome} >Go Back</button>

        <button onClick = {onSubmitLogin} >Enter</button>
        
      </div>
    );
  }
  
  
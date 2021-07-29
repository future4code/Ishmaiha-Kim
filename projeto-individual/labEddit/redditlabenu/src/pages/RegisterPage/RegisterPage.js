import React from "react";
import { UseUnprotectedPage } from "../../hooks/UseUnprotectedPage";



export const Register = () => {
  UseUnprotectedPage()
  return (
    <div>
      <input placeholder= "Username"/>
      <input placeholder ="Email"/>
      <input placeholder ="Password"/>
      <button>Register</button>
    </div>
  );
}
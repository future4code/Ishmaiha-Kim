import React from 'react';
import axios from 'axios'

const url =
"https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
    headers: {
        Authorization: "ishmaiha-kim-molina"
    }
};

export default class Cadastro extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }
    

    mudaNome = (e) => {
        this.setState({inputNome: e.target.value});
    };

    mudaEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }
    
    criarCadastro = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        };
    
        axios.post(url, body, headers)
    };
    render (){
        return (
            <div></div>
        )
    }


}
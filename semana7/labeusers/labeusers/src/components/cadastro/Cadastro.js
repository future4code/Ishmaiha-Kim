import axios from "axios"
import React from "react"

export default class Cadastro extends React.Component {
    state ={
        nome: "",
        email: ""
    }
    
    handleName = (e) => {
        this.setState({nome: e.target.value})
    }
    
    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro = () => {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body ={
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "ishmaiha-kim-molina"
            }
        })
        .then((res) => {
            alert ("Usuário(a) cadastrado com sucesso!")
            this.setState({nome: "", email:""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return (
            <div>
                <h2>
                    Cadastro
                </h2>
                <button onClick={this.props.irParaLista}>
                Ir Para Lista 
                </button>
                <input value={this.state.nome} onChange={this.handleName} placeholder={"Nome"}/>
                <input value={this.state.email} onChange={this.handleEmail} placeholder={"Email"}/>
                <button onClick ={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}



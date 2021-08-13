import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid red;
    padding: 10px;
`

export default class Lista extends React.Component {
    state ={
        usuarios: [],

    }


    componentDidMount () {
        this.pegarUsuarios()
    }
    
    
    pegarUsuarios = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url,{
            headers: {
                Authorization: "ishmaiha-kim-molina"
            }
        })
        .then ((res) => {
            this.setState({usuarios: res.data})
        })
        .catch ((err) => {
            alert("Erro")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "ishmaiha-kim-molina"
            }
        })
        .then ((res) => {

        })
        .catch ((err) => {

        })
    }
    
    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
             <CardUsuario key={user.id}>{user.name}
             <button onClick={() => this.deletarUsuario(user.id)} >
                 X
             </button>
             </CardUsuario>
            )
        })
        return (
            <div>
                <h2>
                    Lista de Usuários
                </h2>
              <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            </div>
        )
    };
}
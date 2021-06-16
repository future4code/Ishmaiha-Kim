import React from "react"

export default class Lista extends React.Component {
    render(){
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
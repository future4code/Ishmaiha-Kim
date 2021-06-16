import React from "react"

export default class Cadastro extends React.Component {
    render(){
        return (
            <div>
                <h2>
                    Cadastro
                </h2>
                <button onClick={this.props.irParaCadastro}>
                IrParaLista 
                </button>
            </div>
        )
    }
}



import React from "react";
import Cadastro from "./components/cadastro/Cadastro";
import Lista from "./components/lista/Lista";

export default class App extends React.Component {
    state ={
        telaInicial: "cadastro"
    }
    
    escolhaTela = () => {
        switch (this.state.telaInicial){
            case "cadastro":
                return <Cadastro irParaLista={this.irParaLista}/>
            case "lista":
                return  <Lista irParaCadastro={this.irParaCadastro}/> 
            default: 
                return <div>Erro mizeravi!</div>
        }
    }  

    irParaCadastro = () => {
        this.setState({telaInicial:"cadastro"})
    }

    irParaLista = () => {
        this.setState({telaInicial:"lista"})
    }

    render(){
        return (
            <div>
               {this.escolhaTela()}
            </div>
        );
    }
}




  
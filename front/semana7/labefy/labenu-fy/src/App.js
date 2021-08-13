import React from "react";
import styled from "styled-components"
import Playlist from "./components/Playlist";
import Personalizado from "./components/Personalizado"
import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: gray;
  }
`

const Welcome = styled.h1`
  display: flex;
  background-color: #000000;
  color: #1ED05D;
  padding: 10px;
  justify-content: space-between;
`
const Pesquisa = styled.input`
  border-radius: 20px;
`

export default class App extends React.Component {
  state = {
    telaInicial: "criar"
  }
  
  escolhaDaTela = () => {
    switch (this.state.telaInicial) {
      case "criar":
        return <Personalizado irParaPlaylist={this.lista}/>  
      case "playlist":
        return <Playlist suaCara={this.criacao}/>
      default:
        return <div>Página não encontrada</div>
    }
  }

  lista = () => {
    this.setState({telaInicial: "playlist"})
  }

  criacao = () => {
    this.setState ({telaInicial: "criar"})
  }


  render () {
    return (
      <div>
        <EstiloGlobal/>
        <Welcome>
          Labefy
          <Pesquisa placeholder="Digite aqui.."/>
        </Welcome>
        {this.escolhaDaTela()}
      </div>
    );
  }
}


 

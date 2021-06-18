import React from "react";
import styled from "styled-components"
import Playlist from "./components/Playlist";
import PlaylistCriada from "./components/PlaylistCriada"

const Welcome = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #1ED05D;
  max-width: 10%;
  margin: 0 auto;
  border-radius: 20px;
`
const Botoes = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #1ED05D;
  border-radius: 20px;
`

export default class App extends React.Component {
  state = {
    telaInicial: "Boas-vindas"
  }
  
  escolhaDaTela = () => {
    switch (this.state.telaInicial) {
      case "criar":
        return <PlaylistCriada lista= {this.irParaPlaylist}/>  
        break;
      case "playlist":
        return <Playlist criacao={this.irCriarPlaylist}/>
      default:
        return <div>Página não encontrada</div>
        break;
    }
  }


  irCriarPlaylist = () => {
    this.setState({telaInicial:"criar"})
  } 
  
  irParaPlaylist = () => {
    this.setState({telaInicial: "playlist"})
  } 


  render () {
    return (
      <div>
        <Welcome>
          Labefy
        </Welcome>
        {this.telaInicial}
        <Botoes onClick={this.irCriarPlaylist}>Criar Playlist</Botoes>
        <Botoes onClick={this.irParaPlaylist}>Playlist de Ishmaiha</Botoes>
      </div>
    );
  }
}


 

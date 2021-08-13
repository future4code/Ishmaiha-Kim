import Agradecimento from "./components/Agradecimento";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import './App.css';
import React from 'react'

export default class App extends React.Component{
  state = {
    etapa: 1
 }
  mudarPagina = () => {
    this.setState ({etapa: this.state.etapa + 1})
  }

 renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      default:
        return <Agradecimento />
    }
 }

  
  render () {
    return (
      <div className="App">
         {this.renderizaEtapa()}
         <button type="button" onClick={this.mudarPagina}>Próxima etapa</button>
      </div>
    )
  }
}


  



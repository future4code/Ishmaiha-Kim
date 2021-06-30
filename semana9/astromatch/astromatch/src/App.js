import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios"; 
import styled from "styled-components";
import ButtonChangePage from "./components/ButtonChangePage/Change.js";
import ButtonDislike from "./components/ButtonDislike/Dislike.js";
import PhotoPerfil from "./components/PhotoPerfil/Photo.js";
import ButtonLike from "./components/ButtonLike/Like.js";


const Header = styled.div`
  display:flex;
  justify-content: space-around;
`

function App() {
  return (
    <div className="App">
      <Header>
        <h2>Astromatch</h2>
        <ButtonChangePage/>
      </Header>
      <PhotoPerfil/>

      
      <div>

      </div>

    </div>
  );
}

export default App;

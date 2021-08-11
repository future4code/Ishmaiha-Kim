
import React, {useState} from "react";
import Photo from "./components/PhotoPerfil/Photo.js";
import Matches from "./components/PaginaMatches/Matches.js";
import styled from "styled-components";


const ChangePage = styled.button`
    margin: auto 0;
    margin-top: 5px;
    background-color: white;
    cursor: pointer;
`

function App() {

  const [firstPage, setFirstPage] = useState (true)

  const handleClick = () => {
    setFirstPage(!firstPage)
  }

  const SwitchPage = () => {
    if (firstPage) {
        return <Photo/>
    } else {
        return <Matches/>
    }
  }
  
  //TESTE TESTE TESTE TESTE TESTE 

  return (
    <div>
      {SwitchPage()}
      <ChangePage onClick ={handleClick}>Match Page </ChangePage>  
    </div>
    
  );
  
}

export default App;

import React from "react";

export default class segundaPagina extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    Etapa 2 - iNFORMAÇÕES DO ENSINO SUPERIOR
                </h1>
                <ol>
                    <li>Qual curso?</li>
                    <br></br>
                    <input type = {Text} value=""/><br></br>
                    <br></br>
                    <li>Qual a unidade de ensino?</li><br></br>
                    <input type = {Text} value=""/><br></br>
                    <br></br>
                </ol>
            </div>
        )    
    }
}

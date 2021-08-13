import React from "react";

export default class terceiraPagina extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    Etapa 3 - iNFORMAÇÕES GERAIS DE ENSINO
                </h1>
                <ol>
                    <li>Por que você não terminou um curso de graduação?</li>
                    <br></br>
                    <input type = {Text} value=""/><br></br>
                    <br></br>
                    <li>Você fez algum curso complementar?</li><br></br>
                    <select id="listaEscolaridade">
                        <option value="n">Nenhum</option>
                        <option value="ct">Curso técnico</option>
                        <option value="ci">Curso de inglês</option>
                            </select>
                </ol>
            </div>
        )    
    }
}
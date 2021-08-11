import React from "react";

export default class primeiraPagina extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    ETAPA 1 - DADOS GERAIS
                </h1>
                <ol>
                    <li>Qual é o seu nome?</li>
                    <br></br>
                    <input type = {Text} value=""/><br></br>
                    <br></br>
                    <li>Qual a sua idade?</li><br></br>
                    <input type = {Text} value=""/><br></br>
                    <br></br>
                    <li>Qual seu email?</li><br></br>
                    <input type = {Text} value=""/><br></br>
                    <br></br>
                    <li>Qual a sua escolaridade?</li>
                    <br></br>
                    <select id="listaEscolaridade">
                        <option value="mi">Ensino Médio Incompleto</option>
                        <option value="mc">Ensino Médio Completo</option>
                        <option value="si">Ensino Superior Incompleto</option>
                        <option value="sc">Ensino Superior Incompleto</option>
                    </select>
                </ol>
            </div>
        )    
    }
}

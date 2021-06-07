import React from "react";

export default class primeiraPagina extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    ETAPA 1 - DADOS GERAIS
                </h1>
                <ol>
                    <li>
                        Qual é o seu nome?
                    </li>
                    <input 
                        type = {Text} value=""
                    />
                    
                </ol>
            </div>
        )    
    }
}

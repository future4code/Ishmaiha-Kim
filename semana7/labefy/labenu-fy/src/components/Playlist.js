import React from "react";
import styled from "styled-components"

const Botao = styled.button`

`

export default class Playlist extends React.Component{
    render () {
        return (
            <div>
                <h1>Ache seus hits</h1>
                <button onClick={this.props.suaCara}> Ir para personalizado</button>
            </div>
        )
    }

}
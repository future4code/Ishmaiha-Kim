import React from "react"

export default class Personalizado extends React.Component{
    render (){
        return (
            <div>
                <h1>Sua playlist</h1>
                <button onClick={this.props.irParaPlaylist}> Ir para playlist</button>
            </div>
        )
    }
}
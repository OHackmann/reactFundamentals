import React, { Component } from "react";

export default class Contador extends Component {

    state = {
        passo: 1,
        valor: 0
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h4>Valor: {this.state.props}</h4>

                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        )
    }
}
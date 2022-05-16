import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="card text-white bg-primary mb-3" style={this.style.width}>
                    <div className="card-header">Telas Dac React </div>
                    <div className="card-body">
                        <h4 className="card-title">Telas React</h4>
                        <p className="card-text"> Cadastros de Pessoas  e Também de Produtos </p>
                    </div>
                </div>
            </div>
        )
    }

    style = {
        width: {
            position: 'relative',
            left: '10px'
        }
    }

}

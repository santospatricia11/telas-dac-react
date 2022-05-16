import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';
import Card from "../components/Card";
import FormGroup from '../components/FormGroup';
import {withRouter}from 'react-router-dom';


export default class DeletarPessoa extends React.Component{

    state = {
        nome: '',
        buscar: '',
      
    }

    cadastro =()=>{
        console.log('Nome:',this.state.nome);
        console.log('buscar:',this.state.buscar);
      
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 " style={this.styles.colMd6}>
                        <div className="bs-docs-section">
                          
                          
                            <div className="card md-3">
                                <h3 className="card-header">Deletar Pessoa</h3>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <div className="form-group">
                                                    <label htmlFor="inputNome">Nome</label>
                                                    <input type="nome"className="form-comtrol"id="inputNome"value={this.state.nome}
                                                    onChange={(e)=>this.setState({nome:e.target.value})}/>
                                                </div>
                                                                                            
                                                <div className="form-group">
                                                    <label htmlFor="inputBuscar">Buscar</label>
                                                    <input type="buscar"className="form-comtrol"id="inputBuscar"value={this.state.tipo}
                                                    onChange={(e)=>this.setState({buscar:e.target.value})}/>
                                                </div>
                                    
                                                <button type="button" class="btn btn-info"onClick={this.cadastro}>Buscar</button>
                                            
                                            </fieldset>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
         

    }
    styles = {
        colMd6 :{
            position:"relative",
            left:"300px"
        }
    };

}
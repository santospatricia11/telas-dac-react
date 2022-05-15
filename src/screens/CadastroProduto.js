import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';
import './CadastroProduto.css';
import Card from "../components/Card";
import FormGroup from '../components/FormGroup';
import {withRouter}from 'react-router-dom';

export default class CadastroProduto extends React.Component{

    state = {
        nomeProduto: '',
        id: '',
        tipo:  ''
        
    }
    create=()=>{
        console.log(this.state);
    }
    buscar =()=>{
        console.log();
    }

    cadastro =()=>{
        console.log('Nome:',this.state.nomeProduto);
        console.log('Id:',this.state.id);
        console.log('Tipo:',this.state.tipo);
      
    }
    render(){
        return(
            <div className="container">
                <Card title="Cadastro Produto">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup className label= "Nome Produto: *"htmlFor="inputNome">
                                    <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    nome="nomeProduto"
                                    onChange={e => this.setState({nomeProduto:e.target.value})}/>
                                </FormGroup>

                                <FormGroup className label= "ID: *"htmlFor="inputId">
                                    <input type="number"
                                    id="inputId"
                                    className="form-control"
                                    nome="id"
                                    onChange={e => this.setState({id:e.target.value})}/>
                                </FormGroup>


                                <FormGroup className label= "Tipo: *"htmlFor="inputTipo">
                                    <input type="text"
                                    id="inputTipo"
                                    className="form-control"
                                    tipo="tipo"
                                    onChange={e => this.setState({tipo:e.target.value})}/>
                                </FormGroup>          
                                <button onClik={this.create}type="button" class="btn btn-success">
                                    <i className="pi pi-save"></i>Salvar</button>
                                
                                <button onClik={this.buscar} type="button" class="btn btn-danger">
                                    <i className="pi pi-times"></i>Buscar</button>
                            </div>

                        </div>

                    </div>

                </Card>
              

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
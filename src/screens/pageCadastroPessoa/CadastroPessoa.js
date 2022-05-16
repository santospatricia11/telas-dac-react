import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';

import Card from "../components/Card";
import FormGroup from '../components/FormGroup';
import {withRouter}from 'react-router-dom';


 class CadastroPessoa extends React.Component{

    state = {
        nome: '',
        cpf: '',
        email:  '',
        endereco:'',
        tipo:''
    }
    salvar=()=>{
        console.log(this.state);
    }
    buscar =()=>{
       console.log(this.buscar);
    }

    cadastro =()=>{
        console.log('Nome:',this.state.nome);
        console.log('CPF:',this.state.cpf);
        console.log('Email:',this.state.email);
        console.log('Endereco:',this.state.endereco);
        console.log('Tipo:',this.state.tipo);
    }
    render(){
        return(
            <div className="container">
                <Card title="Cadastro Pessoa">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup className label= "Nome: *"htmlFor="inputNome">
                                    <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    nome="nome"
                                    onChange={e => this.setState({nome:e.target.value})}/>
                                </FormGroup>

                                <FormGroup className label= "CPF: *"htmlFor="inputCpf">
                                    <input type="number"
                                    id="inputCpf"
                                    className="form-control"
                                    cpf="cpf"
                                    onChange={e => this.setState({cpf:e.target.value})}/>
                                </FormGroup>

                                <FormGroup className label= "Email: *"htmlFor="inputEmail">
                                    <input type="text"
                                    id="inputEmail"
                                    className="form-control"
                                    email="email"
                                    onChange={e => this.setState({email:e.target.value})}/>
                                </FormGroup>

                                <FormGroup className label= "Endereco: *"htmlFor="inputEndereco">
                                    <input type="text"
                                    id="inputEndereco"
                                    classNome="form-control"
                                    endereco="endereco"
                                    onChange={e => this.setState({endereco:e.target.value})}/>
                                </FormGroup>

                                <FormGroup className label= "Tipo: *"htmlFor="inputTipo">
                                    <input type="text"
                                    id="inputTipo"
                                    className="form-control"
                                    tipo="tipo"
                                    onChange={e => this.setState({tipo:e.target.value})}/>
                                </FormGroup>          


                                    <button onClick={this.salvar} type="button" class="btn btn1-success"> 
                                    <i className="pi pi-save"></i>Salvar</button>
                                    
                                    <button onClik={this.buscar} type="button" class="btn btn-light">
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
export default withRouter(CadastroPessoa);
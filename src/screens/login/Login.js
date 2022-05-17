import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';
import Card from "../components/Card"
import FormGroup from '../components/FormGroup';


import {withRouter}from 'react-router-dom';

 class Login extends React.Component{

    state = {
        email: '',
        password: ''
      
    }
    login = ()=>{
        if("monteiro@ifpb.edu.br" == this.state.email && 123 == this.state.password){
            console.log("Logado com Sucesso!")
            this.props.history.pust("/");

        }else{
            alert("Não foi possivel fazer login . Tente novamente!")

        }
    }

    logar =()=>{
        console.log('Email:',this.state.email);
        console.log(':',this.state.password);
      
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 " style={this.styles.colMd6}>
                        <div className="bs-docs-section">
                          
                          
                            <div className="card md-3">
                                <h3 className="card-header"></h3>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail">Email</label>
                                                    <input type="email"className="form-comtrol"id="inputEmail"value={this.state.email}
                                                    onChange={(e)=>this.setState({email:e.target.value})}/>
                                                </div>
                                                                                            
                                                <div className="form-group">
                                                    <label htmlFor="inputPassword">Senha</label>
                                                    <input type="password"className="form-comtrol"id="inputPassword"value={this.state.password}
                                                    onChange={(e)=>this.setState({password:e.target.value})}/>
                                                </div>
                                    
                                                <button type="button" className="btn btn-info"onClick={this.login}>Fazer login</button>
                                            
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
export default withRouter(Login);
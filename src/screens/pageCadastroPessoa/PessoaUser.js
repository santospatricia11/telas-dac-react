import React from "react";
import axios from "axios";

import 'bootswatch/dist/darkly/bootstrap.css';

import Card from "../components/Card";
import FormGroup from '../components/FormGroup';
import {withRouter}from 'react-router-dom';

class PessoaUser extends React.Component{

    state = {
        nome: '',
        cpf: '',
        email:  '',
        password:''
        
    }
create = async ()=>{
      await axios.post("http://localhost:8080/api/pessoa",
    {
        name:this.state.nome,
        cpf:this.state.cpf,
        email:this.state.email,
        password:this.state.password
   

        }
    ).then(response => 
    {
        console.log(response);
    }
    ).catch(error =>
        {
            console.log(error.response);
        }
   
    );
    console.log("request finished");
}

}
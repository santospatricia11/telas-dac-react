import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';

export default class FormGroup extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label htmlFor="inputNome">{this.props.label}</label>
                {this.props.children}
            </div>
        )
    }
       
    
}

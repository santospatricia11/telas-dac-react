import React from "react";
import 'bootswatch/dist/darkly/bootstrap.css';
import Card from "../components/Card"
import FormGroup from '../components/FormGroup';
import axios from "axios";

export default props => {

    const rows = props.pessoas.map(pessoa => {
        return (
            <tr key={pessoa.cpf}>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.email}</td>
                <td>{pessoa.endereco}</td>
                <td>{pessoa.tipo}</td>
                <td>
                    <button type="button" title="Editar"
                        className="btn btn-warning"
                        onClick={e => props.edit(pessoa.cpf)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.delete(pessoa.cpf)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    } )

    return (

        <table className="table table-hover">
            <thead>
                <tr className="table-active">
                    <th scope="col">CPF</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Tipo</th>
                    
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
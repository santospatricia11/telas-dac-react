import React from 'react';

import 'bootswatch/dist/darkly/bootstrap.css';
import Card from "../components/Card"
import FormGroup from '../components/FormGroup';
import axios from "axios"
import { withRouter } from 'react-router-dom';


import PessoaTable from '.././components/PessoaTable';

class ViewPessoa extends React.Component {

    state = {
        name: '',
        id: '',
        pessoas: []
    }

    delete = (pessoaCpf) => {
        axios.delete(`http://localhost:8080/api/pessoa/${pessoaCpf}`,
        ).then(response => {
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    edit = (pessoaCpf) => {
        this.props.history.push(`/updatePessoa/${pessoaCpf}`);
    }

    find = () => {
        var params = '?';

        if (this.state.id !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}id=${this.state.id}`;
        }

        if (this.state.name !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}name=${this.state.name}`;
        }

        axios.get(`http://localhost:8080/api/pessoa/${params}`)
            .then(response => {
                const pessoas = response.data;
                this.setState({ pessoas });
                console.log(pessoas);
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }

    render() {
        return (

            <div className="container">
                <div className='row'>
                    <div className='col-md-12' style={this.styles.colMd612}>
                        <div className="bs-docs-section">

                            <div className="card border-primary mb-3" style={this.styles.cardBorder}>
                                <h3 className="card-header text-center">Consulta de Pessoas</h3>
                                <div className="card-body">

                                    <div className="form-group">
                                        <label className="form-label mt-4">CPF:</label>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputId" placeholder="Digite o CPF da Pessoa" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                                            <label htmlFor="inputId">Digite o CPF da Pessoa</label>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label mt-4">Nome:</label>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="inputName" placeholder="Digite o Nome da Pessoas" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                                                <label htmlFor="inputName">Digite o Nome da Pessoa</label>
                                            </div>

                                            <button onClick={this.find} type="button" className="btn btn-success">
                                                <i className="pi pi-search"></i> Buscar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <br />
                                <div className='row'>
                                    <div className='col-lg-12' >
                                        <div className='bs-component'>
                                            <PessoaTable pessoas={this.state.pessoas}
                                                delete={this.delete}
                                                edit={this.edit} />
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div>
            </div>
        )
    }
    styles = {
        colMd12: {
            position: 'relative'
        },
        cardBorder: {
            outerWidth: '20rem',
            margin: '50px 0 0 0'
        }
    }
}

export default withRouter(ViewPessoa);
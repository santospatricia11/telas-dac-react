import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import NavBarItem from "../components/NavBarItem";
import axios from "axios";
import 'bootswatch/dist/darkly/bootstrap.css';

function NavBar(props) {
    
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className ="container">
              <a  href="/" className ="navbar-brand">Telas Dac Reac</a>
              <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
              </button>
          
              <div className ="collapse navbar-collapse" id="navbarColor02">
                <ul className ="navbar-nav ">
                  <li className ="nav-item">
                    <a className ="nav-link" href="/Home">Home
                      <span className ="visually-hidden">(current)</span>
                    </a>
                  </li>

                  <li className ="nav-item">
                    <a className ="nav-link" href="/Login">Login</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/CadastroPessoa">CadastroPessoa</a>
                  </li>

                  <li className="nav-item">
                    <a className ="nav-link" href="/CadastroProduto">CadastroProduto</a>
                  </li>

                  <li className ="nav-item">
                    <a className = "nav-link" href="/EditarProduto">EditarProduto</a>
                  </li>
                  <li className ="nav-item">
                    <a className="nav-link" href="/DeletarPessoa">DeletarPessoa</a>
                  </li>

                  <li className ="nav-item">
                    <a className ="nav-link" href="/UpdatePessoa">UpdatePessoa</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/UpdateProduto">UpdateProduto</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/DeleteProduto">DeleteProduto</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/ViewwPessoa">ViewPessoa</a>
                  </li>
                
                
                
                </ul>
                    
              </div>
              
            </div>
            
          </nav>
          
        )
    }

export default NavBar;
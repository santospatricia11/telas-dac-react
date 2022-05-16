import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import NavBarItem from "../components/NavBarItem";

import 'bootswatch/dist/darkly/bootstrap.css';

function NavBar(props) {
    
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a  href="/" class="navbar-brand">Telas Dac Reac</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          
              <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <a class="nav-link" href="/Home">Home
                      <span class="visually-hidden">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/CadastroPessoa">Cadastro Pessoa</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/CadastroProduto">CadastroProduto</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/EditarProduto">EditarProduto</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/DeletarPessoa">DeletarPessoa</a>
                  </li>
                
                </ul>
                    
              </div>
              
            </div>
            
          </nav>
          
        )
    }

export default NavBar;
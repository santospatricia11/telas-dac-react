import 'bootswatch/dist/darkly/bootstrap.css';
import { Route,BrowserRouter } from 'react-router-dom';

import CadastroPessoa from "../screens/pageCadastroPessoa/CadastroPessoa";
import CadastroProduto from "../screens/pageCadastroProduto/CadastroProduto";
import EditarProduto from "../screens/pageDeletePessoa/DeletarPessoa";
import DeletarPessoa from "../screens/pageEditaProduto/EditarProduto";
import Home from "../screens/pageHome/Home";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Route component={Home} path="/Home" exact/>
      <Route component={CadastroPessoa} path="/CadastroPessoa"/>
      <Route component={CadastroProduto} path="/CadastroProduto" />
      <Route component={DeletarPessoa} path="/DeletarPessoa"  />
      <Route component={EditarProduto} path="/EditarProduto"  />

    </BrowserRouter>
  )
}
export default AppRoutes;




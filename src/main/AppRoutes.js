import 'bootswatch/dist/darkly/bootstrap.css';
import { Route,BrowserRouter } from 'react-router-dom';
import Login from '../screens/login/Login';
import axios from "axios";
import CadastroPessoa from "../screens/pageCadastroPessoa/CadastroPessoa";
import CadastroProduto from "../screens/pageCadastroProduto/CadastroProduto";
import EditarProduto from "../screens/pageDeletePessoa/DeletarPessoa";
import DeleteProduto from '../screens/pageDeleteProduto/DeleteProduto';
import DeletarPessoa from "../screens/pageEditaProduto/EditarProduto";
import Home from "../screens/pageHome/Home";
import UpdatePessoa from '../screens/pageUdatePessoa/UpdatePessoa';
import UpdateProduto from '../screens/pageUpdateProduto/UpdateProduto';
import ViewPessoa from '../screens/viewPessoa/ViewPessoa';
function AppRoutes() {

  return (
    <BrowserRouter>
      <Route component={Home} path="/Home" exact/>
      <Route component={CadastroPessoa} path="/CadastroPessoa"/>
      <Route component={CadastroProduto} path="/CadastroProduto" />
      <Route component={DeletarPessoa} path="/DeletarPessoa"  />
      <Route component={EditarProduto} path="/EditarProduto"  />
      <Route component={Login} path="/Login" />
      <Route component={UpdatePessoa} path="/UpdatePessoa" />
      <Route component={UpdateProduto} path="/UpdateProduto" />
      <Route component={DeleteProduto} path="/DeleteProduto" />
      <Route component={ViewPessoa} path="/ViewPessoa" />

    </BrowserRouter>
  )
}
export default AppRoutes;




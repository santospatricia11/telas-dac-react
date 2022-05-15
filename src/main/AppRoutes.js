import 'bootswatch/dist/darkly/bootstrap.css';
import { Route,BrowserRouter } from 'react-router-dom';

import CadastroPessoa from "../screens/CadastroPessoa";
import CadastroProduto from "../screens/CadastroProduto";
import EditarProduto from "../screens/EditarProduto";
import DeletarPessoa from "../screens/DeletarPessoa";
import Home from "../screens/Home";

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




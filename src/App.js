import React from 'react';
import './App.css';
import 'bootswatch/dist/darkly/bootstrap.css';

import NavBar from './components/NavBar';
import AppRoutes from './main/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
export default class App extends React.Component{
  render() {

    return (
      < BrowserRouter>
      
      <div>
        <NavBar/>
       <AppRoutes/>
       
      </div>
      
      </BrowserRouter>
  
    );
  }
}




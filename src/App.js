import React from 'react';
import './App.css';
import 'bootswatch/dist/darkly/bootstrap.css';
import axios from "axios";
import NavBar from "../src/screens/components/NavBar";
import AppRoutes from './main/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
export default class App extends React.Component{
  render() {

    return (
      
      
      <div>
        <NavBar/>
       <AppRoutes/>
       
      </div>
      
    
  
    );
  }
}




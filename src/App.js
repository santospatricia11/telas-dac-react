
import './App.css';
import {Formik ,Form, Field,ErrorMessage}from "formik";
import * as yup from "yup";
import React from "react";

function App() {
  <p>ddddddddd</p>
 
        <h1>Cadastro Usuario</h1>
      <Formik 
          initialValues={{}}onSubmit={handleClickCadastro}
          validationSchema={validationCadastro}
          
        >
          <Form className='cadastro-form'>
              <div className='cadastro-form-group'>
                <Field name="email"
                className="form-field"
                placeHolder="Email"></Field>

                <ErrorMessage 
                component="span"
                name="email"
                className="form-error"/>
              </div>

              <div className='login-form-group'>
                <Field name="password"
                className="form-field"
                placeHolder="Senha"></Field>
                <ErrorMessage 
                component="span"
                name="password"
                className="form-error"/>
              </div>

              <div className='login-form-group'>
                <Field name="confirmePassword"
                className="form-field"
                placeHolder="Confirme sua Senha"></Field>
                <ErrorMessage 
                component="span"
                name="password"
                className="form-error"/>
              </div>
              <button className="button"type="submit">Cadastro</button>
          </Form>
        </Formik>
    </div>
  );
}

export default App;

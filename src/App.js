
import './App.css';
import {Formik ,Form, Field,ErrorMessage}from "formik";
import * as yup from "yup";
import React from "react";

function App() {
  const handleClickLogin = (values)=>console.log(values);
  const validationLogin=yup.object().shape({
     email: yup.string().email("o email não é valido").required(),
     password:yup.string().min(8).required(),
    });
 
  const handleClickCadastro = (values)=> console.log(values);
  const validationCadastro= yup.object().shape({
    email: yup.string().email("o email não é valido").required(),
    password:yup.string().min(8).required(),
    confirmePassword:yup.string().oneOf([yup.ref("password"),null,"As senhas não são iguais."]),

  });
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik 
          initialValues={{}}onSubmit={handleClickLogin}
          validationSchema={validationLogin}
          
        >
          <Form className='login-form'>
              <div className='login-form-group'>
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
              <button className="button"type="submit">Login</button>
          </Form>
        </Formik>
     

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

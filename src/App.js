
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Cadastro Pessoa
        </p>
        <div>
          <label className='label-formulario'>Nome</label>
          <input className='input-fom'></input>
          <label className='label-formulario'>CPF</label>
          <input className='input-fom'></input>
          <label className='label-formulario'>Email</label>
          <input className='input-fom'></input>
          <label className='label-formulario'>Telefone</label>
          <input></input>
          <label className='label-formulario'>Tipo</label>
          <input></input>
        </div>
       <button className='buntton'>Salvar</button>
      </header>
    </div>
  );
}

export default App;

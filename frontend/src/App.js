import './App.css';
import { useState } from 'react';

function App() {
  const [numero, setNumero] = useState('');
  const [cor, setCor] = useState('');
  const [msg, setMsg] = useState('');
  
  function buscaNumero() {
    fetch('http://localhost:80/desafio/sortear.php')
      .then(async (res) => {
        const data = await res.json();
        const num = data.num;
        
        if (num >= 0 && num <= 50) {
          setCor('verde');
        } 
        else if (num <= 70) {
          setCor('amarelo');
        } 
        else if (num <= 100) {
          setCor('vermelho');
        }

        setNumero(num);
      });
  }
  
  function salvaNumero() {
    const opcoes = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({num: numero})
    };
    
    fetch('http://localhost:80/desafio/salvar.php', opcoes)
      .then(async (res) => {
        const data = await res.json();
        setMsg(data.msg);
      });
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>{msg}</h1>
        <p>Número sorteado: <span className={`${cor}`}>{numero}</span></p>
        <div className='buttons'>
          <div className='buttonBuscar'>
            <button className='button' onClick={buscaNumero}>Buscar Número</button>
          </div>
          <div className='buttonSalvar'>
            <button className='button'onClick={salvaNumero}>Salvar Número</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
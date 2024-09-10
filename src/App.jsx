// codigo basico e padrão gerado pelo propio stack blitz para React.jsx

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MeuComponentes from './componentes/MeuComponentes';
import Imagem from './componentes/Imagem';
import Textos from './componentes/Textos';
import ListaDeCompras from './componentes/ListaDeCompras';
import Contador from './componentes/Contador';
import ContadorNegativo from './componentes/ContadorNegativo';
import ToggleButton from './componentes/ToggleButton';
import UserInfo from './componentes/UserInfo';
import Saudacao from './componentes/Saudacao.jsx';
  function App() {
    const [count, setCount] = useState(0);
    const [nome,setNome]=useState('');
    const handleChange=(event)=>{
      setNome(event.target.value);
    };

    return (
      <>
      {/* codigo basico gerado pelo stackblitz */}
        <div>
          <a href="https:vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https:react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Paulo Sérgio Monteiro Lopes Filho</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <hr />
          {/* componentes separados */}
        <MeuComponentes />
        <Imagem />
        <Textos />
        <ListaDeCompras />
        <Contador/>
        <ContadorNegativo/>
        <ToggleButton/>
        <h1>informações do usuario</h1>
        <UserInfo/>
        <Saudacao/>
        <input type="text" name="" value={nome} onChange={handleChange} placeholder='Digite seu nome' id="" />
        <Saudacao nome={nome}/>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Footer} from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Users } from './Components/Users';
import { Print } from './Components/Print';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home title="Início"/>}/>
        <Route path="/users" element={<Users title="Usuários"/>}/>
        <Route path="/print" element={<Print title="Imprimir"/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
     
    </div>
  );
}

export default App;

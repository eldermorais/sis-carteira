import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Footer} from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Users } from './Components/Users';
import { Login } from './Components/Login';
import { Resgister } from './Components/Resgister';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home title="Carteira de Passe Livre Intermunicipal"/>}/>
        <Route path="/users" element={<Users title="Usuários"/>}/>
        <Route path="/login" element={<Login title="Login"/>}/>
        <Route path="/register" element={<Resgister title="Register"/>}/>

      </Routes>
      <Footer/>

      </BrowserRouter>
     
    </div>
  );
}

export default App;

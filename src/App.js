import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Footer} from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Login } from './pages/Login';
import { Resgister } from './pages/Resgister';


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

import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import './App.css';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastrarPost from './components/postagens/cadastrarPost/CadastrarPost';
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/Postagem" element={<CadastrarPost />} />
          <Route path="/Postagem/:id" element={<CadastrarPost />} />
          <Route path="/Tema" element={<CadastroTema />} />
          <Route path="/Tema/:id" element={<CadastroTema />} />
          <Route path="/deletar/Postagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletar/Tema/:id" element={<DeletarTema />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
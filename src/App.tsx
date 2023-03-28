import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import MainPage from './pages/MainPage';
import SzakmaiTap from './pages/SzakmaiTap';
import Idopont from './pages/Idopont';

interface State{

}


export default class App extends Component<{}, State>{


  render() {
    
    return <div>
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/tapasztalat' element={<SzakmaiTap/>}></Route>
        <Route path='/idopont' element={<Idopont/>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  }
}


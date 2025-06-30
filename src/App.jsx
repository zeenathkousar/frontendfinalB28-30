import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navbar';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import { Route,Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

    </>
  )
}

export default App

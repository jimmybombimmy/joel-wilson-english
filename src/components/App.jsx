import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Home from './home/Home.jsx';

function App() {

  return (
    <>
    <Navbar expand="lg"/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </>
  )
}

export default App
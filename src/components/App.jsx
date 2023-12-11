import { useState } from 'react'
import '../styles/App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import NavFile from './navbar/NavFile.jsx'
import Home from './home/Home.jsx';

function App() {

  return (
    <>
    <NavFile expand="lg"/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </>
  )
}

export default App

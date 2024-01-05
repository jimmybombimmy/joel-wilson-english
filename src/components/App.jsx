import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Home from './home/Home.jsx';
import Footer from './Footer/Footer.jsx';

function App() {

  return (
    <>
    <Navbar expand="lg"/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
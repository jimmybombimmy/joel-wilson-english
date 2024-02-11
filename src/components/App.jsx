import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Home from './home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import TestArticle from './ArticleTest/TestArticle.jsx';
import About from './About/About.jsx';
import ArticleTest from './ArticleTest/ArticleTest.jsx';

function App() {

  return (
    <>
    <Navbar expand="lg"/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/secret-article-test-page" element={<ArticleTest />}></Route>
      <Route path="/secret-article-test-page/:id" element={<TestArticle />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
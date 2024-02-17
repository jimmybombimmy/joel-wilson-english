import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Home from './home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import TestArticle from './ArticleTest/TestArticle.jsx';
import About from './About/About.jsx';
import ArticleTest from './ArticleTest/ArticleTest.jsx';
import PageInProgress from './PageInProgress/PageInProgress.jsx';

function App() {

  return (
    <main>
    <Navbar expand="lg"/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>

      <Route path="/articles" element={<PageInProgress />}></Route>
      <Route path="/one-to-one-classes" element={<PageInProgress />}></Route>
      <Route path="/group-classes" element={<PageInProgress />}></Route>

      <Route path="/secret-article-test-page" element={<ArticleTest />}></Route>
      <Route path="/secret-article-test-page/:id" element={<TestArticle />}></Route>
    </Routes>
    <Footer />
    </main>
  )
}

export default App
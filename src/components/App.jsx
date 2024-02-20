import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Home from './home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import IndividualArticle from './Articles/IndividualArticle/IndividualArticle.jsx';
import About from './About/About.jsx';
import PageInProgress from './PageInProgress/PageInProgress.jsx';
import ArticlesTestPage from './Articles/ArticlesTestPage.jsx';
import ArticlesPage from './Articles/ArticlesPage.jsx';

function App() {

  return (
    <main>
    <Navbar expand="lg"/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>

      <Route path="/articles" element={<ArticlesPage />}></Route>
      <Route path="/articles/:id" element={<IndividualArticle />}></Route> 
      <Route path="/one-to-one-classes" element={<PageInProgress />}></Route>
      <Route path="/group-classes" element={<PageInProgress />}></Route>

      <Route path="/secret-article-test-page" element={<ArticlesTestPage />}></Route>
      <Route path="/secret-article-test-page/:id" element={<IndividualArticle />}></Route>
    </Routes>
    <Footer />
    </main>
  )
}

export default App
//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.js';
import Article from './components/Article.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Footer />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}
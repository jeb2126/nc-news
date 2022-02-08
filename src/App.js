import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';
import ArticleList from './components/ArticleList';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
         <Header />
         <Topics />
         <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topics/:topic" element={<ArticleList />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

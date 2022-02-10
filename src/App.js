import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Comments from './components/Comments';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';

function App() {
  // To do:
  // create context for user login
  // set up default user 
  // Post a new comment to an existing article as default user
  // delete own comments as default user 
  
  return (
    <BrowserRouter>
      <div className="App">
         <Header />
         <Topics />
         <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topics/:topic" element={<ArticleList />}></Route>
            <Route path="/articles" element={<ArticleList />}></Route>
            <Route path="/articles/:article_id" element={<Article />}></Route>
            <Route path="/articles/:article_id/comments" element={<Comments />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';
import ArticleList from './components/ArticleList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
         <Header />
          <Topics />
          <ArticleList />
      </div>
  );
}

export default App;

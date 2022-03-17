import "./App.css";
import "./Header.css";
import "./Topics.css";
import "./ArticleList.css";
import "./Voter.css";
import "./Article.css";
import "./Comments.css";
import "./Login.css";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Topics from "./components/Topics";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import Comments from "./components/Comments";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ProfileContext } from "./contexts/Profile";

function App() {
  // To do:
  // Post a new comment to an existing article as default user
  // delete own comments as default user
  const [profile, setProfile] = useState();

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Topics />
          <Routes>
            <Route path="/" element={<ArticleList />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/topics/:topic" element={<ArticleList />}></Route>
            <Route path="/articles" element={<ArticleList />}></Route>
            <Route path="/articles/:article_id" element={<Article />}></Route>
            <Route
              path="/articles/:article_id/comments"
              element={<Comments />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;

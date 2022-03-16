import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { ProfileContext } from "../contexts/Profile";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Login = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const attemptLogin = (event) => {
    event.preventDefault();
    if (username === "jessjelly") {
      setProfile(username);
      setError(false);
      navigate("/");
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    if (event.target.value === "jessjelly") {
      setUsername(event.target.value);
    }
  };

  return (
    <form onSubmit={attemptLogin} className="login">
      <label className="loginLabel__Login">
        Username: (Please login as: jessjelly)
        <input
          type="text"
          name="username"
          onChange={handleChange}
          className="loginInput__Login"
        ></input>
      </label>
      {error ? <p className="loginError__Login">Invalid Username</p> : <p />}
      <button variant="contained" className="loginSubmitBtn__Login">
        Login
      </button>
    </form>
  );
};

export default Login;

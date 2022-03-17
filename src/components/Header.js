import { Link, useNavigate } from "react-router-dom";
import { ProfileContext } from "../contexts/Profile";
import { useContext } from "react";
import Profile from "./Profile";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export const Header = () => {
  const loginLink = (
    <Link className="Header__Login" to="/login">
      Login
    </Link>
  );
  let loggedInAs = <p></p>;
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(ProfileContext);

  const logout = () => {
    setProfile();
    navigate("/");
  };

  if (profile) {
    loggedInAs = (
      <div className="Header__profileContainer">
        <Box mb={2}>
          <Button variant="contained" color="warning" onClick={logout}>
            Logout
          </Button>
        </Box>
        <Box>
          <Profile />
        </Box>
      </div>
    );
  }

  return (
    <header className="Header">
      {profile ? loggedInAs : loginLink}
      <h1>
        <Link className="Header__title" to={"/"}>
          NC-News
        </Link>
      </h1>
    </header>
  );
};

export default Header;

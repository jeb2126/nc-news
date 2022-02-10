import { Link, useNavigate } from "react-router-dom";
import { ProfileContext } from "../contexts/Profile";
import { useContext } from "react";
import Profile from "./Profile";

export const Header = () => {
    const loginLink = <Link to="/login">Login</Link>;
    let loggedInAs = <p></p>;
    const navigate = useNavigate();
    const { profile, setProfile } = useContext(ProfileContext);

    const logout = () => {
        setProfile();
        navigate("/");
    }

    if (profile) {
        loggedInAs = (
            <div>
                <button onClick={logout}>Logout</button>
                <Profile />
            </div>
        )
    }

    return ( 
    <header>
        <h1 className="Header"><Link to={'/'}>NC-News</Link></h1>
        {profile ? loggedInAs : loginLink}
    </header>
    )
}

export default Header;
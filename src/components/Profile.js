import { useContext } from "react";
import { ProfileContext } from "../contexts/Profile";

const Profile = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  return <h3 className="Profile__header">{profile}</h3>;
};

export default Profile;

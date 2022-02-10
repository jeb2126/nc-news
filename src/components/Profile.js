import { useContext } from "react"
import { ProfileContext } from "../contexts/Profile"

const Profile = () => {
    const {profile, setProfile} = useContext(ProfileContext);

    return <h1>{profile}</h1>;
}

export default Profile;
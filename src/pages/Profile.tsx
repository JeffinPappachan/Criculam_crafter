import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";


const Profile = () => {
  const { profile, setProfile } = useContext(DataContext);
  console.log(profile);
  return (
    <div >
      <div >
        <h1>Profile</h1>

        <input
          required
          type="text"
          placeholder="Name"
          onChange={(event) =>
            setProfile({ ...profile, name: event.target.value })
          }
        />
        <input
          required
          type="text"
          placeholder="College Enrolled"
          onChange={(event) =>
            setProfile({ ...profile, college: event.target.value })
          }
        />
        <input
          required
          type="text"
          placeholder="Email"
          onChange={(event) =>
            setProfile({ ...profile, years: event.target.value })
          }
        />
        

        <Button>
          <Link style={styles.link} to="/profile/syllabus">
            Syllabus
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Profile;
const styles = {
  link: {
    color: "white",
  },
};

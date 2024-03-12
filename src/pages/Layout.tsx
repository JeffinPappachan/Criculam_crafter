import { Outlet, Link } from "react-router-dom";
import { Heading1 } from "../components/heading1";
import { Button } from "@/components/ui/button";

import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";

interface Profile {
  name: string;
  college: string;
  years: string;
}

const Layout = () => {
  const { profile, setProfile } = useContext(DataContext) as { profile: Profile, setProfile: React.Dispatch<React.SetStateAction<Profile>> };

  useEffect(() => {
    if (profile.name !== "" && profile.college !== "" && profile.years !== "") {
      setShow(true);
    }
  }, [profile]);

  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <div>
          <Heading1 />
          <div>
            <Button>
              <Link style={styles.link} to="/">
                Home
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="profile">
                Profile
              </Link>
            </Button>
            {show && (
              <Button>
                <Link style={styles.link} to="/profile/syllabus">
                  Syllabus
                </Link>
              </Button>
            )}
            <Button>
              <Link style={styles.link} to="overview">
                Overview
              </Link>
            </Button>
            <Button>
              <Link style={styles.link} to="contact">
                Contact
              </Link>
            </Button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const styles = {
  link: {
    color: "white",
  },
  nav: {
    position: "sticky",
    top: "0",
    backgroundColor: "darkslategray",
    zIndex: "100",
    borderBottom: "1px solid #eaeaea",
    padding: "1rem",
    width: "100%",
    borderRadius: "0.5rem",
  },
};


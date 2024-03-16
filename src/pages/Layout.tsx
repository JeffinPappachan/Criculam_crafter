import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Label } from "@/components/ui/label";

interface Profile {
  name: string;
  college: string;
  years: string;
}

const Layout = () => {
  const { profile, setProfile } = useContext(DataContext) as {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  };

  useEffect(() => {
    if (profile.name !== "" && profile.college !== "" && profile.years !== "") {
      setShow(true);
    }
  }, [profile]);

  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <nav className="flex w-screen items-center justify-between sticky z-10 top-0 border-2 border-b-2 border-b-primary bg-secondary rounded-3xl p-5">
        <Label className="sm:text-base md:text-lg lg:text-xl">
          Syllabus Generator
        </Label>
        <div className="flex justify-evenly gap-5">
          <Button size="sm">
            <Link to="/">Home</Link>
          </Button>
          <Button size="sm">
            <Link to="profile">Profile</Link>
          </Button>
          {show && (
            <Button size="sm">
              <Link to="/profile/syllabus">Syllabus</Link>
            </Button>
          )}
          <Button size="sm">
            <Link to="overview">Overview</Link>
          </Button>
          <Button size="sm">
            <Link to="contact">Contact</Link>
          </Button>
          <ModeToggle />
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

const styles = {
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

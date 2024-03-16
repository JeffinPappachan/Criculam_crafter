import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputComponent } from "@/components/InputComponent";

const Profile = () => {
  const { profile, setProfile } = useContext(DataContext);
  console.log(profile);
  return (
    <div className="w-screen p-20 flex flex-col items-center justify-center">
      <Card className="p-10 w-[90%] max-w-[500px]">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Personel details</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center flex-col justify-center">
          <div className="flex flex-col gap-3">
            <InputComponent
              placeholder="Name"
              onChange={(event) =>
                setProfile({ ...profile, name: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="College Enrolled"
              onChange={(event) =>
                setProfile({ ...profile, college: event.target.value })
              }
            />
            <input
              type="date"
              className="p-2 rounded-md border-1 border-primary bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(event) =>
                setProfile({ ...profile, dob: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Email"
              onChange={(event) =>
                setProfile({ ...profile, years: event.target.value })
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="sm" variant="secondary" className="bg-green-800">
            <Link to="/profile/syllabus">Submit</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Profile;

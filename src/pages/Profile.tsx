import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useContext, useState } from "react";
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
            <Input
              type="text"
              required
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
            <Input
              required
              type="text"
              placeholder="Gender"
              onChange={(event) =>
                setProfile({ ...profile, gender: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Religion"
              onChange={(event) =>
                setProfile({ ...profile, religion: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Community/Category"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  CommunityCategory: event.target.value,
                })
              }
            />
            <Input
              required
              type="text"
              placeholder="Fathers Name"
              onChange={(event) =>
                setProfile({ ...profile, father: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Mothers Name"
              onChange={(event) =>
                setProfile({ ...profile, mother: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Guardian Name"
              onChange={(event) =>
                setProfile({ ...profile, guardian: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Aadhar Number"
              onChange={(event) =>
                setProfile({ ...profile, aadhar: event.target.value })
              }
            />
            <Input
              required
              type="tel"
              placeholder="Phone Number"
              onChange={(event) =>
                setProfile({ ...profile, phno: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Dayscholar/Hosteller"
              onChange={(event) =>
                setProfile({ ...profile, dayscholarhostel: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Address"
              onChange={(event) =>
                setProfile({ ...profile, address: event.target.value })
              }
            />
            <Input
              required
              type="text"
              placeholder="Pincode"
              onChange={(event) =>
                setProfile({ ...profile, pincode: event.target.value })
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="sm" variant="secondary" className="bg-green-800">
            <Link to="/profile/syllabus">Next</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Profile; 

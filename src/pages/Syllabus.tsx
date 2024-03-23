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

const Academicdeatils = () => {
  const { profile, setProfile } = useContext(DataContext);
  return (
    <div className="w-screen p-20 flex flex-col items-center justify-center">
      <Card className="p-10 w-[90%] max-w-[500px]">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Academic Details</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center flex-col justify-center">
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              required
              placeholder="University Enrolled"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  UniversityEnrolled: event.target.value,
                })
              }
            />
            <Input
              type="text"
              required
              placeholder="University ID"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  UniversityID: event.target.value,
                })
              }
            />
            <Input
              type="text"
              required
              placeholder="Ongoing/Hostler"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  OngoingHostler: event.target.value,
                })
              }
            />
            <Input
              type="text"
              required
              placeholder="Previous Board/University"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  prevoiusboarduni: event.target.value,
                })
              }
            />
            <Input
              type="text"
              required
              placeholder="Previous Course"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  PreviousCourse: event.target.value,
                })
              }
            />
            <Input
              type="number"
              min="1900"
              max="2099"
              required
              placeholder="Previous Passing Year"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  Previouspassingyear: event.target.value,
                })
              }
            />
            <Input
              type="text"
              required
              placeholder="10 Board Name"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  Tenboardname: event.target.value,
                })
              }
            />
            <Input
              type="text"
              required
              placeholder="10th Roll No"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  Tenrollno: event.target.value,
                })
              }
            />
            <Input
              type="number"
              min="1900"
              max="2099"
              required
              placeholder="10th Passing year"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  Tenpassingyear: event.target.value,
                })
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="sm" variant="secondary" className="bg-green-800">
            <Link to="/profile/syllabus/curriculum">Next</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
// Import the Syllabus component

export default Academicdeatils;
